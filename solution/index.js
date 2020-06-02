import Parser from "./cmds/parser.js";
import Exporter from "./cmds/exporter.js";
import Reader from "./cmds/reader.js";
import Help from "./cmds/help.js";

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
        const filePath = args[1];
        this.parser = new Parser(filePath);
        break;

      case "export":
        break;

      case "read":
        const data = this.parser ? this.parser.data : new Parser(args[1]).data;
        this.reader = new Reader(data);
        break;

      case "help":
        new Help(args);
        break;

      default:
        console.error(`"${cmd}" is not a valid command!`);
        break;
    }
  }
}

new Index();
