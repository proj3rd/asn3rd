declare class grammar3rdLexer extends antlr4.Lexer {
    static grammarFileName: string;
    static channelNames: string[];
    static modeNames: string[];
    static literalNames: (string | null)[];
    static symbolicNames: (string | null)[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    get atn(): any;
    sempred(localctx: any, ruleIndex: any, predIndex: any): boolean;
    Tag_sempred(localctx: any, predIndex: any): boolean;
}
declare namespace grammar3rdLexer {
    const EOF: number;
    const ASSIGNMENT: number;
    const ELLIPSIS: number;
    const RANGE_SEPARATOR: number;
    const L_VERSION_BRACKET: number;
    const R_VERSION_BRACKET: number;
    const L_BRACE: number;
    const R_BRACE: number;
    const COMMA: number;
    const PERIOD: number;
    const L_PAREN: number;
    const R_PAREN: number;
    const L_BRACKET: number;
    const R_BRACKET: number;
    const HYPHEN_MINUS: number;
    const COLON: number;
    const SEMICOLON_LITERAL: number;
    const AT: number;
    const PIPE: number;
    const EXCLAM: number;
    const AMP: number;
    const NUMBER_SIGN: number;
    const ABSENT_LITERAL: number;
    const ENCODED_LITERAL: number;
    const INTERSECTION_LITERAL: number;
    const SEQUENCE_LITERAL: number;
    const ABSTRACT_SYNTAX_LITERAL: number;
    const ENCODING_CONTROL_LITERAL: number;
    const ISO646String_LITERAL: number;
    const SET_LITERAL: number;
    const ALL_LITERAL: number;
    const END_LITERAL: number;
    const MAX_LITERAL: number;
    const SETTINGS_LITERAL: number;
    const APPLICATION_LITERAL: number;
    const ENUMERATED_LITERAL: number;
    const MIN_LITERAL: number;
    const SIZE_LITERAL: number;
    const AUTOMATIC_LITERAL: number;
    const EXCEPT_LITERAL: number;
    const MINUS_INFINITY_LITERAL: number;
    const STRING_LITERAL: number;
    const BEGIN_LITERAL: number;
    const EXPLICIT_LITERAL: number;
    const NOT_A_NUMBER_LITERAL: number;
    const SYNTAX_LITERAL: number;
    const BIT_LITERAL: number;
    const EXPORTS_LITERAL: number;
    const NULL_LITERAL: number;
    const T61String_LITERAL: number;
    const BMPString_LITERAL: number;
    const EXTENSIBILITY_LITERAL: number;
    const NumericString_LITERAL: number;
    const TAGS_LITERAL: number;
    const BOOLEAN_LITERAL: number;
    const EXTERNAL_LITERAL: number;
    const OBJECT_LITERAL: number;
    const TeletexString_LITERAL: number;
    const BY_LITERAL: number;
    const FALSE_LITERAL: number;
    const ObjectDescriptor_LITERAL: number;
    const TIME_LITERAL: number;
    const CHARACTER_LITERAL: number;
    const FROM_LITERAL: number;
    const OCTET_LITERAL: number;
    const TIME_OF_DAY_LITERAL: number;
    const CHOICE_LITERAL: number;
    const GeneralizedTime_LITERAL: number;
    const OF_LITERAL: number;
    const TRUE_LITERAL: number;
    const CLASS_LITERAL: number;
    const GeneralString_LITERAL: number;
    const OID_IRI_LITERAL: number;
    const TYPE_IDENTIFIER_LITERAL: number;
    const COMPONENT_LITERAL: number;
    const GraphicString_LITERAL: number;
    const OPTIONAL_LITERAL: number;
    const UNION_LITERAL: number;
    const COMPONENTS_LITERAL: number;
    const IA5String_LITERAL: number;
    const PATTERN_LITERAL: number;
    const UNIQUE_LITERAL: number;
    const CONSTRAINED_LITERAL: number;
    const IDENTIFIER_LITERAL: number;
    const PDV_LITERAL: number;
    const UNIVERSAL_LITERAL: number;
    const CONTAINING_LITERAL: number;
    const IMPLICIT_LITERAL: number;
    const PLUS_INFINITY_LITERAL: number;
    const UniversalString_LITERAL: number;
    const DATE_LITERAL: number;
    const IMPLIED_LITERAL: number;
    const PRESENT_LITERAL: number;
    const UTCTime_LITERAL: number;
    const DATE_TIME_LITERAL: number;
    const IMPORTS_LITERAL: number;
    const PrintableString_LITERAL: number;
    const UTF8String_LITERAL: number;
    const DEFAULT_LITERAL: number;
    const INCLUDES_LITERAL: number;
    const PRIVATE_LITERAL: number;
    const VideotexString_LITERAL: number;
    const DEFINITIONS_LITERAL: number;
    const INSTANCE_LITERAL: number;
    const REAL_LITERAL: number;
    const VisibleString_LITERAL: number;
    const DURATION_LITERAL: number;
    const INSTRUCTIONS_LITERAL: number;
    const RELATIVE_OID_LITERAL: number;
    const WITH_LITERAL: number;
    const EMBEDDED_LITERAL: number;
    const INTEGER_LITERAL: number;
    const RELATIVE_OID_IRI_LITERAL: number;
    const AS_LITERAL: number;
    const COMPLETED_LITERAL: number;
    const ENCODE_LITERAL: number;
    const ENCODE_DECODE_LITERAL: number;
    const ENCODER_LITERAL: number;
    const ENCODER_DECODER_LITERAL: number;
    const DECODE_LITERAL: number;
    const DECODER_LITERAL: number;
    const ENCODING_DEFINITIONS_LITERAL: number;
    const ENCODINGS_LITERAL: number;
    const IF_LITERAL: number;
    const LINK_DEFINITIONS_LITERAL: number;
    const PER_BASIC_UNALIGNED_LITERAL: number;
    const OUTER_LITERAL: number;
    const WS: number;
    const Tag: number;
    const Comment: number;
    const Word: number;
    const ObjectClassReference: number;
    const TypeReference: number;
    const IdentifierL: number;
    const Number: number;
    const Bstring: number;
}
export default grammar3rdLexer;
import antlr4 from "antlr4";
//# sourceMappingURL=grammar3rdLexer.d.ts.map