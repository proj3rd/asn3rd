import antlr4 from "antlr4";
import grammar3rdLexer from "./parser/asn1Lexer.js";
import grammar3rdParser from "./parser/asn1Parser.js";
/**
 * Listener to store syntax errors to variables
 */
class ParserErrorListener {
    constructor() {
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({ line, column, msg });
    }
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) { }
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) { }
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) { }
}
/**
 * Error class to be returned
 */
class ParserError extends Error {
    constructor(errors) {
        super();
        this.errors = errors;
    }
}
/**
 * Parse ASN.1 definitino
 * @param text ASN.1 definition
 */
export function parse(text) {
    const chars = new antlr4.InputStream(text);
    const lexer = new grammar3rdLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new grammar3rdParser(tokens);
    parser.buildParseTrees = true;
    const errorListener = new ParserErrorListener();
    parser.addErrorListener(errorListener);
    const moduleDefinitionsContext = parser.moduleDefinitions();
    const { errors } = errorListener;
    if (errors.length) {
        return [new ParserError(errors), undefined];
    }
    return [null, moduleDefinitionsContext];
}
//# sourceMappingURL=parser.js.map