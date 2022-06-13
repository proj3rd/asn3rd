import { AdditionalElementSetSpecContext } from "../parser/asn1Parser";
import { ElementSetSpecVisitor } from "./elementSetSpecVisitor";

/**
 * Grammar
 * ```
 * elementSetSpec
 * ```
 */
export class AdditionalElementSetSpecVisitor {
  public visitChildren(ctx: AdditionalElementSetSpecContext) {
    const elementSetSpecCtx = ctx.elementSetSpec();
    return elementSetSpecCtx.accept(new ElementSetSpecVisitor());
  }
}
