#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = JSON.parse(readFileSync(join(__dirname, "../../package.json"), "utf8"));
const version = packageJson.version;

const program = new Command();

program
  .name("mdforai")
  .description("A CLI tool for AI-related markdown processing")
  .version(version);

program
  .command("process")
  .description("Process markdown files for AI")
  .argument("<file>", "markdown file to process")
  .option("-o, --output <file>", "output file")
  .action((file, options) => {
    console.log(`Processing ${file}`);
    if (options.output) {
      console.log(`Output to ${options.output}`);
    }
  });

program
  .command("init")
  .description("Initialize mdforai configuration")
  .action(() => {
    console.log("Initializing mdforai configuration...");
  });

program.parse();
