export const VERSION = '0.1.0';

// Core types
export type {
  PulseResult,
  Flag,
  FlagSeverity,
  ReflectionResult,
  Improvement,
  TechDebtItem,
  Action,
  HeartbeatReport,
} from './core/types.js';
export {
  FlagSchema,
  FlagSeveritySchema,
  PulseResultSchema,
  ImprovementSchema,
  TechDebtItemSchema,
  ReflectionResultSchema,
  ActionSchema,
} from './core/types.js';

// Config
export type { HeartbeatConfig } from './core/config.js';
export { HeartbeatConfigSchema } from './core/config.js';

// Errors
export { HeartbeatError, ChecklistParseError, ReflectionError } from './core/errors.js';

// Module contracts
export type { IMemoryModule, EpisodicTrace, MemoryEntry, SemanticLesson } from './modules/memory.js';
export type { IObservabilityModule, Trace, TokenSpendSummary } from './modules/observability.js';
export type { IPlannerModule, SelfImprovementTask } from './modules/planner.js';
export type { ICritiqueModule, AuditResult } from './modules/critique.js';
export type { IHitlGateway, Alert } from './modules/hitl.js';
