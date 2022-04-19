import { ModuleDefinitionsContext } from "./parser/grammar3rdParser.js";
import { Result } from "./types.js";
/**
 * Data structure to store syntax error reported from parsre
 */
declare type SyntaxError = {
    line: number;
    column: number;
    msg: string;
};
/**
 * Error class to be returned
 */
declare class ParserError extends Error {
    errors: SyntaxError[];
    constructor(errors: SyntaxError[]);
}
/**
 * Parse ASN.1 definitino
 * @param text ASN.1 definition
 */
export declare function parse(text: string): Result<ModuleDefinitionsContext, ParserError>;
export {};
//# sourceMappingURL=parser.d.ts.map