import Parser from "./cmds/parser.js";

const args = process.argv.slice(2);

let cmd = args[0] || "help";

if (args.version || args.v) {
  cmd = "version";
}

if (args.help || args.h) {
  cmd = "help";
}

switch (cmd) {
  case "import":
    const parser = new Parser(args);
    break;

  case "version":
    require("./cmds/version")(args);
    break;

  case "help":
    require("./cmds/help")(args);
    break;

  default:
    console.error(`"${cmd}" is not a valid command!`);
    break;
}
