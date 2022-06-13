import antlr4 from "antlr4";
import {
  ObjectSetContext,
  TypeContext,
  ValueContext,
} from "../parser/asn1Parser";

/**
 * Grammar
 * ```
 * type | value | objectSet
 * ```
 */
export class ActualParameterVisitor {
  public visitChildren(ctx: antlr4.ParserRuleContext) {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof TypeContext) {
      return childCtx.accept(new TypeVisitor());
    }
    if (childCtx instanceof ValueContext) {
      return childCtx.accept(new ValueVisitor());
    }
    if (childCtx instanceof ObjectSetContext) {
      return childCtx.accept(new ObjectSetVisitor());
    }
    throw Error("Unexpected ");
  }
}
