const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const path = join(__dirname, "../src/parser/grammar3rdLexer.js");

const source = readFileSync(path, 'utf8');
const updated = source.replace(/getCharPositionInLine\(\)/gm, 'this.charPositionInLine');

writeFileSync(path, updated, 'utf8');
