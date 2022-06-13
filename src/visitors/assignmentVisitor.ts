import { AssignmentContext } from "../parser/asn1Parser";
import { ObjectAssignmentVisitor } from "./objectAssignmentVisitor";
import { ObjectClassAssignmentVisitor } from "./objectClassAssignmentVisitor";
import { ObjectSetAssignmentVisitor } from "./objectSetAssignmentVisitor";
import { ParameterizedAssignmentVisitor } from "./parameterizedAssignmentVisitor";
import { TypeAssignmentVisitor } from "./typeAssignmentVisitor";
import { ValueAssignmentVisitor } from "./valueAssignmentVisitor";

/**
 * Grammar
 * ```
 * typeAssignment | valueAssignment | objectClassAssignment | objectAssignment | objectSetAssignment | parameterizedAssignment
 * ```
 */
export class AssignmentVisitor {
  public visitChildren(ctx: AssignmentContext) {
    const typeAssignmentCtx = ctx.typeAssignment();
    if (typeAssignmentCtx) {
      return typeAssignmentCtx.accept(new TypeAssignmentVisitor());
    }
    const valueAssignmentCtx = ctx.valueAssignment();
    if (valueAssignmentCtx) {
      return valueAssignmentCtx.accept(new ValueAssignmentVisitor());
    }
    const objectClassAssignmentCtx = ctx.objectClassAssignment();
    if (objectClassAssignmentCtx) {
      return objectClassAssignmentCtx.accept(new ObjectClassAssignmentVisitor());
    }
    const objectAssignmentCtx = ctx.objectAssignment();
    if (objectAssignmentCtx) {
      return objectAssignmentCtx.accept(new ObjectAssignmentVisitor());
    }
    const objectSetAssignmentCtx = ctx.objectSetAssignment();
    if (objectSetAssignmentCtx) {
      return objectSetAssignmentCtx.accept(new ObjectSetAssignmentVisitor());
    }
    const parameterizedAssignmentCtx = ctx.parameterizedAssignment();
    if (parameterizedAssignmentCtx) {
      return parameterizedAssignmentCtx.accept(new ParameterizedAssignmentVisitor());
    }
  }
}
