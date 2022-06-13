import { AtNotationContext } from "../parser/asn1Parser";
import { ComponentIdListVisitor } from "./componentIdListVisitor";

/**
 * Grammar
 * ```
 * AT componentIdList
 * ```
 */
export class AtNotationVisitor {
  public visitChildren(ctx: AtNotationContext) {
    const componentIdListCtx = ctx.componentIdList();
    const componentIdList = componentIdListCtx.accept(
      new ComponentIdListVisitor()
    );
    return new AtNotationContext(0, componentIdList);
  }
}
