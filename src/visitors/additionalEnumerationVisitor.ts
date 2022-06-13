import { AdditionalEnumerationContext } from "../parser/asn1Parser";
import { EnumerationVisitor } from "./enumerationVisitor";

/**
 * Grammar
 * ```
 * enumeration
 * ```
 */
export class AdditionalEnumerationVisitor {
  public visitChildren(ctx: AdditionalEnumerationContext) {
    const enumerationCtx = ctx.enumeration();
    return enumerationCtx.accept(new EnumerationVisitor());
  }
}
