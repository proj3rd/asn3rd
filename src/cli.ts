#!/usr/bin/env node

import { Command } from "commander";
import { readFile } from "fs";
import { parse } from "path";
import WordExtractor from "word-extractor";
import { extract } from "./extractor";
import { parse as parseAsn1 } from "./parser";

function commandExtract(path: string) {
  function extractAndWrite(text: string) {
    const [error, extracted] = extract(text);
    if (error) {
      throw error;
    }
    process.stdout.write(extracted);
  }

  const { ext } = parse(path);
  switch (ext.toLocaleLowerCase()) {
    case ".doc":
    case ".docx":
      const extractor = new WordExtractor();
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
      readFile(path, { encoding: "utf8" }, (err, text) => {
        if (err) {
          throw err;
        }
        extractAndWrite(text);
      });
  }
}

function commandValidate(path: string) {
  readFile(path, { encoding: "utf8" }, (err, text) => {
    if (err) {
      throw err;
    }
    const [error] = parseAsn1(text);
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
  });
}

if (require.main === module) {
  const program = new Command();
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
