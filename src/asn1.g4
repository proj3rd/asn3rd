/** NOTE
 *  ASN.1 specification and ANTLR4 specification have different naming rules
 *  | Spec.  | Lexer rule             | Parser rule            |
 *  |--------|------------------------|------------------------|
 *  | ASN.1  | Starts with lower case | Starts with upper case |
 *  | ANTLR4 | Starts with upper case | Starts with lower case |
 */

grammar asn1;

////////////////////////////////////////////////////////////////////////////////
// Parser rules ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

moduleDefinitions:
  (
      // X.680 clause 13.1
      moduleDefinition
      // X.692 clause 12.1.1
    | elmDefinition
      // X.692 clause 14.1
    | edmDefinition
  )+;

/** X.680 clause 12.2 */
typeReference: Word | ObjectClassReference | TypeReference;

/** X.680 clause 12.3 */
identifier: IdentifierL;

/** X.680 clause 12.4 */
valueReference: IdentifierL;

/** X.680 clause 12.5 */
moduleReference: typeReference;

/** X.680 clause 13.1 */
moduleDefinition:
  moduleIdentifier
  DEFINITIONS_LITERAL
  // encodingReferenceDefault?
  tagDefault?
  // extensionDefault?
  ASSIGNMENT
  BEGIN_LITERAL
  moduleBody?
  // encodingControlSections
  END_LITERAL
  ;

/** X.692 clause 12.1.1 */
elmDefinition:
  moduleIdentifier
  LINK_DEFINITIONS_LITERAL
  ASSIGNMENT
  BEGIN_LITERAL
  elmModuleBody
  END_LITERAL
  ;

/** X.692 clause 14.1 */
edmDefinition:
  moduleIdentifier
  ENCODING_DEFINITIONS_LITERAL
  ASSIGNMENT
  BEGIN_LITERAL
  edmModuleBody
  END_LITERAL
  ;

/** X.680 clause 13.1 */
moduleIdentifier:
  moduleReference
  definitiveIdentification?
  ;

/** X.680 clause 13.1
 *  Should be used with `?` mark for `empty` alternative
 */
definitiveIdentification:
    definitiveOid
  // | definitiveOidAndIri
  // `empty` alternative has been omitted
  ;

/** X.680 clause 13.1 */
definitiveOid: L_BRACE definitiveObjIdComponentList R_BRACE;

/** X.680 clause 13.1 */
definitiveObjIdComponentList: definitiveObjIdComponent+;

/** X.680 clause 13.1 */
definitiveObjIdComponent:
    // nameForm
  // | definitiveNumberForm
    definitiveNameAndNumberForm
  ;

/** X.680 clause 13.1 */
definitiveNameAndNumberForm:
  identifier
  L_PAREN
  definitiveNumberForm
  R_PAREN
  ;

/** X.680 clause 13.1 */
definitiveNumberForm: Number;

/** X.680 clause 13.1
 *  Should be used with `?` mark for `empty` alternative
 */
tagDefault:
    EXPLICIT_LITERAL TAGS_LITERAL
  | IMPLICIT_LITERAL TAGS_LITERAL
  | AUTOMATIC_LITERAL TAGS_LITERAL
  // `empty` alternative has been omitted
  ;

/** X.680 clause 13.1
 * Should be used with `?` mark for `empty` alternative
 */
moduleBody:
  exports?
  imports?
  assignmentList
  // `empty` alternative has been omitted
  ;

/** X.680 clause 13.1
 *  Should be used with `?` mark for `empty` alternative
 */
exports:
    EXPORTS_LITERAL symbolsExported? SEMICOLON_LITERAL
  // | EXPORTS_LITERAL ALL_LITERAL
  ;

/** X.680 clause 13.1
 *  Should be used with `?` mark for `empty` alternative
 */
symbolsExported:
  symbolList
  // `empty` alternative has been omitted
  ;

/** X.680 clause 13.1
 *  Should be used with `?` mark for `empty` alternative
 */
imports:
  IMPORTS_LITERAL symbolsImported? SEMICOLON_LITERAL
  // `empty` alternative has been omitted
  ;

/** X.680 clause 13.1
 *  Should be used with `?` mark for `empty` alternative
 */
symbolsImported:
  symbolsFromModuleList
  // `empty` alternative has been omitted
  ;

/** X.680 clause 13.1 */
symbolsFromModuleList: symbolsFromModule+;

/** X.680 clause 13.1 */
symbolsFromModule: symbolList FROM_LITERAL globalModuleReference;

/** X.680 clause 13.1 */
globalModuleReference:
  moduleReference
  // assignedIdentifier
  ;

/** X.680 clause 13.1 */
symbolList: symbol (COMMA symbol)*;

/** X.680 clause 13.1 */
symbol:
    reference
  | parameterizedReference
  ;

/** X.680 clause 13.1 */
reference:
    typeReference
  | valueReference
  // ObjectClassReference
  // ObjectReference
  // ObjectSetReference
  ;

/** X.680 clause 13.1 */
assignmentList: assignment+;

/** X.680 clause 13.1 */
assignment:
  (
      typeAssignment
    | valueAssignment
    // | xmlValueAssignment
    // | valueSetTypeAssignment
    | objectClassAssignment
    | objectAssignment
    | objectSetAssignment
    | parameterizedAssignment
  )
  Tag?
  ;

/** X.680 clause 14.1 */
definedType:
    externalTypeReference
  | typeReference
  | parameterizedTypeAmbiguous
  // | `parameterizedValueSetType` alternative has been omitted. See `parameterizedTypeAmbiguous`
  ;

/** X.680 clause 14.1 */
definedValue:
    externalValueReference
  | valueReference
  // | parameterizedValue
  ;

/** X.680 clause 14.6 */
externalTypeReference: moduleReference PERIOD typeReference;

/** X.680 clause 14.6 */
externalValueReference: moduleReference PERIOD valueReference;

/** X.680 clause 16.1 */
typeAssignment: typeReference ASSIGNMENT type;

/** X.680 clause 16.2 */
valueAssignment: valueReference type ASSIGNMENT value;

/** X.680 clause 17.1 */
type:
    builtinType
  | referencedType
  | constrainedType
  ;

/** X.680 clause 17.2 */
builtinType:
    bitStringType
  | booleanType
  | characterStringType
  | choiceType
  // | dateType
  // | dateTimeType
  // | durationType
  // | embeddedPdvType
  | enumeratedType
  // | externalType
  // | instanceOfType
  | integerType
  // | iriType
  | nullType
  | objectClassFieldType
  | objectIdentifierType
  | octetStringType
  // | realType
  // | relativeIriType
  // | relativeOidType
  | sequenceType
  | sequenceOfType
  // | setType
  // | setOfType
  // | prefixedType
  // | timeType
  // | timeOfDayType
  ;

/** X.680 clause 17.3 */
referencedType:
    definedType
  | usefulType
  // | selectionType
  // | typeFromObject
  // | valueSetFromObjects
  ;

/** X.680 clause 17.5 */
namedType: identifier type;

/** X.680 clause 17.7 */
value:
    builtinValue
  // | referencedValue
  // | objectClassFieldValue
  ;

/** X.680 clause 17.9 */
builtinValue:
    bitStringValue
  // | booleanValue
  // | characterStringValue
  // | choiceValue
  // | embeddedPdvValue
  // | enumeratedValue
  // | externalValue
  // | instanceOfValue
  | integerValue
  // | iriValue
  // | nullValue
  // | objectIdentifierValue
  // | octetStringValue
  // | realValue
  // | relativeIriValue
  // | relativeOidValue
  // | sequenceValue
  // | sequenceOfValue
  // | setValue
  // | setOfValue
  // | prefixedValue
  // | timeValue
  ;

/** X.680 clause 18.1 */
booleanType: BOOLEAN_LITERAL;

/** X.680 clause 19.1 */
integerType:
    INTEGER_LITERAL
  | INTEGER_LITERAL L_BRACE namedNumberList R_BRACE
  ;

/** X.680 cluase 19.1 */
namedNumberList:
  namedNumber (COMMA namedNumber)*
  ;

/** X.680 clause 19.1 */
namedNumber:
    identifier L_PAREN signedNumber R_PAREN
  // | identifier L_PAREN definedValue R_PAREN
  ;

/** X.680 clause 19.1 */
signedNumber:
    Number
  | HYPHEN_MINUS Number
  ;

/** X.680 clause 19.9 */
integerValue:
    signedNumber
  | valueReference
  ;

/** X.680 clause 20.1 */
enumeratedType: ENUMERATED_LITERAL L_BRACE enumerations R_BRACE;

/** X.680 clause 20.1 */
enumerations:
    rootEnumeration
  | rootEnumeration COMMA ELLIPSIS exceptionSpec?
  | rootEnumeration COMMA ELLIPSIS exceptionSpec? COMMA additionalEnumeration
  ;

/** X.680 clause 20.1 */
rootEnumeration: enumeration;

/** X.680 clause 20.1 */
additionalEnumeration: enumeration;

/** X.680 clause 20.1 */
enumeration: enumerationItem (COMMA enumerationItem)*;

/** X.680 clause 20.1 */
enumerationItem:
    identifier
  | namedNumber
  ;

/** X.680 clause 22.1 */
bitStringType:
    BIT_LITERAL STRING_LITERAL
  | BIT_LITERAL STRING_LITERAL L_BRACE namedBitList R_BRACE
  ;

/** X.680 clause 22.1 */
namedBitList:
  namedBit (COMMA namedBit)*
  ;

/** X.680 clause 22.1 */
namedBit:
    identifier L_PAREN Number R_PAREN
  // | identifier L_PAREN definedValue R_PAREN
  ;

/** X.680 clause 22.9 */
bitStringValue:
    Bstring
  // | Hstring
  // | L_BRACE identifierList R_BRACE
  // | L_BRACE R_BRACE
  // | CONTAINING_LITERAL value
  ;

/** X.680 clause 23.1 */
octetStringType: OCTET_LITERAL STRING_LITERAL;

/** X.680 clause 24.1 */
nullType: NULL_LITERAL;

/** X.680 clause 25.1 */
sequenceType:
    SEQUENCE_LITERAL L_BRACE R_BRACE
  | SEQUENCE_LITERAL L_BRACE extensionAndException optionalExtensionMarker? R_BRACE
  | SEQUENCE_LITERAL L_BRACE componentTypeLists R_BRACE
  ;

/** X.680 clause 25.1 */
extensionAndException:
    ELLIPSIS
  | ELLIPSIS exceptionSpec?
  ;

/** X.680 clause 25.1
 * Should be used with `?` mark for `empty` alternative
 */
optionalExtensionMarker:
  COMMA ELLIPSIS
  // `empty` alternative has been omitted
  ;

/** X.680 clause 25.1 */
componentTypeLists:
    rootComponentTypeList Tag?
  | rootComponentTypeList COMMA Tag? extensionAndException extensionAdditions? optionalExtensionMarker?
  | rootComponentTypeList COMMA Tag? extensionAndException extensionAdditions? extensionEndMarker COMMA rootComponentTypeList
  | extensionAndException extensionAdditions? extensionEndMarker COMMA rootComponentTypeList
  | extensionAndException extensionAdditions? optionalExtensionMarker?
  ;

/** X.680 clause 25.1 */
rootComponentTypeList: componentTypeList;

/** x.680 clause 25.1 */
extensionEndMarker: COMMA ELLIPSIS;

/** X.680 clause 25.1
 *  Should be used with `?` makr for `empty` alternative
 */
extensionAdditions:
  COMMA extensionAdditionList
  // `empty` alternative has been omitted
  ;

/** X.680 clause 25.1 */
extensionAdditionList: extensionAddition (COMMA extensionAddition)*;

/** X.680 clause 25.1 */
extensionAddition:
    componentType
  | extensionAdditionGroup
  ;

/** X.680 clause 25.1 */
extensionAdditionGroup:
  L_VERSION_BRACKET
  // versionNumber
  componentTypeList Tag?
  R_VERSION_BRACKET
  ;

/** X.680 clause 25.1 */
componentTypeList: componentType (COMMA Tag? componentType)*;

/** X.680 clause 25.1 */
componentType:
    namedType
  | namedType OPTIONAL_LITERAL
  | namedType DEFAULT_LITERAL value
  // | COMPONENTS_LITERAL OF_LITERAL type
  ;

/** X.680 clause 26.1 */
sequenceOfType:
    SEQUENCE_LITERAL OF_LITERAL type
  | SEQUENCE_LITERAL OF_LITERAL namedType
  ;

/** X.680 clause 29.1 */
choiceType: CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE;

/** X.680 clause 29.1 */
alternativeTypeLists:
    rootAlternativeTypeList
  | rootAlternativeTypeList COMMA extensionAndException extensionAdditionAlternatives? optionalExtensionMarker?
  ;

/** X.680 clause 29.1 */
rootAlternativeTypeList: alternativeTypeList;

/** X.680 clause 29.1
 *  Should be used with `?` markfor `empty` alternative
 */
extensionAdditionAlternatives:
  COMMA extensionAdditionAlternativesList
  // `empty` alternative has been omitted
  ;

/** X.680 clause 29.1 */
extensionAdditionAlternativesList: extensionAdditionAlternative (COMMA extensionAdditionAlternative)*;

/** X.680 clause 29.1 */
extensionAdditionAlternative:
    extensionAdditionAlternativesGroup
  | namedType
  ;

/** X.680 clause 29.1 */
extensionAdditionAlternativesGroup:
  L_VERSION_BRACKET
  // versionNumber
  alternativeTypeList
  R_VERSION_BRACKET
  ;

/** X.680 clause 29.1 */
alternativeTypeList: namedType (COMMA namedType)*;

/** X.680 clause 32.1 */
objectIdentifierType: OBJECT_LITERAL IDENTIFIER_LITERAL;

/** X.680 clause 40.1 */
characterStringType:
    restrictedCharacterStringType
  // | unrestrictedCharacterStringType
  ;

/** X.680 clause 40.3 */
restrictedCharacterStringType:
  //   BMPString_LITERAL
  // | GeneralString_LITERAL
  // | GraphicString_LITERAL
  // | IA5String_LITERAL
  // | ISO646String_LITERAL
  // | NumericString_LITERAL
    PrintableString_LITERAL
  // | TeletexString_LITERAL
  // | T61String_LITERAL
  // | UniversalString_LITERAL
  | UTF8String_LITERAL
  // | VideotexString_LITERAL
  | VisibleString_LITERAL
  ;

/** X.680 clause 45.1 */
usefulType:
    // Original definition
    // typeReference
    // Resolved definition
    // GeneralizedTime_LITERAL
    UTCTime_LITERAL
  // | ObjectDescriptor_LITERAL
  ;

/** X.680 clause 49.1 */
constrainedType:
  // Original definition in the specification
  //   type constraint
  // | typeWithConstraint
  // Left-recursion-free definition
    builtinType constraint+
  | referencedType constraint+
  | typeWithConstraint constraint*
  ;

/** X.680 clause 49.5 */
typeWithConstraint:
    // SET_LITERAL constraint OF_LITERAL type
  // | SET_LITERAL sizeConsraint OF_LITERAL type
    SEQUENCE_LITERAL constraint OF_LITERAL type
  // | SEQUENCE_LITERAL sizeConstraint OF_LITERAL type
  // | SET_LITERAL constraint OF_LITERAL namedType
  // | SET_LITERAL sizeConsraint OF_LITERAL namedType
  // | SEQUENCE_LITERAL constraint OF_LITERAL namedType
  // | SEQUENCE_LITERAL sizeConstraint OF_LITERAL namedType
  ;

/** X.680 clause 49.6 */
constraint: L_PAREN constraintSpec exceptionSpec? R_PAREN;

/** X.680 clause 49.6 */
constraintSpec:
    subtypeConstraint
  | generalConstraint
  ;

/** X.680 clause 49.7 */
subtypeConstraint: elementSetSpecs;

/** X.680 clause 50.1 */
elementSetSpecs:
    rootElementSetSpec
  | rootElementSetSpec COMMA ELLIPSIS
  | rootElementSetSpec COMMA ELLIPSIS COMMA additionalElementSetSpec
  ;

/** X.680 clause 50.1 */
rootElementSetSpec: elementSetSpec;

/** X.680 clause 50.1 */
additionalElementSetSpec: elementSetSpec;

/** x.680 clause 50.1 */
elementSetSpec:
    unions
  // | ALL_LITERAL exclusions
  ;

/** x.680 clause 50.1 */
unions:
  // Original definition in the specification
  //   intersections
  // | uElems unionMark intersections
  // Left-recursion-free definition
  intersections (unionMark intersections)*
  ;

/** X.680 clause 50.1
 *  Commented out to resolve lefr-recursion between `unions` and `uElems`
 */
// uElems: unions;

/** X.680 clause 50.1 */
intersections:
    intersectionElements
  // | iElems intersectionMark intersectionElements
  ;

/** x.680 clause 50.1 */
intersectionElements:
    elements
  // | elems exclusions
  ;

unionMark:
    PIPE
  // | UNION_LITERAL
  ;

/** X.680 clause 50.5 */
elements:
    subtypeElements
  | objectSetElements
  | L_PAREN elementSetSpec R_PAREN
  ;

/** X.680 clause 50.1 */
subtypeElements:
    singleValue
  // | containedSubtype
  | valueRange
  // | permittedAlphabet
  | sizeConstraint
  // | typeConstraint
  | innerTypeConstraints
  // | patternConstraint
  // | propertySetgins
  // | durationRange
  // | timePointRange
  // | recurrenceRange
  ;

/** X.680 clause 51.2.1 */
singleValue: value;

/** X.680 clause 51.4.1 */
valueRange: lowerEndpoint RANGE_SEPARATOR upperEndpoint;

/** X.680 clause 51.4.3 */
lowerEndpoint:
    lowerEndValue
  // | lowerEndValue LESS_THAN
  ;

/** X.680 clause 51.4.3 */
upperEndpoint:
    upperEndValue
  // | LESS_THAN upperEndValue
  ;

/** X.680 clause 51.4.4 */
lowerEndValue:
    value
  | MIN_LITERAL
  ;

/** X.680 clause 51.4.4 */
upperEndValue:
    value
  | MAX_LITERAL
  ;

/** X.680 clause 51.5.1 */
sizeConstraint: SIZE_LITERAL constraint;

/** X.680 clause 51.8.1 */
innerTypeConstraints:
    // WITH_LITERAL COMPONENT_LITERAL singleTypeConstraint
    WITH_LITERAL COMPONENTS_LITERAL multipleTypeConstraints
  ;

/** X.680 clause 51.8.5 */
multipleTypeConstraints:
    // fullSpecification
    partialSpecification
  ;

/** X.680 clause 51.8.5 */
partialSpecification: L_BRACE ELLIPSIS COMMA typeConstraints R_BRACE;

/** X.680 clause 51.8.5 */
typeConstraints: namedConstraint (COMMA namedConstraint)*;

/** X.680 clause 51.8.5 */
namedConstraint: identifier componentConstraint;

/** X.680 clause 51.8.5 */
componentConstraint: valueConstraint? presenceConstraint?;

/** X.680 clause 51.8.9
 *  Should be used with `?` mark for `empty` alternative
 */
valueConstraint:
    constraint
  // `empty` alternative has been omitted
  ;

/** X.680 clause 51.8.10
 *  Should be used with `?` mark for `empty` alternative
 */
presenceConstraint:
    PRESENT_LITERAL
  | ABSENT_LITERAL
  | OPTIONAL_LITERAL
  // `empty` alternative has been omitted
  ;

/** X.680 clause 54.4
 *  Should be used with `?` mark for `empty` alternative
 */
exceptionSpec:
    EXCLAM exceptionIdentification
    // `emtpy` alternative has been omitted
    ;

/** X.680 clause 53.4 */
exceptionIdentification:
    signedNumber
  | definedValue
  | type COLON value
  ;

/** X.681 clause 7.1
 * See `IdentifierU` for details of `Unsafe` suffix
 */
objectClassReference: Word | ObjectClassReference;

/** X.681 clause 7.3 */
objectSetReference: typeReference;

/** X.681 clause 7.2 */
objectReference: IdentifierL;

/** X.681 clause 7.5 */
valueFieldReference: AMP IdentifierL;

/** X.681 clause 7.9
 * See `IdentifierU` for details of `Unsafe` suffix
 */
word: Word;

/** X.681 clause 7.4 */
typeFieldReference: AMP typeReference;

/** X.681 clause 8.1 */
definedObjectClass:
    // externalObjectClassReference
    objectClassReference
  // | usefulObjectClassReference
  ;

/** X.681 clause 8.1 */
definedObjectSet:
    // externalObjectSetReference
    objectSetReference
  ;

/** X.681 clause 9.1 */
objectClassAssignment:
  objectClassReference
  ASSIGNMENT
  objectClass
  ;

/** X.681 clause 9.2 */
objectClass:
    // definedObjectCalss
    objectClassDefn
  // | parameterizedObjectClass
  ;

/** X.681 clause 9.3 */
objectClassDefn:
  CLASS_LITERAL
  L_BRACE
  fieldSpec (COMMA fieldSpec)*
  R_BRACE
  withSyntaxSpec?
  ;

/** X.681 clause 9.3 */
withSyntaxSpec: WITH_LITERAL SYNTAX_LITERAL syntaxList;

/** X.681 clause 9.4 */
fieldSpec:
    typeFieldSpec
  | fixedTypeValueFieldSpec
  // | variableTypeValueFieldSpec
  // | fixedTypeValueSetFieldSpec
  // | variableTypeValueSetFieldSpec
  // | objectFieldSpec
  // | objectSetFieldSpec
  ;

/** X.681 clause 9.5 */
typeFieldSpec: typeFieldReference typeOptionalitySpec?;

/** X.681 clause 9.5 */
typeOptionalitySpec:
    OPTIONAL_LITERAL
  | DEFAULT_LITERAL type
  ;

/** X.681 clause 9.6 */
fixedTypeValueFieldSpec:
  valueFieldReference
  type
  UNIQUE_LITERAL?
  valueOptionalitySpec?
  ;

/** X.681 clause 9.6 */
valueOptionalitySpec:
    OPTIONAL_LITERAL
  | DEFAULT_LITERAL value
  ;

/** X.681 clause 9.13 */
primitiveFieldName:
    typeFieldReference
  | valueFieldReference
  // | valueSetFieldReference
  // | objectFieldReference
  // | objectSetFieldReference
  ;

/** X.681 clause 9.14 */
fieldName: primitiveFieldName (PERIOD primitiveFieldName)*;

/** X.681 clause 10.5 */
syntaxList:
  L_BRACE
  tokenOrGroupSpec+
  R_BRACE
  ;

/** X.681 clause 10.5 */
tokenOrGroupSpec:
    requiredToken
  | optionalGroup
  ;

/** X.681 clause 10.5 */
optionalGroup:
  L_BRACKET
  tokenOrGroupSpec+
  R_BRACKET
  ;

/** X.681 clause 10.5 */
requiredToken:
    literal
  | primitiveFieldName
  ;

/** X.681 clause 10.7 */
literal: word;

/** X.681 clause 11.1 */
objectAssignment:
  objectReference
  definedObjectClass
  ASSIGNMENT
  object
  ;

/** X.681 clause 11.3 */
object:
    // definedObject
    objectDefn
  // | objectFromObject
  // | parameterizedObject
  ;

/** X.681 clause 11.4 */
objectDefn:
    // defaultSyntax
    definedSyntax
  ;

/** X.681 clause 11.6 */
definedSyntax:
  L_BRACE
  definedSyntaxToken*
  R_BRACE
  ;

/** X.681 clause 11.6 */
definedSyntaxToken:
    literal
  | setting
  ;

/** X.681 clause 11.7 */
setting:
    type
  | value
  // | valueSet
  // | object
  // | objectSet
  ;

/** X.681 clause 12.1 */
objectSetAssignment: 
  objectSetReference
  definedObjectClass
  ASSIGNMENT
  objectSet
  ;

/** X.681 clause 12.3 */
objectSet: L_BRACE objectSetSpec R_BRACE;

/** X.681 clause 12.3 */
objectSetSpec:
    rootElementSetSpec
  | rootElementSetSpec COMMA ELLIPSIS
  | ELLIPSIS
  // | ELLIPSIS COMMA additionalElementSetSpec
  | rootElementSetSpec COMMA ELLIPSIS COMMA additionalElementSetSpec
  ;

/** X.681 clause 12.10 */
objectSetElements:
    object
  | definedObjectSet
  // | objectSetFromObjects
  // | parameterizedObjectSet
  ;

/** X.681 clause 14.1 */
objectClassFieldType: definedObjectClass PERIOD fieldName;

/** X.682 clause 8.1 */
generalConstraint:
    // userDefinedConstraint
    tableConstraint
  | contentsConstraint
  ;

/** X.682 clause 10.3 */
tableConstraint:
    simpleTableConstraint
  | componentRelationConstraint
  ;

/** X.682 clause 10.3 */
simpleTableConstraint: objectSet;

/** X.682 clause 10.7 */
componentRelationConstraint:
  L_BRACE
  definedObjectSet
  R_BRACE
  L_BRACE
  atNotation (COMMA atNotation)*
  R_BRACE
  ;

/** X.682 clause 10.7 */
atNotation:
    AT componentIdList
  // | AT PERIOD level componentIdList
  ;

componentIdList: identifier (PERIOD identifier)*;

/** X.682 clause 11.1 */
contentsConstraint:
    CONTAINING_LITERAL type
  // | ENCODED_LITERAL BY_LITERAL value
  // | CONTAINING_LITERAL type ENCODED_LITERAL BY_LITERAL value
  ;

/** X.683 clause 8.1 */
parameterizedAssignment:
    parameterizedTypeAssignment
  // | parameterizedValueAssignment
  // | parameterizedValueSetTypeAssignment
  // | parameterizedObjectClassAssignment
  // | parameterizedObjectAssignment
  // | parameterizedObjectSetAssignment
  ;

/** X.683 clause 8.2 */
parameterizedTypeAssignment:
    typeReference
    parameterList
    ASSIGNMENT
    type
  ;

/** X.683 clause 8.3 */
parameterList:
  L_BRACE
  parameter (COMMA parameter)*
  R_BRACE
  ;

/** X.683 clause 8.3 */
parameter:
    paramGovernor COLON dummyReference
  | dummyReference
  ;

/** X.683 clause 8.3 */
paramGovernor:
    governor
  // | dummyGovernor
  ;

/** X.683 clause 8.3 */
governor:
    type
  | definedObjectClass
  ;

/** X.683 clause 8.3 */
dummyReference: reference;

/** X.683 clause 9.1 */
parameterizedReference:
    // reference
    reference L_BRACE R_BRACE
  ;

/** X.683 clause 9.2
 *  Represents both ParameterizedType and ParameterizedValueSetType
 */
parameterizedTypeAmbiguous: simpleDefinedType actualParameterList;

/** X.683 clause 9.2 */
simpleDefinedType:
    // externalTypeReference
    typeReference
  ;

/** X.683 clause 9.5 */
actualParameterList:
  L_BRACE
  actualParameter (COMMA actualParameter)*
  R_BRACE
  ;

/** X.683 clause 9.5 */
actualParameter:
    type
  | value
  // | valueSet
  // | definedObjectClass
  // | object
  | objectSet
  ;

/** X.692 clause 8.1 */
encodingObjectReference: IdentifierL;

/** X.692 clause 8.2 */
encodingObjectSetReference: typeReference;

/** X.692 clause 8.3
 *  The second alternative is added for 3GPP UTRA RRC (25.331) variant,
 *  which is not defined in the standard ASN.1
 */
encodingClassReferenceVariant:
    NUMBER_SIGN typeReference
  | typeReference
  ;

/** X.692 clause 10.9.1 */
definedOrBuiltinEncodingClass:
    // definedEncodingClass
    builtinEncodingClassReference
  ;

/** X.692 clause 10.9.2 */
definedEncodingObject:
    encodingObjectReference
  // | externalEncodingObjectReference
  // | parameterizedEncodingObject
  ;

/** X.692 clause 10.9.3 */
definedEncodingObjectSet:
    encodingObjectSetReference
  // | externalEncodingObjectSetReference
  // | parameterizedEncodingObjectSet
  ;

/** X.692 clause 10.9.3 */
definedOrBuiltinEncodingObjectSet:
    definedEncodingObjectSet
  | builtinEncodingObjectSetReference
  ;

/** X.692 clause 12.1.5 */
elmModuleBody:
  imports?
  encodingApplicationList
  ;

/** X.692 clause 12.1.5 */
encodingApplicationList: encodingApplication+;

/** X.692 clause 12.2.1 */
encodingApplication:
  ENCODE_LITERAL
  simpleDefinedEncodingClass (COMMA simpleDefinedEncodingClass)*
  combinedEncodings
  ;

/** X.692 clause 13.1.3 */
combinedEncodings:
  WITH_LITERAL
  primaryEncodings
  completionClause?
  ;

/** X.692 clause 13.1.3 */
completionClause:
  COMPLETED_LITERAL
  BY_LITERAL
  secondaryEncodings
  ;

/** X.692 clause 13.1.3 */
primaryEncodings: encodingObjectSet;

/** X.692 clause 13.1.3 */
secondaryEncodings: encodingObjectSet;

/** X.692 clause 14.5 */
edmModuleBody:
  exports?
  // renamesAndExports?
  imports?
  edmAssignmentList?
  ;

/** X.692 clause 14.5 */
edmAssignmentList: edmAssignment+;

/** X.692 clause 14.5 */
edmAssignment:
    // encodingClassAssignment
    encodingObjectAssignment
  | encodingObjectSetAssignment
  // | parameterizedAssignment
  ;

/** X.692 clause 16.1.6 */
builtinEncodingClassReference:
    // bitfieldClassReference
  // | alternativesClassReference
  // | concatenationClassReference
  // | repetitionClassReference
  // | optionalityClassReference
  // | tagClassReference
    encodingProcedureClassReference
  ;

/** x.692 clause 16.1.13 */
encodingProcedureClassReference:
    // NUMBER_SIGN TRANSFORM_LITERAL
  // | NUMBER_SIGN CONDITIONAL_INT_LITERAL
  // | NUMBER_SIGN CONDITIONAL_REPETITION_LITERAL
    NUMBER_SIGN OUTER_LITERAL
  ;

/** X.692 clause 17.1.1 */
encodingObjectAssignment:
  encodingObjectReference
  definedOrBuiltinEncodingClass
  ASSIGNMENT
  encodingObject
  ;

/** X.692 clause 17.1.5 */
encodingObject:
    // definedEncodingObject
    differentialEncodeDecodeObjectVariant
  | definedSyntax
  // | encodeWith
  // | encodeByValueMapping
  // | encodeStructure
  // | encodingOptionsEncodingObject
  // | nonEcnEncodingObject
  ;

/** X.692 clause 17.6
 *  The second alternative is added for 3GPP UTRA RRC (25.331) variant,
 *  which is not defined in the standard ASN.1
*/
differentialEncodeDecodeObjectVariant:
  L_BRACE
  (
      ENCODE_DECODE_LITERAL
    | ENCODER_DECODER_LITERAL
  )
  specForEncoding
  DECODE_LITERAL AS_LITERAL IF_LITERAL
  specForDecoders
  R_BRACE
  ;

/** X.692 clause 17.6 */
specForEncoding: encodingObject;

/** X.692 clause 17.6 */
specForDecoders: encodingObject;

/** X.692 clause 18.1.1 */
encodingObjectSetAssignment:
  encodingObjectSetReference
  NUMBER_SIGN
  ENCODINGS_LITERAL
  ASSIGNMENT
  encodingObjectSet
  completionClause?
  ;

/** X.692 clause 18.1.1 */
encodingObjectSet:
    definedOrBuiltinEncodingObjectSet
  | encodingObjectSetSpec
  ;

/** X.692 clause 18.1.5 */
encodingObjectSetSpec:
  L_BRACE
  encodingObjects (unionMark encodingObjects)*
  R_BRACE
  ;

/** X.692 clause 18.1.5 */
encodingObjects:
    definedEncodingObject
  // | definedEncodingObjectSet
  ;

/** x.692 clause 18.2.1 */
builtinEncodingObjectSetReference:
    // PER_BASIC_ALIGNED_LITERAL
    PER_BASIC_UNALIGNED_LITERAL
  // | PER_CANONICAL_ALIGNED_LITERAL
  // | PER_CANONICAL_UNALIGNED_LITERAL
  // | BER_LITERAL
  // | CER_LITERAL
  // | DER_LITERAL
  ;

/** X.692 clause C.3 */
simpleDefinedEncodingClass:
    // externalEncodingClassReference
    encodingClassReferenceVariant
  ;

////////////////////////////////////////////////////////////////////////////////
// Lexer rules /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/** X.680 clause 12.20 */
ASSIGNMENT: '::=';

/** X.680 clause 12.22 */
ELLIPSIS: '...';

/** X.680 clause 12.21 */
RANGE_SEPARATOR: '..';

/** X.680 clause 12.23 and clause 12.24 */
L_VERSION_BRACKET: '[[';
R_VERSION_BRACKET: ']]';

/** X.680 clause 12.37
 * Only necessary lexical items have been captured
 * Add others if necessary
 */
L_BRACE: '{';
R_BRACE: '}';
COMMA: ',';
PERIOD: '.';
L_PAREN: '(';
R_PAREN: ')';
L_BRACKET: '[';
R_BRACKET: ']';
HYPHEN_MINUS: '-';
COLON: ':';
SEMICOLON_LITERAL: ';';
AT: '@';
PIPE: '|';
EXCLAM: '!';
AMP: '&';
/** X.692 clause 7.3 */
NUMBER_SIGN: '#';

/* X.680 clause 12.38 */
ABSENT_LITERAL: 'ABSENT';
ENCODED_LITERAL: 'ENCODED';
INTERSECTION_LITERAL: 'INTERSECTION';
SEQUENCE_LITERAL: 'SEQUENCE';
ABSTRACT_SYNTAX_LITERAL: 'ABSTRACT-SYNTAX';
ENCODING_CONTROL_LITERAL: 'ENCODING-CONTROL';
ISO646String_LITERAL: 'ISO646String';
SET_LITERAL: 'SET';
ALL_LITERAL: 'ALL';
END_LITERAL: 'END';
MAX_LITERAL: 'MAX';
SETTINGS_LITERAL: 'SETTINGS';
APPLICATION_LITERAL: 'APPLICATION';
ENUMERATED_LITERAL: 'ENUMERATED';
MIN_LITERAL: 'MIN';
SIZE_LITERAL: 'SIZE';
AUTOMATIC_LITERAL: 'AUTOMATIC';
EXCEPT_LITERAL: 'EXCEPT';
MINUS_INFINITY_LITERAL: 'MINUS-INFINITY';
STRING_LITERAL: 'STRING';
BEGIN_LITERAL: 'BEGIN';
EXPLICIT_LITERAL: 'EXPLICIT';
NOT_A_NUMBER_LITERAL: 'NOT-A-NUMBER';
SYNTAX_LITERAL: 'SYNTAX';
BIT_LITERAL: 'BIT';
EXPORTS_LITERAL: 'EXPORTS';
NULL_LITERAL: 'NULL';
T61String_LITERAL: 'T61String';
BMPString_LITERAL: 'BMPString';
EXTENSIBILITY_LITERAL: 'EXTENSIBILITY';
NumericString_LITERAL: 'NumericString';
TAGS_LITERAL: 'TAGS';
BOOLEAN_LITERAL: 'BOOLEAN';
EXTERNAL_LITERAL: 'EXTERNAL';
OBJECT_LITERAL: 'OBJECT';
TeletexString_LITERAL: 'TeletexString';
BY_LITERAL: 'BY';
FALSE_LITERAL: 'FALSE';
ObjectDescriptor_LITERAL: 'ObjectDescriptor';
TIME_LITERAL: 'TIME';
CHARACTER_LITERAL: 'CHARACTER';
FROM_LITERAL: 'FROM';
OCTET_LITERAL: 'OCTET';
TIME_OF_DAY_LITERAL: 'TIME-OF-DAY';
CHOICE_LITERAL: 'CHOICE';
GeneralizedTime_LITERAL: 'GeneralizedTime';
OF_LITERAL: 'OF';
TRUE_LITERAL: 'TRUE';
CLASS_LITERAL: 'CLASS';
GeneralString_LITERAL: 'GeneralString';
OID_IRI_LITERAL: 'OID-IRI';
TYPE_IDENTIFIER_LITERAL: 'TYPE-IDENTIFIER';
COMPONENT_LITERAL: 'COMPONENT';
GraphicString_LITERAL: 'GraphicString';
OPTIONAL_LITERAL: 'OPTIONAL';
UNION_LITERAL: 'UNION';
COMPONENTS_LITERAL: 'COMPONENTS';
IA5String_LITERAL: 'IA5String';
PATTERN_LITERAL: 'PATTERN';
UNIQUE_LITERAL: 'UNIQUE';
CONSTRAINED_LITERAL: 'CONSTRAINED';
IDENTIFIER_LITERAL: 'IDENTIFIER';
PDV_LITERAL: 'PDV';
UNIVERSAL_LITERAL: 'UNIVERSAL';
CONTAINING_LITERAL: 'CONTAINING';
IMPLICIT_LITERAL: 'IMPLICIT';
PLUS_INFINITY_LITERAL: 'PLUS-INFINITY';
UniversalString_LITERAL: 'UniversalString';
DATE_LITERAL: 'DATE';
IMPLIED_LITERAL: 'IMPLIED';
PRESENT_LITERAL: 'PRESENT';
UTCTime_LITERAL: 'UTCTime';
DATE_TIME_LITERAL: 'DATE-TIME';
IMPORTS_LITERAL: 'IMPORTS';
PrintableString_LITERAL: 'PrintableString';
UTF8String_LITERAL: 'UTF8String';
DEFAULT_LITERAL: 'DEFAULT';
INCLUDES_LITERAL: 'INCLUDES';
PRIVATE_LITERAL: 'PRIVATE';
VideotexString_LITERAL: 'VideotexString';
DEFINITIONS_LITERAL: 'DEFINITIONS';
INSTANCE_LITERAL: 'INSTANCE';
REAL_LITERAL: 'REAL';
VisibleString_LITERAL: 'VisibleString';
DURATION_LITERAL: 'DURATION';
INSTRUCTIONS_LITERAL: 'INSTRUCTIONS';
RELATIVE_OID_LITERAL: 'RELATIVE-OID';
WITH_LITERAL: 'WITH';
EMBEDDED_LITERAL: 'EMBEDDED';
INTEGER_LITERAL: 'INTEGER';
RELATIVE_OID_IRI_LITERAL: 'RELATIVE-OID-IRI';
/* X.692 clause 8.4 */
AS_LITERAL: 'AS';
COMPLETED_LITERAL: 'COMPLETED';
ENCODE_LITERAL: 'ENCODE';
ENCODE_DECODE_LITERAL: 'ENCODE-DECODE';
ENCODER_LITERAL: 'ENCODER';
ENCODER_DECODER_LITERAL: 'ENCODER-DECODER';
DECODE_LITERAL: 'DECODE';
DECODER_LITERAL: 'DECODER';
ENCODING_DEFINITIONS_LITERAL: 'ENCODING-DEFINITIONS';
ENCODINGS_LITERAL: 'ENCODINGS';
IF_LITERAL: 'IF';
LINK_DEFINITIONS_LITERAL: 'LINK-DEFINITIONS';
// PER_BASIC_ALIGNED_LITERAL
PER_BASIC_UNALIGNED_LITERAL: 'PER-BASIC-UNALIGNED';
// PER_CANONICAL_ALIGNED_LITERAL
// PER_CANONICAL_UNALIGNED_LITERAL
// BER_LITERAL
// CER_LITERAL
// DER_LITERAL
OUTER_LITERAL: 'OUTER';

// \u3000: ideographic space
WS: [ \n\r\t\u3000] -> skip;

/** X.680 clause 12.6.2
 *  this grammar has two different comment parser rules
 *  because 3GPP RRC ASN.1 defines a 'tag' exploiting a comment.
 *  `getCharPositionInLine()` should be substituted with target language API
 */
Tag: {getCharPositionInLine() != 0}? '--' (N E E D | C O N D) ~[\n\r]* '\r'? '\n';
Comment: '--' ~[\n\r]*? (('\r'? '\n') | '--') -> skip;

/** X.681 clause 7.9 */
Word: [A-Z]([A-Z-]*[A-Z])?;

/** X.681 clause 7.1
 *  `Word` shall be used as another alternative
 */
ObjectClassReference: [A-Z]([A-Z0-9-]*[A-Z0-9])?;

/** X.680 clause 12.2
 *  `Word` and `ObjectClassReference` shall be sued as other alternatives
 */
TypeReference: [A-Z]([A-Za-z0-9-]*[A-Za-z0-9])?;

/** X.680 clause 12.3 and clause 12.4 */
IdentifierL: [a-z]([A-Za-z0-9-]*[A-Za-z0-9])?;

/** X.680 clause 12.8 */
Number:
    [0-9]
  | [1-9][0-9]+
  ;

Bstring:
    // [01]+
    '\'' [01]+ '\'' 'B'?
  ;

// fragments for a `Tag`, i.e., `Need` and `Cond`
fragment C: [Cc];
fragment D: [Dd];
fragment E: [Ee];
fragment N: [Nn];
fragment O: [Oo];
