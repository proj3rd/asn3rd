const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const path = join(__dirname, "../src/parser/asn1Parser.js");

const source = readFileSync(path, 'utf8');
const updated = source.replace(/^class ModuleDefinitionsContext/gm, 'export class ModuleDefinitionsContext');

writeFileSync(path, updated, 'utf8');
