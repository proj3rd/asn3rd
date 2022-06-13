import { AlternativeTypeListsContext } from "../parser/asn1Parser";
import { ExtensionAdditionAlternativesVisitor } from "./extensionAdditionAlternativesVisitor";
import { ExtensionAndExceptionVisitor } from "./extensionAndExceptionVisitor";
import { OptionalExtensionMarkerVisitor } from "./optionalExtensionMarkerVisitor";
import { RootAlternativeTypeListVisitor } from "./rootAlternativeTypeListVisitor";

/**
 * Grammar
 * ```
 *   rootAlternativeTypeList
 * | rootAlternativeTypeList COMMA extensionAndException extensionAdditionAlternatives? optionalExtensionMarker?
 * ```
 */
export class AlternativeTypeListsVisitor {
  public visitChildren(ctx: AlternativeTypeListsContext) {
    const rootAlternativeTypeListCtx = ctx.rootAlternativeTypeList();
    const rootComponents: RootChoiceComponents[] = [
      ...rootAlternativeTypeListCtx.accept(
        new RootAlternativeTypeListVisitor()
      ),
    ];
    const extensionAndExceptionCtx = ctx.extensionAndException();
    if (extensionAndExceptionCtx) {
      rootComponents.push(
        extensionAndExceptionCtx.accept(new ExtensionAndExceptionVisitor())
      );
    }
    const extensionAdditionAlternativesCtx =
      ctx.extensionAdditionAlternatives();
    if (extensionAdditionAlternativesCtx) {
      rootComponents.push(
        ...extensionAdditionAlternativesCtx.accept(
          new ExtensionAdditionAlternativesVisitor()
        )
      );
    }
    const optionalExtensionMarkerCtx = ctx.optionalExtensionMarker();
    if (optionalExtensionMarkerCtx) {
      const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(
        new OptionalExtensionMarkerVisitor()
      );
      if (optionalExtensionMarker) {
        rootComponents.push(optionalExtensionMarker);
      }
    }
    return rootComponents;
  }
}
