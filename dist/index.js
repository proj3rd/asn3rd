#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
const commander_1 = require("commander");
const fs_1 = require("fs");
const path_1 = require("path");
const word_extractor_1 = __importDefault(require("word-extractor"));
const extractor_1 = require("./extractor");
Object.defineProperty(exports, "extract", { enumerable: true, get: function () { return extractor_1.extract; } });
function commandExtract(path) {
    function extractAndWrite(text) {
        const [error, extracted] = (0, extractor_1.extract)(text);
        if (error) {
            throw error;
        }
        process.stdout.write(extracted);
    }
    const { ext } = (0, path_1.parse)(path);
    switch (ext.toLocaleLowerCase()) {
        case '.doc':
        case '.docx':
            const extractor = new word_extractor_1.default();
            extractor.extract(path).then((doc) => {
                const text = doc.getBody();
                extractAndWrite(text);
            }).catch((reason) => {
                throw reason;
            });
            break;
        default:
            (0, fs_1.readFile)(path, { encoding: "utf8" }, (err, text) => {
                if (err) {
                    throw err;
                }
                extractAndWrite(text);
            });
    }
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