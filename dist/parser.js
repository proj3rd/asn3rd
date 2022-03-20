"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const antlr4_1 = __importDefault(require("antlr4"));
const grammar3rdLexer_js_1 = __importDefault(require("./parser/grammar3rdLexer.js"));
const grammar3rdParser_js_1 = __importDefault(require("./parser/grammar3rdParser.js"));
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
function parse(text) {
    const chars = new antlr4_1.default.InputStream(text);
    const lexer = new grammar3rdLexer_js_1.default(chars);
    const tokens = new antlr4_1.default.CommonTokenStream(lexer);
    const parser = new grammar3rdParser_js_1.default(tokens);
    parser.buildParseTrees = true;
    const errorListener = new ParserErrorListener();
    parser.addErrorListener(errorListener);
    parser.moduleDefinitions();
    const { errors } = errorListener;
    if (errors.length) {
        return [new ParserError(errors), undefined];
    }
    return [null, parser];
}
exports.parse = parse;
//# sourceMappingURL=parser.js.map