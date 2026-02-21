export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export interface ILlmClient {
  complete(prompt: string, options?: { maxTokens?: number }): Promise<Result<string>>;
}
