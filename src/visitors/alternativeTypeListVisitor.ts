import {
  AlternativeTypeListContext,
  NamedTypeContext,
} from "../parser/asn1Parser";
import { NamedTypeVisitor } from "./namedTypeVisitor";

/**
 * Grammar
 * ```
 * namedType (COMMA namedType)*
 * ```
 */
export class AlternativeTypeListVisitor {
  public visitChildren(ctx: AlternativeTypeListContext) {
    const nameTypeCtxList = ctx.namedType();
    return nameTypeCtxList.map((nameTypeCtx: NamedTypeContext) =>
      nameTypeCtx.accept(new NamedTypeVisitor())
    );
  }
}
