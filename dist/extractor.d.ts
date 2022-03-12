declare type Result<T> = [Error, undefined] | [null, T];
/**
 * Extract ASN.1 definition.
 * @param text Text containing ASN.1 definition and others.
 */
export declare function extract(text: string): Result<string>;
export {};
//# sourceMappingURL=extractor.d.ts.map