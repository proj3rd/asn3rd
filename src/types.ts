export type Result<T, E extends Error = Error> = [E, undefined] | [null, T];
