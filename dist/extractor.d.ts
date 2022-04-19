import { Result } from "./types.js";
export declare type ExtractorOptions = {
    excludeNonTagComment?: boolean;
};
/**
 * Extract ASN.1 definition.
 * @param text Text containing ASN.1 definition and others.
 */
export declare function extract(text: string, options?: ExtractorOptions): Result<string>;
//# sourceMappingURL=extractor.d.ts.map