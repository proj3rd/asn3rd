#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
const commander_1 = require("commander");
const fs_1 = require("fs");
const extractor_1 = require("./extractor");
Object.defineProperty(exports, "extract", { enumerable: true, get: function () { return extractor_1.extract; } });
function commandExtract(path) {
    (0, fs_1.readFile)(path, { encoding: "utf8" }, (err, data) => {
        if (err) {
            throw err;
        }
        const [error, extracted] = (0, extractor_1.extract)(data);
        if (error) {
            throw error;
        }
        process.stdout.write(extracted);
    });
}
if (require.main === module) {
    const program = new commander_1.Command();
    program.name("asn3rd").description("ASN.1 utilities by Project 3rd");
    program
        .command("extract")
        .description("Extract ASN.1 definition from a file of a given path")
        .argument("<path>", "path of a file containing ASN.1 definition")
        .action((path) => commandExtract(path));
    program.parse();
}
//# sourceMappingURL=index.js.map