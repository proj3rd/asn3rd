import {
  ActualParameterContext,
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
  public visitChildren(ctx: ActualParameterContext) {
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
