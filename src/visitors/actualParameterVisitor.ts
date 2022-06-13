import { ActualParameterContext } from "../parser/asn1Parser";

/**
 * Grammar
 * ```
 * type | value | objectSet
 * ```
 */
export class ActualParameterVisitor {
  public visitChildren(ctx: ActualParameterContext) {
    const typeCtx = ctx.type();
    if (typeCtx) {
      return typeCtx.accept(new TypeVisitor());
    }
    const valueCtx = ctx.value();
    if (valueCtx) {
      return valueCtx.accept(new ValueVisitor());
    }
    const objectSetCtx = ctx.objectSet();
    if (objectSetCtx) {
      return objectSetCtx.accept(new ObjectSetVisitor());
    }
  }
}
