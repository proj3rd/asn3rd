import {
  ActualParameterContext,
  ActualParameterListContext,
} from "../parser/asn1Parser";
import { ActualParameterVisitor } from "./actualParameterVisitor";

/**
 * Grammar
 * ```
 * L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export class ActualParameterListVisitor {
  public visitChildren(ctx: ActualParameterListContext) {
    const actualParameterCtxList = ctx.actualParameter();
    return actualParameterCtxList.map(
      (actualParameterCtx: ActualParameterContext) =>
        actualParameterCtx.accept(new ActualParameterVisitor())
    );
  }
}
