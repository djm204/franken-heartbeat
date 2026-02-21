#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { parseArgs } from './args.js';
import { HeartbeatConfigSchema } from '../core/config.js';
import { PulseOrchestrator } from '../orchestrator/pulse-orchestrator.js';
import type { ILlmClient } from '../reflection/types.js';
import type { IMemoryModule } from '../modules/memory.js';
import type { IObservabilityModule } from '../modules/observability.js';
import type { IPlannerModule } from '../modules/planner.js';
import type { ICritiqueModule } from '../modules/critique.js';
import type { IHitlGateway } from '../modules/hitl.js';
import type { GitStatusResult } from '../checker/deterministic-checker.js';
import { exec } from 'node:child_process';

// Stub implementations for standalone mode
// In production, these would be wired to real module implementations
const stubMemory: IMemoryModule = {
  getRecentTraces: async () => [],
  getSuccesses: async () => [],
  getFailures: async () => [],
  recordLesson: async () => {},
};

const stubObservability: IObservabilityModule = {
  getTraces: async () => [],
  getTokenSpend: async () => ({ totalTokens: 0, totalCostUsd: 0, breakdown: [] }),
};

const stubPlanner: IPlannerModule = {
  injectTask: async () => {},
};

const stubCritique: ICritiqueModule = {
  auditConclusions: async () => ({ passed: true, reason: 'stub', flaggedItems: [] }),
};

const stubHitl: IHitlGateway = {
  sendMorningBrief: async () => {},
  notifyAlert: async () => {},
};

const stubLlm: ILlmClient = {
  complete: async () => ({
    ok: true as const,
    value: JSON.stringify({ patterns: [], improvements: [], techDebt: [] }),
  }),
};

async function getGitStatus(): Promise<GitStatusResult> {
  return new Promise((resolve) => {
    exec('git status --porcelain', (err, stdout) => {
      if (err) {
        resolve({ dirty: false, files: [] });
        return;
      }
      const files = stdout.trim().split('\n').filter(Boolean);
      resolve({ dirty: files.length > 0, files });
    });
  });
}

async function main(): Promise<void> {
  const cliArgs = parseArgs(process.argv.slice(2));

  const configOverrides: Record<string, unknown> = {};
  if (cliArgs.heartbeatFilePath) {
    configOverrides['heartbeatFilePath'] = cliArgs.heartbeatFilePath;
  }

  const config = HeartbeatConfigSchema.parse(configOverrides);

  const orchestrator = new PulseOrchestrator({
    memory: stubMemory,
    observability: stubObservability,
    planner: cliArgs.dryRun ? { injectTask: async () => {} } : stubPlanner,
    critique: stubCritique,
    hitl: cliArgs.dryRun ? { sendMorningBrief: async () => {}, notifyAlert: async () => {} } : stubHitl,
    llm: stubLlm,
    gitStatusExecutor: getGitStatus,
    clock: () => new Date(),
    config,
    readFile: async (path) => {
      try {
        return await readFile(path, 'utf-8');
      } catch {
        return '';
      }
    },
    writeFile: cliArgs.dryRun
      ? async () => {}
      : async (path, content) => { await writeFile(path, content, 'utf-8'); },
    projectId: cliArgs.projectId,
  });

  const report = await orchestrator.run();

  // Output report as JSON
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
}

// Graceful shutdown
const shutdown = (signal: string) => {
  process.stderr.write(`Received ${signal}, shutting down...\n`);
  process.exit(0);
};
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

main().catch((err: unknown) => {
  process.stderr.write(`Fatal error: ${err instanceof Error ? err.message : String(err)}\n`);
  process.exit(1);
});
