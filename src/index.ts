#!/usr/bin/env node

import { Command } from "commander";
import { readFile } from "fs";
import { extract } from "./extractor";

export { extract };

function commandExtract(path: string) {
  readFile(path, { encoding: "utf8" }, (err, data) => {
    if (err) {
      throw err;
    }
    const [error, extracted] = extract(data);
    if (error) {
      throw error;
    }
    process.stdout.write(extracted);
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

  program.parse();
}
