declare class asn1Parser extends antlr4.Parser {
    static grammarFileName: string;
    static literalNames: (string | null)[];
    static symbolicNames: (string | null)[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    ruleNames: string[];
    literalNames: (string | null)[];
    symbolicNames: (string | null)[];
    get atn(): any;
    moduleDefinitions(): ModuleDefinitionsContext;
    typeReference(): TypeReferenceContext;
    identifier(): IdentifierContext;
    valueReference(): ValueReferenceContext;
    moduleReference(): ModuleReferenceContext;
    moduleDefinition(): ModuleDefinitionContext;
    elmDefinition(): ElmDefinitionContext;
    edmDefinition(): EdmDefinitionContext;
    moduleIdentifier(): ModuleIdentifierContext;
    definitiveIdentification(): DefinitiveIdentificationContext;
    definitiveOid(): DefinitiveOidContext;
    definitiveObjIdComponentList(): DefinitiveObjIdComponentListContext;
    definitiveObjIdComponent(): DefinitiveObjIdComponentContext;
    definitiveNameAndNumberForm(): DefinitiveNameAndNumberFormContext;
    definitiveNumberForm(): DefinitiveNumberFormContext;
    tagDefault(): TagDefaultContext;
    moduleBody(): ModuleBodyContext;
    exports(): ExportsContext;
    symbolsExported(): SymbolsExportedContext;
    imports(): ImportsContext;
    symbolsImported(): SymbolsImportedContext;
    symbolsFromModuleList(): SymbolsFromModuleListContext;
    symbolsFromModule(): SymbolsFromModuleContext;
    globalModuleReference(): GlobalModuleReferenceContext;
    symbolList(): SymbolListContext;
    symbol(): SymbolContext;
    reference(): ReferenceContext;
    assignmentList(): AssignmentListContext;
    assignment(): AssignmentContext;
    definedType(): DefinedTypeContext;
    definedValue(): DefinedValueContext;
    externalTypeReference(): ExternalTypeReferenceContext;
    externalValueReference(): ExternalValueReferenceContext;
    typeAssignment(): TypeAssignmentContext;
    valueAssignment(): ValueAssignmentContext;
    type(): TypeContext;
    builtinType(): BuiltinTypeContext;
    referencedType(): ReferencedTypeContext;
    namedType(): NamedTypeContext;
    value(): ValueContext;
    builtinValue(): BuiltinValueContext;
    booleanType(): BooleanTypeContext;
    integerType(): IntegerTypeContext;
    namedNumberList(): NamedNumberListContext;
    namedNumber(): NamedNumberContext;
    signedNumber(): SignedNumberContext;
    integerValue(): IntegerValueContext;
    enumeratedType(): EnumeratedTypeContext;
    enumerations(): EnumerationsContext;
    rootEnumeration(): RootEnumerationContext;
    additionalEnumeration(): AdditionalEnumerationContext;
    enumeration(): EnumerationContext;
    enumerationItem(): EnumerationItemContext;
    bitStringType(): BitStringTypeContext;
    namedBitList(): NamedBitListContext;
    namedBit(): NamedBitContext;
    bitStringValue(): BitStringValueContext;
    octetStringType(): OctetStringTypeContext;
    nullType(): NullTypeContext;
    sequenceType(): SequenceTypeContext;
    extensionAndException(): ExtensionAndExceptionContext;
    optionalExtensionMarker(): OptionalExtensionMarkerContext;
    componentTypeLists(): ComponentTypeListsContext;
    rootComponentTypeList(): RootComponentTypeListContext;
    extensionEndMarker(): ExtensionEndMarkerContext;
    extensionAdditions(): ExtensionAdditionsContext;
    extensionAdditionList(): ExtensionAdditionListContext;
    extensionAddition(): ExtensionAdditionContext;
    extensionAdditionGroup(): ExtensionAdditionGroupContext;
    componentTypeList(): ComponentTypeListContext;
    componentType(): ComponentTypeContext;
    sequenceOfType(): SequenceOfTypeContext;
    choiceType(): ChoiceTypeContext;
    alternativeTypeLists(): AlternativeTypeListsContext;
    rootAlternativeTypeList(): RootAlternativeTypeListContext;
    extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext;
    extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext;
    extensionAdditionAlternative(): ExtensionAdditionAlternativeContext;
    extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext;
    alternativeTypeList(): AlternativeTypeListContext;
    objectIdentifierType(): ObjectIdentifierTypeContext;
    characterStringType(): CharacterStringTypeContext;
    restrictedCharacterStringType(): RestrictedCharacterStringTypeContext;
    usefulType(): UsefulTypeContext;
    constrainedType(): ConstrainedTypeContext;
    typeWithConstraint(): TypeWithConstraintContext;
    constraint(): ConstraintContext;
    constraintSpec(): ConstraintSpecContext;
    subtypeConstraint(): SubtypeConstraintContext;
    elementSetSpecs(): ElementSetSpecsContext;
    rootElementSetSpec(): RootElementSetSpecContext;
    additionalElementSetSpec(): AdditionalElementSetSpecContext;
    elementSetSpec(): ElementSetSpecContext;
    unions(): UnionsContext;
    intersections(): IntersectionsContext;
    intersectionElements(): IntersectionElementsContext;
    unionMark(): UnionMarkContext;
    elements(): ElementsContext;
    subtypeElements(): SubtypeElementsContext;
    singleValue(): SingleValueContext;
    valueRange(): ValueRangeContext;
    lowerEndpoint(): LowerEndpointContext;
    upperEndpoint(): UpperEndpointContext;
    lowerEndValue(): LowerEndValueContext;
    upperEndValue(): UpperEndValueContext;
    sizeConstraint(): SizeConstraintContext;
    innerTypeConstraints(): InnerTypeConstraintsContext;
    multipleTypeConstraints(): MultipleTypeConstraintsContext;
    partialSpecification(): PartialSpecificationContext;
    typeConstraints(): TypeConstraintsContext;
    namedConstraint(): NamedConstraintContext;
    componentConstraint(): ComponentConstraintContext;
    valueConstraint(): ValueConstraintContext;
    presenceConstraint(): PresenceConstraintContext;
    exceptionSpec(): ExceptionSpecContext;
    exceptionIdentification(): ExceptionIdentificationContext;
    objectClassReference(): ObjectClassReferenceContext;
    objectSetReference(): ObjectSetReferenceContext;
    objectReference(): ObjectReferenceContext;
    valueFieldReference(): ValueFieldReferenceContext;
    word(): WordContext;
    typeFieldReference(): TypeFieldReferenceContext;
    definedObjectClass(): DefinedObjectClassContext;
    definedObjectSet(): DefinedObjectSetContext;
    objectClassAssignment(): ObjectClassAssignmentContext;
    objectClass(): ObjectClassContext;
    objectClassDefn(): ObjectClassDefnContext;
    withSyntaxSpec(): WithSyntaxSpecContext;
    fieldSpec(): FieldSpecContext;
    typeFieldSpec(): TypeFieldSpecContext;
    typeOptionalitySpec(): TypeOptionalitySpecContext;
    fixedTypeValueFieldSpec(): FixedTypeValueFieldSpecContext;
    valueOptionalitySpec(): ValueOptionalitySpecContext;
    primitiveFieldName(): PrimitiveFieldNameContext;
    fieldName(): FieldNameContext;
    syntaxList(): SyntaxListContext;
    tokenOrGroupSpec(): TokenOrGroupSpecContext;
    optionalGroup(): OptionalGroupContext;
    requiredToken(): RequiredTokenContext;
    literal(): LiteralContext;
    objectAssignment(): ObjectAssignmentContext;
    object(): ObjectContext;
    objectDefn(): ObjectDefnContext;
    definedSyntax(): DefinedSyntaxContext;
    definedSyntaxToken(): DefinedSyntaxTokenContext;
    setting(): SettingContext;
    objectSetAssignment(): ObjectSetAssignmentContext;
    objectSet(): ObjectSetContext;
    objectSetSpec(): ObjectSetSpecContext;
    objectSetElements(): ObjectSetElementsContext;
    objectClassFieldType(): ObjectClassFieldTypeContext;
    generalConstraint(): GeneralConstraintContext;
    tableConstraint(): TableConstraintContext;
    simpleTableConstraint(): SimpleTableConstraintContext;
    componentRelationConstraint(): ComponentRelationConstraintContext;
    atNotation(): AtNotationContext;
    componentIdList(): ComponentIdListContext;
    contentsConstraint(): ContentsConstraintContext;
    parameterizedAssignment(): ParameterizedAssignmentContext;
    parameterizedTypeAssignment(): ParameterizedTypeAssignmentContext;
    parameterList(): ParameterListContext;
    parameter(): ParameterContext;
    paramGovernor(): ParamGovernorContext;
    governor(): GovernorContext;
    dummyReference(): DummyReferenceContext;
    parameterizedReference(): ParameterizedReferenceContext;
    parameterizedTypeAmbiguous(): ParameterizedTypeAmbiguousContext;
    simpleDefinedType(): SimpleDefinedTypeContext;
    actualParameterList(): ActualParameterListContext;
    actualParameter(): ActualParameterContext;
    encodingObjectReference(): EncodingObjectReferenceContext;
    encodingObjectSetReference(): EncodingObjectSetReferenceContext;
    encodingClassReferenceVariant(): EncodingClassReferenceVariantContext;
    definedOrBuiltinEncodingClass(): DefinedOrBuiltinEncodingClassContext;
    definedEncodingObject(): DefinedEncodingObjectContext;
    definedEncodingObjectSet(): DefinedEncodingObjectSetContext;
    definedOrBuiltinEncodingObjectSet(): DefinedOrBuiltinEncodingObjectSetContext;
    elmModuleBody(): ElmModuleBodyContext;
    encodingApplicationList(): EncodingApplicationListContext;
    encodingApplication(): EncodingApplicationContext;
    combinedEncodings(): CombinedEncodingsContext;
    completionClause(): CompletionClauseContext;
    primaryEncodings(): PrimaryEncodingsContext;
    secondaryEncodings(): SecondaryEncodingsContext;
    edmModuleBody(): EdmModuleBodyContext;
    edmAssignmentList(): EdmAssignmentListContext;
    edmAssignment(): EdmAssignmentContext;
    builtinEncodingClassReference(): BuiltinEncodingClassReferenceContext;
    encodingProcedureClassReference(): EncodingProcedureClassReferenceContext;
    encodingObjectAssignment(): EncodingObjectAssignmentContext;
    encodingObject(): EncodingObjectContext;
    differentialEncodeDecodeObjectVariant(): DifferentialEncodeDecodeObjectVariantContext;
    specForEncoding(): SpecForEncodingContext;
    specForDecoders(): SpecForDecodersContext;
    encodingObjectSetAssignment(): EncodingObjectSetAssignmentContext;
    encodingObjectSet(): EncodingObjectSetContext;
    encodingObjectSetSpec(): EncodingObjectSetSpecContext;
    encodingObjects(): EncodingObjectsContext;
    builtinEncodingObjectSetReference(): BuiltinEncodingObjectSetReferenceContext;
    simpleDefinedEncodingClass(): SimpleDefinedEncodingClassContext;
}
declare namespace asn1Parser {
    export const EOF: number;
    export const ASSIGNMENT: number;
    export const ELLIPSIS: number;
    export const RANGE_SEPARATOR: number;
    export const L_VERSION_BRACKET: number;
    export const R_VERSION_BRACKET: number;
    export const L_BRACE: number;
    export const R_BRACE: number;
    export const COMMA: number;
    export const PERIOD: number;
    export const L_PAREN: number;
    export const R_PAREN: number;
    export const L_BRACKET: number;
    export const R_BRACKET: number;
    export const HYPHEN_MINUS: number;
    export const COLON: number;
    export const SEMICOLON_LITERAL: number;
    export const AT: number;
    export const PIPE: number;
    export const EXCLAM: number;
    export const AMP: number;
    export const NUMBER_SIGN: number;
    export const ABSENT_LITERAL: number;
    export const ENCODED_LITERAL: number;
    export const INTERSECTION_LITERAL: number;
    export const SEQUENCE_LITERAL: number;
    export const ABSTRACT_SYNTAX_LITERAL: number;
    export const ENCODING_CONTROL_LITERAL: number;
    export const ISO646String_LITERAL: number;
    export const SET_LITERAL: number;
    export const ALL_LITERAL: number;
    export const END_LITERAL: number;
    export const MAX_LITERAL: number;
    export const SETTINGS_LITERAL: number;
    export const APPLICATION_LITERAL: number;
    export const ENUMERATED_LITERAL: number;
    export const MIN_LITERAL: number;
    export const SIZE_LITERAL: number;
    export const AUTOMATIC_LITERAL: number;
    export const EXCEPT_LITERAL: number;
    export const MINUS_INFINITY_LITERAL: number;
    export const STRING_LITERAL: number;
    export const BEGIN_LITERAL: number;
    export const EXPLICIT_LITERAL: number;
    export const NOT_A_NUMBER_LITERAL: number;
    export const SYNTAX_LITERAL: number;
    export const BIT_LITERAL: number;
    export const EXPORTS_LITERAL: number;
    export const NULL_LITERAL: number;
    export const T61String_LITERAL: number;
    export const BMPString_LITERAL: number;
    export const EXTENSIBILITY_LITERAL: number;
    export const NumericString_LITERAL: number;
    export const TAGS_LITERAL: number;
    export const BOOLEAN_LITERAL: number;
    export const EXTERNAL_LITERAL: number;
    export const OBJECT_LITERAL: number;
    export const TeletexString_LITERAL: number;
    export const BY_LITERAL: number;
    export const FALSE_LITERAL: number;
    export const ObjectDescriptor_LITERAL: number;
    export const TIME_LITERAL: number;
    export const CHARACTER_LITERAL: number;
    export const FROM_LITERAL: number;
    export const OCTET_LITERAL: number;
    export const TIME_OF_DAY_LITERAL: number;
    export const CHOICE_LITERAL: number;
    export const GeneralizedTime_LITERAL: number;
    export const OF_LITERAL: number;
    export const TRUE_LITERAL: number;
    export const CLASS_LITERAL: number;
    export const GeneralString_LITERAL: number;
    export const OID_IRI_LITERAL: number;
    export const TYPE_IDENTIFIER_LITERAL: number;
    export const COMPONENT_LITERAL: number;
    export const GraphicString_LITERAL: number;
    export const OPTIONAL_LITERAL: number;
    export const UNION_LITERAL: number;
    export const COMPONENTS_LITERAL: number;
    export const IA5String_LITERAL: number;
    export const PATTERN_LITERAL: number;
    export const UNIQUE_LITERAL: number;
    export const CONSTRAINED_LITERAL: number;
    export const IDENTIFIER_LITERAL: number;
    export const PDV_LITERAL: number;
    export const UNIVERSAL_LITERAL: number;
    export const CONTAINING_LITERAL: number;
    export const IMPLICIT_LITERAL: number;
    export const PLUS_INFINITY_LITERAL: number;
    export const UniversalString_LITERAL: number;
    export const DATE_LITERAL: number;
    export const IMPLIED_LITERAL: number;
    export const PRESENT_LITERAL: number;
    export const UTCTime_LITERAL: number;
    export const DATE_TIME_LITERAL: number;
    export const IMPORTS_LITERAL: number;
    export const PrintableString_LITERAL: number;
    export const UTF8String_LITERAL: number;
    export const DEFAULT_LITERAL: number;
    export const INCLUDES_LITERAL: number;
    export const PRIVATE_LITERAL: number;
    export const VideotexString_LITERAL: number;
    export const DEFINITIONS_LITERAL: number;
    export const INSTANCE_LITERAL: number;
    export const REAL_LITERAL: number;
    export const VisibleString_LITERAL: number;
    export const DURATION_LITERAL: number;
    export const INSTRUCTIONS_LITERAL: number;
    export const RELATIVE_OID_LITERAL: number;
    export const WITH_LITERAL: number;
    export const EMBEDDED_LITERAL: number;
    export const INTEGER_LITERAL: number;
    export const RELATIVE_OID_IRI_LITERAL: number;
    export const AS_LITERAL: number;
    export const COMPLETED_LITERAL: number;
    export const ENCODE_LITERAL: number;
    export const ENCODE_DECODE_LITERAL: number;
    export const ENCODER_LITERAL: number;
    export const ENCODER_DECODER_LITERAL: number;
    export const DECODE_LITERAL: number;
    export const DECODER_LITERAL: number;
    export const ENCODING_DEFINITIONS_LITERAL: number;
    export const ENCODINGS_LITERAL: number;
    export const IF_LITERAL: number;
    export const LINK_DEFINITIONS_LITERAL: number;
    export const PER_BASIC_UNALIGNED_LITERAL: number;
    export const OUTER_LITERAL: number;
    export const WS: number;
    export const Tag: number;
    export const Comment: number;
    export const Word: number;
    export const ObjectClassReference: number;
    export const TypeReference: number;
    export const IdentifierL: number;
    export const Number: number;
    export const Bstring: number;
    export const RULE_moduleDefinitions: number;
    export const RULE_typeReference: number;
    export const RULE_identifier: number;
    export const RULE_valueReference: number;
    export const RULE_moduleReference: number;
    export const RULE_moduleDefinition: number;
    export const RULE_elmDefinition: number;
    export const RULE_edmDefinition: number;
    export const RULE_moduleIdentifier: number;
    export const RULE_definitiveIdentification: number;
    export const RULE_definitiveOid: number;
    export const RULE_definitiveObjIdComponentList: number;
    export const RULE_definitiveObjIdComponent: number;
    export const RULE_definitiveNameAndNumberForm: number;
    export const RULE_definitiveNumberForm: number;
    export const RULE_tagDefault: number;
    export const RULE_moduleBody: number;
    export const RULE_exports: number;
    export const RULE_symbolsExported: number;
    export const RULE_imports: number;
    export const RULE_symbolsImported: number;
    export const RULE_symbolsFromModuleList: number;
    export const RULE_symbolsFromModule: number;
    export const RULE_globalModuleReference: number;
    export const RULE_symbolList: number;
    export const RULE_symbol: number;
    export const RULE_reference: number;
    export const RULE_assignmentList: number;
    export const RULE_assignment: number;
    export const RULE_definedType: number;
    export const RULE_definedValue: number;
    export const RULE_externalTypeReference: number;
    export const RULE_externalValueReference: number;
    export const RULE_typeAssignment: number;
    export const RULE_valueAssignment: number;
    export const RULE_type: number;
    export const RULE_builtinType: number;
    export const RULE_referencedType: number;
    export const RULE_namedType: number;
    export const RULE_value: number;
    export const RULE_builtinValue: number;
    export const RULE_booleanType: number;
    export const RULE_integerType: number;
    export const RULE_namedNumberList: number;
    export const RULE_namedNumber: number;
    export const RULE_signedNumber: number;
    export const RULE_integerValue: number;
    export const RULE_enumeratedType: number;
    export const RULE_enumerations: number;
    export const RULE_rootEnumeration: number;
    export const RULE_additionalEnumeration: number;
    export const RULE_enumeration: number;
    export const RULE_enumerationItem: number;
    export const RULE_bitStringType: number;
    export const RULE_namedBitList: number;
    export const RULE_namedBit: number;
    export const RULE_bitStringValue: number;
    export const RULE_octetStringType: number;
    export const RULE_nullType: number;
    export const RULE_sequenceType: number;
    export const RULE_extensionAndException: number;
    export const RULE_optionalExtensionMarker: number;
    export const RULE_componentTypeLists: number;
    export const RULE_rootComponentTypeList: number;
    export const RULE_extensionEndMarker: number;
    export const RULE_extensionAdditions: number;
    export const RULE_extensionAdditionList: number;
    export const RULE_extensionAddition: number;
    export const RULE_extensionAdditionGroup: number;
    export const RULE_componentTypeList: number;
    export const RULE_componentType: number;
    export const RULE_sequenceOfType: number;
    export const RULE_choiceType: number;
    export const RULE_alternativeTypeLists: number;
    export const RULE_rootAlternativeTypeList: number;
    export const RULE_extensionAdditionAlternatives: number;
    export const RULE_extensionAdditionAlternativesList: number;
    export const RULE_extensionAdditionAlternative: number;
    export const RULE_extensionAdditionAlternativesGroup: number;
    export const RULE_alternativeTypeList: number;
    export const RULE_objectIdentifierType: number;
    export const RULE_characterStringType: number;
    export const RULE_restrictedCharacterStringType: number;
    export const RULE_usefulType: number;
    export const RULE_constrainedType: number;
    export const RULE_typeWithConstraint: number;
    export const RULE_constraint: number;
    export const RULE_constraintSpec: number;
    export const RULE_subtypeConstraint: number;
    export const RULE_elementSetSpecs: number;
    export const RULE_rootElementSetSpec: number;
    export const RULE_additionalElementSetSpec: number;
    export const RULE_elementSetSpec: number;
    export const RULE_unions: number;
    export const RULE_intersections: number;
    export const RULE_intersectionElements: number;
    export const RULE_unionMark: number;
    export const RULE_elements: number;
    export const RULE_subtypeElements: number;
    export const RULE_singleValue: number;
    export const RULE_valueRange: number;
    export const RULE_lowerEndpoint: number;
    export const RULE_upperEndpoint: number;
    export const RULE_lowerEndValue: number;
    export const RULE_upperEndValue: number;
    export const RULE_sizeConstraint: number;
    export const RULE_innerTypeConstraints: number;
    export const RULE_multipleTypeConstraints: number;
    export const RULE_partialSpecification: number;
    export const RULE_typeConstraints: number;
    export const RULE_namedConstraint: number;
    export const RULE_componentConstraint: number;
    export const RULE_valueConstraint: number;
    export const RULE_presenceConstraint: number;
    export const RULE_exceptionSpec: number;
    export const RULE_exceptionIdentification: number;
    export const RULE_objectClassReference: number;
    export const RULE_objectSetReference: number;
    export const RULE_objectReference: number;
    export const RULE_valueFieldReference: number;
    export const RULE_word: number;
    export const RULE_typeFieldReference: number;
    export const RULE_definedObjectClass: number;
    export const RULE_definedObjectSet: number;
    export const RULE_objectClassAssignment: number;
    export const RULE_objectClass: number;
    export const RULE_objectClassDefn: number;
    export const RULE_withSyntaxSpec: number;
    export const RULE_fieldSpec: number;
    export const RULE_typeFieldSpec: number;
    export const RULE_typeOptionalitySpec: number;
    export const RULE_fixedTypeValueFieldSpec: number;
    export const RULE_valueOptionalitySpec: number;
    export const RULE_primitiveFieldName: number;
    export const RULE_fieldName: number;
    export const RULE_syntaxList: number;
    export const RULE_tokenOrGroupSpec: number;
    export const RULE_optionalGroup: number;
    export const RULE_requiredToken: number;
    export const RULE_literal: number;
    export const RULE_objectAssignment: number;
    export const RULE_object: number;
    export const RULE_objectDefn: number;
    export const RULE_definedSyntax: number;
    export const RULE_definedSyntaxToken: number;
    export const RULE_setting: number;
    export const RULE_objectSetAssignment: number;
    export const RULE_objectSet: number;
    export const RULE_objectSetSpec: number;
    export const RULE_objectSetElements: number;
    export const RULE_objectClassFieldType: number;
    export const RULE_generalConstraint: number;
    export const RULE_tableConstraint: number;
    export const RULE_simpleTableConstraint: number;
    export const RULE_componentRelationConstraint: number;
    export const RULE_atNotation: number;
    export const RULE_componentIdList: number;
    export const RULE_contentsConstraint: number;
    export const RULE_parameterizedAssignment: number;
    export const RULE_parameterizedTypeAssignment: number;
    export const RULE_parameterList: number;
    export const RULE_parameter: number;
    export const RULE_paramGovernor: number;
    export const RULE_governor: number;
    export const RULE_dummyReference: number;
    export const RULE_parameterizedReference: number;
    export const RULE_parameterizedTypeAmbiguous: number;
    export const RULE_simpleDefinedType: number;
    export const RULE_actualParameterList: number;
    export const RULE_actualParameter: number;
    export const RULE_encodingObjectReference: number;
    export const RULE_encodingObjectSetReference: number;
    export const RULE_encodingClassReferenceVariant: number;
    export const RULE_definedOrBuiltinEncodingClass: number;
    export const RULE_definedEncodingObject: number;
    export const RULE_definedEncodingObjectSet: number;
    export const RULE_definedOrBuiltinEncodingObjectSet: number;
    export const RULE_elmModuleBody: number;
    export const RULE_encodingApplicationList: number;
    export const RULE_encodingApplication: number;
    export const RULE_combinedEncodings: number;
    export const RULE_completionClause: number;
    export const RULE_primaryEncodings: number;
    export const RULE_secondaryEncodings: number;
    export const RULE_edmModuleBody: number;
    export const RULE_edmAssignmentList: number;
    export const RULE_edmAssignment: number;
    export const RULE_builtinEncodingClassReference: number;
    export const RULE_encodingProcedureClassReference: number;
    export const RULE_encodingObjectAssignment: number;
    export const RULE_encodingObject: number;
    export const RULE_differentialEncodeDecodeObjectVariant: number;
    export const RULE_specForEncoding: number;
    export const RULE_specForDecoders: number;
    export const RULE_encodingObjectSetAssignment: number;
    export const RULE_encodingObjectSet: number;
    export const RULE_encodingObjectSetSpec: number;
    export const RULE_encodingObjects: number;
    export const RULE_builtinEncodingObjectSetReference: number;
    export const RULE_simpleDefinedEncodingClass: number;
    export { ModuleDefinitionsContext };
    export { TypeReferenceContext };
    export { IdentifierContext };
    export { ValueReferenceContext };
    export { ModuleReferenceContext };
    export { ModuleDefinitionContext };
    export { ElmDefinitionContext };
    export { EdmDefinitionContext };
    export { ModuleIdentifierContext };
    export { DefinitiveIdentificationContext };
    export { DefinitiveOidContext };
    export { DefinitiveObjIdComponentListContext };
    export { DefinitiveObjIdComponentContext };
    export { DefinitiveNameAndNumberFormContext };
    export { DefinitiveNumberFormContext };
    export { TagDefaultContext };
    export { ModuleBodyContext };
    export { ExportsContext };
    export { SymbolsExportedContext };
    export { ImportsContext };
    export { SymbolsImportedContext };
    export { SymbolsFromModuleListContext };
    export { SymbolsFromModuleContext };
    export { GlobalModuleReferenceContext };
    export { SymbolListContext };
    export { SymbolContext };
    export { ReferenceContext };
    export { AssignmentListContext };
    export { AssignmentContext };
    export { DefinedTypeContext };
    export { DefinedValueContext };
    export { ExternalTypeReferenceContext };
    export { ExternalValueReferenceContext };
    export { TypeAssignmentContext };
    export { ValueAssignmentContext };
    export { TypeContext };
    export { BuiltinTypeContext };
    export { ReferencedTypeContext };
    export { NamedTypeContext };
    export { ValueContext };
    export { BuiltinValueContext };
    export { BooleanTypeContext };
    export { IntegerTypeContext };
    export { NamedNumberListContext };
    export { NamedNumberContext };
    export { SignedNumberContext };
    export { IntegerValueContext };
    export { EnumeratedTypeContext };
    export { EnumerationsContext };
    export { RootEnumerationContext };
    export { AdditionalEnumerationContext };
    export { EnumerationContext };
    export { EnumerationItemContext };
    export { BitStringTypeContext };
    export { NamedBitListContext };
    export { NamedBitContext };
    export { BitStringValueContext };
    export { OctetStringTypeContext };
    export { NullTypeContext };
    export { SequenceTypeContext };
    export { ExtensionAndExceptionContext };
    export { OptionalExtensionMarkerContext };
    export { ComponentTypeListsContext };
    export { RootComponentTypeListContext };
    export { ExtensionEndMarkerContext };
    export { ExtensionAdditionsContext };
    export { ExtensionAdditionListContext };
    export { ExtensionAdditionContext };
    export { ExtensionAdditionGroupContext };
    export { ComponentTypeListContext };
    export { ComponentTypeContext };
    export { SequenceOfTypeContext };
    export { ChoiceTypeContext };
    export { AlternativeTypeListsContext };
    export { RootAlternativeTypeListContext };
    export { ExtensionAdditionAlternativesContext };
    export { ExtensionAdditionAlternativesListContext };
    export { ExtensionAdditionAlternativeContext };
    export { ExtensionAdditionAlternativesGroupContext };
    export { AlternativeTypeListContext };
    export { ObjectIdentifierTypeContext };
    export { CharacterStringTypeContext };
    export { RestrictedCharacterStringTypeContext };
    export { UsefulTypeContext };
    export { ConstrainedTypeContext };
    export { TypeWithConstraintContext };
    export { ConstraintContext };
    export { ConstraintSpecContext };
    export { SubtypeConstraintContext };
    export { ElementSetSpecsContext };
    export { RootElementSetSpecContext };
    export { AdditionalElementSetSpecContext };
    export { ElementSetSpecContext };
    export { UnionsContext };
    export { IntersectionsContext };
    export { IntersectionElementsContext };
    export { UnionMarkContext };
    export { ElementsContext };
    export { SubtypeElementsContext };
    export { SingleValueContext };
    export { ValueRangeContext };
    export { LowerEndpointContext };
    export { UpperEndpointContext };
    export { LowerEndValueContext };
    export { UpperEndValueContext };
    export { SizeConstraintContext };
    export { InnerTypeConstraintsContext };
    export { MultipleTypeConstraintsContext };
    export { PartialSpecificationContext };
    export { TypeConstraintsContext };
    export { NamedConstraintContext };
    export { ComponentConstraintContext };
    export { ValueConstraintContext };
    export { PresenceConstraintContext };
    export { ExceptionSpecContext };
    export { ExceptionIdentificationContext };
    export { ObjectClassReferenceContext };
    export { ObjectSetReferenceContext };
    export { ObjectReferenceContext };
    export { ValueFieldReferenceContext };
    export { WordContext };
    export { TypeFieldReferenceContext };
    export { DefinedObjectClassContext };
    export { DefinedObjectSetContext };
    export { ObjectClassAssignmentContext };
    export { ObjectClassContext };
    export { ObjectClassDefnContext };
    export { WithSyntaxSpecContext };
    export { FieldSpecContext };
    export { TypeFieldSpecContext };
    export { TypeOptionalitySpecContext };
    export { FixedTypeValueFieldSpecContext };
    export { ValueOptionalitySpecContext };
    export { PrimitiveFieldNameContext };
    export { FieldNameContext };
    export { SyntaxListContext };
    export { TokenOrGroupSpecContext };
    export { OptionalGroupContext };
    export { RequiredTokenContext };
    export { LiteralContext };
    export { ObjectAssignmentContext };
    export { ObjectContext };
    export { ObjectDefnContext };
    export { DefinedSyntaxContext };
    export { DefinedSyntaxTokenContext };
    export { SettingContext };
    export { ObjectSetAssignmentContext };
    export { ObjectSetContext };
    export { ObjectSetSpecContext };
    export { ObjectSetElementsContext };
    export { ObjectClassFieldTypeContext };
    export { GeneralConstraintContext };
    export { TableConstraintContext };
    export { SimpleTableConstraintContext };
    export { ComponentRelationConstraintContext };
    export { AtNotationContext };
    export { ComponentIdListContext };
    export { ContentsConstraintContext };
    export { ParameterizedAssignmentContext };
    export { ParameterizedTypeAssignmentContext };
    export { ParameterListContext };
    export { ParameterContext };
    export { ParamGovernorContext };
    export { GovernorContext };
    export { DummyReferenceContext };
    export { ParameterizedReferenceContext };
    export { ParameterizedTypeAmbiguousContext };
    export { SimpleDefinedTypeContext };
    export { ActualParameterListContext };
    export { ActualParameterContext };
    export { EncodingObjectReferenceContext };
    export { EncodingObjectSetReferenceContext };
    export { EncodingClassReferenceVariantContext };
    export { DefinedOrBuiltinEncodingClassContext };
    export { DefinedEncodingObjectContext };
    export { DefinedEncodingObjectSetContext };
    export { DefinedOrBuiltinEncodingObjectSetContext };
    export { ElmModuleBodyContext };
    export { EncodingApplicationListContext };
    export { EncodingApplicationContext };
    export { CombinedEncodingsContext };
    export { CompletionClauseContext };
    export { PrimaryEncodingsContext };
    export { SecondaryEncodingsContext };
    export { EdmModuleBodyContext };
    export { EdmAssignmentListContext };
    export { EdmAssignmentContext };
    export { BuiltinEncodingClassReferenceContext };
    export { EncodingProcedureClassReferenceContext };
    export { EncodingObjectAssignmentContext };
    export { EncodingObjectContext };
    export { DifferentialEncodeDecodeObjectVariantContext };
    export { SpecForEncodingContext };
    export { SpecForDecodersContext };
    export { EncodingObjectSetAssignmentContext };
    export { EncodingObjectSetContext };
    export { EncodingObjectSetSpecContext };
    export { EncodingObjectsContext };
    export { BuiltinEncodingObjectSetReferenceContext };
    export { SimpleDefinedEncodingClassContext };
}
export default asn1Parser;
export class ModuleDefinitionsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleDefinition: (i: any) => any;
    elmDefinition: (i: any) => any;
    edmDefinition: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
import antlr4 from "antlr4";
declare class TypeReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Word(): antlr4.Token;
    ObjectClassReference(): antlr4.Token;
    TypeReference(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class IdentifierContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IdentifierL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ValueReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IdentifierL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ModuleReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ModuleDefinitionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleIdentifier(): any;
    DEFINITIONS_LITERAL(): antlr4.Token;
    ASSIGNMENT(): antlr4.Token;
    BEGIN_LITERAL(): antlr4.Token;
    END_LITERAL(): antlr4.Token;
    tagDefault(): any;
    moduleBody(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ElmDefinitionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleIdentifier(): any;
    LINK_DEFINITIONS_LITERAL(): antlr4.Token;
    ASSIGNMENT(): antlr4.Token;
    BEGIN_LITERAL(): antlr4.Token;
    elmModuleBody(): any;
    END_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EdmDefinitionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleIdentifier(): any;
    ENCODING_DEFINITIONS_LITERAL(): antlr4.Token;
    ASSIGNMENT(): antlr4.Token;
    BEGIN_LITERAL(): antlr4.Token;
    edmModuleBody(): any;
    END_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ModuleIdentifierContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleReference(): any;
    definitiveIdentification(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinitiveIdentificationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definitiveOid(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinitiveOidContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    definitiveObjIdComponentList(): any;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinitiveObjIdComponentListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definitiveObjIdComponent: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinitiveObjIdComponentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definitiveNameAndNumberForm(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinitiveNameAndNumberFormContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    L_PAREN(): antlr4.Token;
    definitiveNumberForm(): any;
    R_PAREN(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinitiveNumberFormContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Number(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TagDefaultContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EXPLICIT_LITERAL(): antlr4.Token;
    TAGS_LITERAL(): antlr4.Token;
    IMPLICIT_LITERAL(): antlr4.Token;
    AUTOMATIC_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ModuleBodyContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    assignmentList(): any;
    exports(): any;
    imports(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExportsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EXPORTS_LITERAL(): antlr4.Token;
    SEMICOLON_LITERAL(): antlr4.Token;
    symbolsExported(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SymbolsExportedContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    symbolList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ImportsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IMPORTS_LITERAL(): antlr4.Token;
    SEMICOLON_LITERAL(): antlr4.Token;
    symbolsImported(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SymbolsImportedContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    symbolsFromModuleList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SymbolsFromModuleListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    symbolsFromModule: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SymbolsFromModuleContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    symbolList(): any;
    FROM_LITERAL(): antlr4.Token;
    globalModuleReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class GlobalModuleReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SymbolListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    symbol: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SymbolContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reference(): any;
    parameterizedReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeReference(): any;
    valueReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AssignmentListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    assignment: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeAssignment(): any;
    valueAssignment(): any;
    objectClassAssignment(): any;
    objectAssignment(): any;
    objectSetAssignment(): any;
    parameterizedAssignment(): any;
    Tag(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    externalTypeReference(): any;
    typeReference(): any;
    parameterizedTypeAmbiguous(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    externalValueReference(): any;
    valueReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExternalTypeReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleReference(): any;
    PERIOD(): antlr4.Token;
    typeReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExternalValueReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    moduleReference(): any;
    PERIOD(): antlr4.Token;
    valueReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TypeAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeReference(): any;
    ASSIGNMENT(): antlr4.Token;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ValueAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    valueReference(): any;
    type(): any;
    ASSIGNMENT(): antlr4.Token;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    builtinType(): any;
    referencedType(): any;
    constrainedType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class BuiltinTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    bitStringType(): any;
    booleanType(): any;
    characterStringType(): any;
    choiceType(): any;
    enumeratedType(): any;
    integerType(): any;
    nullType(): any;
    objectClassFieldType(): any;
    objectIdentifierType(): any;
    octetStringType(): any;
    sequenceType(): any;
    sequenceOfType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ReferencedTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definedType(): any;
    usefulType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NamedTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    builtinValue(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class BuiltinValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    bitStringValue(): any;
    integerValue(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class BooleanTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BOOLEAN_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class IntegerTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    INTEGER_LITERAL(): antlr4.Token;
    L_BRACE(): antlr4.Token;
    namedNumberList(): any;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NamedNumberListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    namedNumber: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NamedNumberContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    L_PAREN(): antlr4.Token;
    signedNumber(): any;
    R_PAREN(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SignedNumberContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Number(): antlr4.Token;
    HYPHEN_MINUS(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class IntegerValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    signedNumber(): any;
    valueReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EnumeratedTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENUMERATED_LITERAL(): antlr4.Token;
    L_BRACE(): antlr4.Token;
    enumerations(): any;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EnumerationsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    rootEnumeration(): any;
    COMMA: (i: any) => any;
    ELLIPSIS(): antlr4.Token;
    exceptionSpec(): any;
    additionalEnumeration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class RootEnumerationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumeration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AdditionalEnumerationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumeration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EnumerationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumerationItem: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EnumerationItemContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    namedNumber(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class BitStringTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BIT_LITERAL(): antlr4.Token;
    STRING_LITERAL(): antlr4.Token;
    L_BRACE(): antlr4.Token;
    namedBitList(): any;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NamedBitListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    namedBit: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NamedBitContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    L_PAREN(): antlr4.Token;
    Number(): antlr4.Token;
    R_PAREN(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class BitStringValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Bstring(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class OctetStringTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    OCTET_LITERAL(): antlr4.Token;
    STRING_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NullTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NULL_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SequenceTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SEQUENCE_LITERAL(): antlr4.Token;
    L_BRACE(): antlr4.Token;
    R_BRACE(): antlr4.Token;
    extensionAndException(): any;
    optionalExtensionMarker(): any;
    componentTypeLists(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAndExceptionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ELLIPSIS(): antlr4.Token;
    exceptionSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class OptionalExtensionMarkerContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COMMA(): antlr4.Token;
    ELLIPSIS(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ComponentTypeListsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    rootComponentTypeList: (i: any) => any;
    Tag(): antlr4.Token;
    COMMA: (i: any) => any;
    extensionAndException(): any;
    extensionAdditions(): any;
    optionalExtensionMarker(): any;
    extensionEndMarker(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class RootComponentTypeListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    componentTypeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionEndMarkerContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COMMA(): antlr4.Token;
    ELLIPSIS(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COMMA(): antlr4.Token;
    extensionAdditionList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    extensionAddition: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    componentType(): any;
    extensionAdditionGroup(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionGroupContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_VERSION_BRACKET(): antlr4.Token;
    componentTypeList(): any;
    R_VERSION_BRACKET(): antlr4.Token;
    Tag(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ComponentTypeListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    componentType: (i: any) => any;
    COMMA: (i: any) => any;
    Tag: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ComponentTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    namedType(): any;
    OPTIONAL_LITERAL(): antlr4.Token;
    DEFAULT_LITERAL(): antlr4.Token;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SequenceOfTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SEQUENCE_LITERAL(): antlr4.Token;
    OF_LITERAL(): antlr4.Token;
    type(): any;
    namedType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ChoiceTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CHOICE_LITERAL(): antlr4.Token;
    L_BRACE(): antlr4.Token;
    alternativeTypeLists(): any;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AlternativeTypeListsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    rootAlternativeTypeList(): any;
    COMMA(): antlr4.Token;
    extensionAndException(): any;
    extensionAdditionAlternatives(): any;
    optionalExtensionMarker(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class RootAlternativeTypeListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    alternativeTypeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionAlternativesContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COMMA(): antlr4.Token;
    extensionAdditionAlternativesList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionAlternativesListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    extensionAdditionAlternative: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionAlternativeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    extensionAdditionAlternativesGroup(): any;
    namedType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExtensionAdditionAlternativesGroupContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_VERSION_BRACKET(): antlr4.Token;
    alternativeTypeList(): any;
    R_VERSION_BRACKET(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AlternativeTypeListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    namedType: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectIdentifierTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    OBJECT_LITERAL(): antlr4.Token;
    IDENTIFIER_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class CharacterStringTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    restrictedCharacterStringType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class RestrictedCharacterStringTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PrintableString_LITERAL(): antlr4.Token;
    UTF8String_LITERAL(): antlr4.Token;
    VisibleString_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class UsefulTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    UTCTime_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ConstrainedTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    builtinType(): any;
    constraint: (i: any) => any;
    referencedType(): any;
    typeWithConstraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TypeWithConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SEQUENCE_LITERAL(): antlr4.Token;
    constraint(): any;
    OF_LITERAL(): antlr4.Token;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_PAREN(): antlr4.Token;
    constraintSpec(): any;
    R_PAREN(): antlr4.Token;
    exceptionSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ConstraintSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    subtypeConstraint(): any;
    generalConstraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SubtypeConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    elementSetSpecs(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ElementSetSpecsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    rootElementSetSpec(): any;
    COMMA: (i: any) => any;
    ELLIPSIS(): antlr4.Token;
    additionalElementSetSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class RootElementSetSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    elementSetSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AdditionalElementSetSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    elementSetSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ElementSetSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    unions(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class UnionsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    intersections: (i: any) => any;
    unionMark: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class IntersectionsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    intersectionElements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class IntersectionElementsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    elements(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class UnionMarkContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PIPE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ElementsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    subtypeElements(): any;
    objectSetElements(): any;
    L_PAREN(): antlr4.Token;
    elementSetSpec(): any;
    R_PAREN(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SubtypeElementsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    singleValue(): any;
    valueRange(): any;
    sizeConstraint(): any;
    innerTypeConstraints(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SingleValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ValueRangeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    lowerEndpoint(): any;
    RANGE_SEPARATOR(): antlr4.Token;
    upperEndpoint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class LowerEndpointContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    lowerEndValue(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class UpperEndpointContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    upperEndValue(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class LowerEndValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    value(): any;
    MIN_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class UpperEndValueContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    value(): any;
    MAX_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SizeConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SIZE_LITERAL(): antlr4.Token;
    constraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class InnerTypeConstraintsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WITH_LITERAL(): antlr4.Token;
    COMPONENTS_LITERAL(): antlr4.Token;
    multipleTypeConstraints(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class MultipleTypeConstraintsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    partialSpecification(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class PartialSpecificationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    ELLIPSIS(): antlr4.Token;
    COMMA(): antlr4.Token;
    typeConstraints(): any;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TypeConstraintsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    namedConstraint: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class NamedConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    componentConstraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ComponentConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    valueConstraint(): any;
    presenceConstraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ValueConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class PresenceConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PRESENT_LITERAL(): antlr4.Token;
    ABSENT_LITERAL(): antlr4.Token;
    OPTIONAL_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExceptionSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EXCLAM(): antlr4.Token;
    exceptionIdentification(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ExceptionIdentificationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    signedNumber(): any;
    definedValue(): any;
    type(): any;
    COLON(): antlr4.Token;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectClassReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Word(): antlr4.Token;
    ObjectClassReference(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectSetReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IdentifierL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ValueFieldReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AMP(): antlr4.Token;
    IdentifierL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class WordContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Word(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TypeFieldReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AMP(): antlr4.Token;
    typeReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedObjectClassContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectClassReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedObjectSetContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectSetReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectClassAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectClassReference(): any;
    ASSIGNMENT(): antlr4.Token;
    objectClass(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectClassContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectClassDefn(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectClassDefnContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CLASS_LITERAL(): antlr4.Token;
    L_BRACE(): antlr4.Token;
    fieldSpec: (i: any) => any;
    R_BRACE(): antlr4.Token;
    COMMA: (i: any) => any;
    withSyntaxSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class WithSyntaxSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WITH_LITERAL(): antlr4.Token;
    SYNTAX_LITERAL(): antlr4.Token;
    syntaxList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class FieldSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeFieldSpec(): any;
    fixedTypeValueFieldSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TypeFieldSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeFieldReference(): any;
    typeOptionalitySpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TypeOptionalitySpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    OPTIONAL_LITERAL(): antlr4.Token;
    DEFAULT_LITERAL(): antlr4.Token;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class FixedTypeValueFieldSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    valueFieldReference(): any;
    type(): any;
    UNIQUE_LITERAL(): antlr4.Token;
    valueOptionalitySpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ValueOptionalitySpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    OPTIONAL_LITERAL(): antlr4.Token;
    DEFAULT_LITERAL(): antlr4.Token;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class PrimitiveFieldNameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeFieldReference(): any;
    valueFieldReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class FieldNameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    primitiveFieldName: (i: any) => any;
    PERIOD: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SyntaxListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    R_BRACE(): antlr4.Token;
    tokenOrGroupSpec: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TokenOrGroupSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    requiredToken(): any;
    optionalGroup(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class OptionalGroupContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACKET(): antlr4.Token;
    R_BRACKET(): antlr4.Token;
    tokenOrGroupSpec: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class RequiredTokenContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    literal(): any;
    primitiveFieldName(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class LiteralContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    word(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectReference(): any;
    definedObjectClass(): any;
    ASSIGNMENT(): antlr4.Token;
    object(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectDefn(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectDefnContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definedSyntax(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedSyntaxContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    R_BRACE(): antlr4.Token;
    definedSyntaxToken: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedSyntaxTokenContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    literal(): any;
    setting(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SettingContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    value(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectSetAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectSetReference(): any;
    definedObjectClass(): any;
    ASSIGNMENT(): antlr4.Token;
    objectSet(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectSetContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    objectSetSpec(): any;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectSetSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    rootElementSetSpec(): any;
    COMMA: (i: any) => any;
    ELLIPSIS(): antlr4.Token;
    additionalElementSetSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectSetElementsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    object(): any;
    definedObjectSet(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ObjectClassFieldTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definedObjectClass(): any;
    PERIOD(): antlr4.Token;
    fieldName(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class GeneralConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableConstraint(): any;
    contentsConstraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class TableConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    simpleTableConstraint(): any;
    componentRelationConstraint(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SimpleTableConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectSet(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ComponentRelationConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE: (i: any) => any;
    definedObjectSet(): any;
    R_BRACE: (i: any) => any;
    atNotation: (i: any) => any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class AtNotationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AT(): antlr4.Token;
    componentIdList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ComponentIdListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    PERIOD: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ContentsConstraintContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CONTAINING_LITERAL(): antlr4.Token;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ParameterizedAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    parameterizedTypeAssignment(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ParameterizedTypeAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeReference(): any;
    parameterList(): any;
    ASSIGNMENT(): antlr4.Token;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ParameterListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    parameter: (i: any) => any;
    R_BRACE(): antlr4.Token;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ParameterContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    paramGovernor(): any;
    COLON(): antlr4.Token;
    dummyReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ParamGovernorContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    governor(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class GovernorContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    definedObjectClass(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DummyReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ParameterizedReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reference(): any;
    L_BRACE(): antlr4.Token;
    R_BRACE(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ParameterizedTypeAmbiguousContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    simpleDefinedType(): any;
    actualParameterList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SimpleDefinedTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ActualParameterListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    actualParameter: (i: any) => any;
    R_BRACE(): antlr4.Token;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ActualParameterContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    value(): any;
    objectSet(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IdentifierL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectSetReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingClassReferenceVariantContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NUMBER_SIGN(): antlr4.Token;
    typeReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedOrBuiltinEncodingClassContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    builtinEncodingClassReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedEncodingObjectContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObjectReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedEncodingObjectSetContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObjectSetReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DefinedOrBuiltinEncodingObjectSetContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definedEncodingObjectSet(): any;
    builtinEncodingObjectSetReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class ElmModuleBodyContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingApplicationList(): any;
    imports(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingApplicationListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingApplication: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingApplicationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENCODE_LITERAL(): antlr4.Token;
    simpleDefinedEncodingClass: (i: any) => any;
    combinedEncodings(): any;
    COMMA: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class CombinedEncodingsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WITH_LITERAL(): antlr4.Token;
    primaryEncodings(): any;
    completionClause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class CompletionClauseContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COMPLETED_LITERAL(): antlr4.Token;
    BY_LITERAL(): antlr4.Token;
    secondaryEncodings(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class PrimaryEncodingsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObjectSet(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SecondaryEncodingsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObjectSet(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EdmModuleBodyContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    exports(): any;
    imports(): any;
    edmAssignmentList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EdmAssignmentListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    edmAssignment: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EdmAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObjectAssignment(): any;
    encodingObjectSetAssignment(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class BuiltinEncodingClassReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingProcedureClassReference(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingProcedureClassReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NUMBER_SIGN(): antlr4.Token;
    OUTER_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObjectReference(): any;
    definedOrBuiltinEncodingClass(): any;
    ASSIGNMENT(): antlr4.Token;
    encodingObject(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    differentialEncodeDecodeObjectVariant(): any;
    definedSyntax(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class DifferentialEncodeDecodeObjectVariantContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    specForEncoding(): any;
    DECODE_LITERAL(): antlr4.Token;
    AS_LITERAL(): antlr4.Token;
    IF_LITERAL(): antlr4.Token;
    specForDecoders(): any;
    R_BRACE(): antlr4.Token;
    ENCODE_DECODE_LITERAL(): antlr4.Token;
    ENCODER_DECODER_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SpecForEncodingContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObject(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SpecForDecodersContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObject(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectSetAssignmentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingObjectSetReference(): any;
    NUMBER_SIGN(): antlr4.Token;
    ENCODINGS_LITERAL(): antlr4.Token;
    ASSIGNMENT(): antlr4.Token;
    encodingObjectSet(): any;
    completionClause(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectSetContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definedOrBuiltinEncodingObjectSet(): any;
    encodingObjectSetSpec(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectSetSpecContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    L_BRACE(): antlr4.Token;
    encodingObjects: (i: any) => any;
    R_BRACE(): antlr4.Token;
    unionMark: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class EncodingObjectsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    definedEncodingObject(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class BuiltinEncodingObjectSetReferenceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PER_BASIC_UNALIGNED_LITERAL(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
declare class SimpleDefinedEncodingClassContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    encodingClassReferenceVariant(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
}
//# sourceMappingURL=asn1Parser.d.ts.map