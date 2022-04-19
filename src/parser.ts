import antlr4 from "antlr4";
import grammar3rdLexer from "./parser/grammar3rdLexer.js";
import grammar3rdParser, { ModuleDefinitionsContext } from "./parser/grammar3rdParser.js";
import { Result } from "./types.js";

/**
 * Data structure to store syntax error reported from parsre
 */
type SyntaxError = {
  line: number;
  column: number;
  msg: string;
};

/**
 * Listener to store syntax errors to variables
 */
class ParserErrorListener {
  public errors: SyntaxError[] = [];

  syntaxError(
    recognizer: unknown,
    offendingSymbol: unknown,
    line: number,
    column: number,
    msg: string,
    e: unknown
  ) {
    this.errors.push({ line, column, msg });
  }

  reportAmbiguity(
    recognizer: unknown,
    dfa: unknown,
    startIndex: number,
    stopIndex: number,
    exact: unknown,
    ambigAlts: unknown,
    configs: unknown
  ) {}

  reportAttemptingFullContext(
    recognizer: unknown,
    dfa: unknown,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: unknown,
    configs: unknown
  ) {}

  reportContextSensitivity(
    recognizer: unknown,
    dfa: unknown,
    startIndex: number,
    stopIndex: number,
    prediction: unknown,
    configs: unknown
  ) {}
}

/**
 * Error class to be returned
 */
class ParserError extends Error {
  public errors: SyntaxError[];

  constructor(errors: SyntaxError[]) {
    super();
    this.errors = errors;
  }
}

/**
 * Parse ASN.1 definitino
 * @param text ASN.1 definition
 */
export function parse(text: string): Result<ModuleDefinitionsContext, ParserError> {
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
