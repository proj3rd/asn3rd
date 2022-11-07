export type ExtractorOptions = {
  excludeNonTagComment?: boolean;
};

/**
 * - `start`: Regular expression for matching start token.
 * - `end`: Regular expression for matching end token.
 */
type RegExpSet = {
  start: RegExp;
  end: RegExp;
};

const regExpSet1: RegExpSet = {
  start: /^--\s+?ASN1START.*?$/gm, // -- ASN1START
  end: /^--\s+?ASN1STOP.*?$/gm, // -- ASN1STOP
};

const regExpSet2: RegExpSet = {
  start: /^--\s+?\*+?.*?$/gm, // -- *****
  end: /^\bEND\b.*?$/gm, // END (end of module definition)
};

/**
 * Clone {@link RegExpSet} set with resetting their `lastIndex` to 0.
 * @param regExpSet Source {@link RegExpSet} to be cloned.
 */
function cloneRegExpSet(regExpSet: RegExpSet): RegExpSet {
  return {
    start: new RegExp(regExpSet.start),
    end: new RegExp(regExpSet.end),
  };
}

/**
 * Test text and select {@link RegExpSet} for extracting ASN.1 definition.
 * @param text Text to be tested.
 */
async function selectRegExpSet(text: string): Promise<RegExpSet> {
  if (regExpSet1.start.test(text) && regExpSet1.end.test(text)) {
    return Promise.resolve(cloneRegExpSet(regExpSet1));
  }
  if (regExpSet2.start.test(text) && regExpSet2.end.test(text)) {
    return Promise.resolve(cloneRegExpSet(regExpSet2));
  }
  return Promise.reject(
    new Error(
      "Seems text not containing start and/or end tokens for ASN.1 definition."
    )
  );
}

/**
 * Extract ASN.1 definition.
 * @param text Text containing ASN.1 definition and others.
 */
export async function extract(
  text: string,
  options: ExtractorOptions = {}
): Promise<string> {
  const { excludeNonTagComment } = options;
  const regExpSet = await selectRegExpSet(text);
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
      console.warn(
        "Seems text not containing end token after start token. Stop here."
      );
      break;
    }

    extractedList.push(
      text.substring(resultStart.index, resultEnd.index + resultEnd[0].length)
    );

    start.lastIndex = resultEnd.index + resultEnd[0].length;
  }
  const joined = extractedList.join("\n").replace(/\uD63B/g, " ");
  const result = !excludeNonTagComment
    ? joined
    : joined
        .replace(/--.*?--/g, "") // inline comment
        .replace(/^[ \t]*?--[ \t]*?.*$/gm, "") // whole line comment
        .replace(/--[ \t]*?((?!need|cond).)*?$/gim, ""); // need or cond tags
  return Promise.resolve(result);
}
