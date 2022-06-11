const { readFileSync, existsSync, writeFileSync } = require("fs");
const { resolve } = require("path");

if (require.main === module) {
  const grammarPath = process.argv[2];
  if (!grammarPath) {
    throw Error("Grammar path must be given.");
  }

  const grammar = readFileSync(grammarPath, "utf8");
  const parserRuleNames = extractParserRuleNames(grammar);

  const visitorDirPath = resolve(__dirname, "../src/visitors");
  parserRuleNames.forEach((parserRuleName) => {
    const visitorPath = resolve(visitorDirPath, `${parserRuleName}.ts`);
    if (existsSync(visitorPath)) {
      console.log(`Visitor for ${parserRuleName} already exists. Skip.`);
      return;
    }
    writeFileSync(visitorPath, "");
    console.log(`Empty visitor for ${parserRuleName} has been created.`);
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
