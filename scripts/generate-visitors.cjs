const { readFileSync, existsSync, writeFileSync } = require("fs");
const { resolve } = require("path");

if (require.main === module) {
  const visitorSkeleton = (name) => `import { ${name}Context } from "../parser/asn1Parser";

/**
 * Grammar
 * \`\`\`
 * \`\`\`
 */
export class ${name}Visitor {
  public visitChildren(ctx: ${name}Context) {
  }
}
`;

  const toUpperFirst = (str) =>
    str.charAt(0).toLocaleUpperCase() + str.substring(1);

  const grammarPath = process.argv[2];
  if (!grammarPath) {
    throw Error("Grammar path must be given.");
  }

  const grammar = readFileSync(grammarPath, "utf8");
  const parserRuleNames = extractParserRuleNames(grammar);

  const visitorDirPath = resolve(__dirname, "../src/visitors");
  parserRuleNames.forEach((parserRuleName) => {
    const visitorPath = resolve(visitorDirPath, `${parserRuleName}Visitor.ts`);
    if (existsSync(visitorPath)) {
      const visitor = readFileSync(visitorPath, "utf8");
      if (visitor) {
        console.log(`Visitor for ${parserRuleName} already exists. Skip.`);
        return;
      }
    }
    writeFileSync(visitorPath, visitorSkeleton(toUpperFirst(parserRuleName)));
    console.log(`Visitor skeleton for ${parserRuleName} has been created.`);
  });
}

function extractParserRuleNames(grammar) {
  const regExpParserRuleDefinition = /^[a-z].*?:/gm;
  const matchResult = grammar
    .match(regExpParserRuleDefinition)
    .filter((item) => !item.includes(" "))
    .map((item) => item.replace(":", ""));
  return matchResult;
}
