"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
const regExpSet1 = {
    start: /^--\s+?ASN1START.*?$/gm,
    end: /^--\s+?ASN1STOP.*?$/gm, // -- ASN1STOP
};
const regExpSet2 = {
    start: /^--\s+?\*+?.*?$/gm,
    end: /^\bEND\b.*?$/gm, // END (end of module definition)
};
/**
 * Clone {@link RegExpSet} set with resetting their `lastIndex` to 0.
 * @param regExpSet Source {@link RegExpSet} to be cloned.
 */
function cloneRegExpSet(regExpSet) {
    return {
        start: new RegExp(regExpSet.start),
        end: new RegExp(regExpSet.end),
    };
}
/**
 * Test text and select {@link RegExpSet} for extracting ASN.1 definition.
 * @param text Text to be tested.
 */
function selectRegExpSet(text) {
    if (regExpSet1.start.test(text) && regExpSet1.end.test(text)) {
        return [null, cloneRegExpSet(regExpSet1)];
    }
    if (regExpSet2.start.test(text) && regExpSet2.end.test(text)) {
        return [null, cloneRegExpSet(regExpSet2)];
    }
    return [
        Error("Seems text not containing start and/or end tokens for ASN.1 definition."),
        undefined,
    ];
}
/**
 * Extract ASN.1 definition.
 * @param text Text containing ASN.1 definition and others.
 */
function extract(text) {
    const [error, regExpSet] = selectRegExpSet(text);
    if (error) {
        return [error, undefined];
    }
    const { start, end } = regExpSet;
    const extractedList = [];
    while (true) {
        const resultStart = start.exec(text);
        if (!resultStart) {
            break;
        }
        end.lastIndex = resultStart.index + resultStart[0].length;
        const resultEnd = end.exec(text);
        if (!resultEnd) {
            console.warn("Seems text not containing end token after start token. Stop here.");
            break;
        }
        extractedList.push(text.substring(resultStart.index, resultEnd.index + resultEnd[0].length));
        start.lastIndex = resultEnd.index + resultEnd[0].length;
    }
    return [null, extractedList.join('\n')];
}
exports.extract = extract;
//# sourceMappingURL=extractor.js.map