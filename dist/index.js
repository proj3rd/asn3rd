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
const parser_1 = require("./parser");
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
        case ".doc":
        case ".docx":
            const extractor = new word_extractor_1.default();
            extractor
                .extract(path)
                .then((doc) => {
                const text = doc.getBody();
                extractAndWrite(text);
            })
                .catch((reason) => {
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
function commandValidate(path) {
    (0, fs_1.readFile)(path, { encoding: "utf8" }, (err, text) => {
        if (err) {
            throw err;
        }
        const [error] = (0, parser_1.parse)(text);
        if (error) {
            // Not necessary. Errors are printed to stderr by default
            // error.errors.forEach((e) => {
            //   const { line, column, msg } = e;
            //   process.stderr.write(`line ${line}:${column} ${msg}`);
            // });
            process.stderr.write('\n');
            process.stderr.write("❌ ASN.1 definition seems to have syntax errors.");
            process.exit(error.errors.length);
        }
        process.stdout.write("✅ ASN.1 definition looks well formed.\n");
        process.stdout.write("🤔 grammar3rd has some limitations. See https://github.com/proj3rd/grammar3rd#limitations");
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
    program
        .command("validate")
        .description("Validate ASN.1 definition from a file of a given path")
        .argument("<path>", "path of a file of ASN.1 definition")
        .action((path) => commandValidate(path));
    program.parse();
}
//# sourceMappingURL=index.js.map