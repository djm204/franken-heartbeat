export interface CliArgs {
  configPath?: string;
  heartbeatFilePath?: string;
  dryRun: boolean;
  projectId: string;
}

export function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    dryRun: false,
    projectId: 'default',
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case '--config':
        args.configPath = argv[++i];
        break;
      case '--heartbeat-file':
        args.heartbeatFilePath = argv[++i];
        break;
      case '--dry-run':
        args.dryRun = true;
        break;
      case '--project-id':
        args.projectId = argv[++i] ?? 'default';
        break;
    }
  }

  return args;
}
