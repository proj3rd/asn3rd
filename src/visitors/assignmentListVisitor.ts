import { AssignmentContext, AssignmentListContext } from "../parser/asn1Parser";
import { AssignmentVisitor } from "./assignmentVisitor";

/**
 * Grammar
 * ```
 * assignment+
 * ```
 */
export class AssignmentListVisitor {
  public visitChildren(ctx: AssignmentListContext) {
    const assignmentCtxList = ctx.assignment();
    return assignmentCtxList.map((assignmentCtx: AssignmentContext) =>
      assignmentCtx.accept(new AssignmentVisitor())
    );
  }
}
