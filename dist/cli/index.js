#!/usr/bin/env node
import { program } from "commander";
import add from "./commands/add.js";
import addAll from "./commands/addAll.js";
import update from "./commands/update.js";
import init from "./commands/init.js";
export * from "@pankaj.koree/";
program
    .name("pk-ui")
    .description("CLI component created by pankajkoree")
    .version("1.0.0");
program
    .command("add <component>")
    .option("--ts", "Install TypeScript version")
    .option("--js", "Install JavaScript version")
    .action(add);
program.command("add-all").option("--ts").option("--js").action(addAll);
program
    .command("update <component>")
    .option("--ts")
    .option("--js")
    .action(update);
program
    .command("init")
    .description("Setup Tailwind and folder structure")
    .action(init);
program.parse();
