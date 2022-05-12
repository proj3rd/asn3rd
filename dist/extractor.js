var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    return __awaiter(this, void 0, void 0, function* () {
        if (regExpSet1.start.test(text) && regExpSet1.end.test(text)) {
            return Promise.resolve(cloneRegExpSet(regExpSet1));
        }
        if (regExpSet2.start.test(text) && regExpSet2.end.test(text)) {
            return Promise.resolve(cloneRegExpSet(regExpSet2));
        }
        return Promise.reject(new Error("Seems text not containing start and/or end tokens for ASN.1 definition."));
    });
}
/**
 * Extract ASN.1 definition.
 * @param text Text containing ASN.1 definition and others.
 */
export function extract(text, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { excludeNonTagComment } = options;
        const regExpSet = yield selectRegExpSet(text);
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
        const joined = extractedList.join("\n");
        const result = !excludeNonTagComment
            ? joined
            : joined
                .replace(/--.*?--/g, "") // inline comment
                .replace(/^[ \t]*?--[ \t]*?.*$/gm, "") // whole line comment
                .replace(/--[ \t]*?((?!need|cond).)*?$/gim, ""); // need or cond tags
        return Promise.resolve(result);
    });
}
//# sourceMappingURL=extractor.js.map