import Parser from "./cmds/parser.js";
import Reader from "./cmds/reader.js";

export default class Index {
  constructor() {
    const args = process.argv.slice(2);

    let cmd = args[0] || "help";

    if (args.version || args.v) {
      cmd = "version";
    }

    if (args.help || args.h) {
      cmd = "help";
    }

    this.runCommand(cmd, args);
  }

  runCommand(cmd, args) {
    switch (cmd) {
      case "import":
        const fileName = args[1];
        this.parser = new Parser(fileName);
        break;

      case "export":
        break;

      case "read":
        const data = this.parser ? this.parser.data : new Parser(args[1]).data;
        this.reader = new Reader(data);
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
  }
}

new Index();
