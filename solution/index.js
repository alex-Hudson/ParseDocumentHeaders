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
    const inputFilePath = args[1];
    const outputFilePath = args[2];
    const fileName = args[3];
    let data;

    switch (cmd) {
      case "import":
        this.runParse(inputFilePath);
        break;

      case "export":
        this.runExport(outputFilePath, fileName);
        break;

      case "read":
        if (this.parser) data = this.parser.data;
        else {
          this.runParse(inputFilePath);
          if (!this.parser) return;
          data = this.parser.data;
        }
        this.runRead(data);
        this.runExport(outputFilePath, fileName);
        break;

      case "help":
        new Help(args);
        break;

      default:
        console.error(`"${cmd}" is not a valid command!`);
        break;
    }
  }

  runParse(inputFilePath) {
    if (!inputFilePath) console.log("No file path detected - inport canceled");
    else this.parser = new Parser(inputFilePath);
  }

  runExport(outputFilePath, fileName) {
    if (this.reader.headers && this.reader.headers.length)
      new Exporter(this.reader.headers, outputFilePath, fileName);
    else if (this.reader.headers && !this.reader.headers.length)
      console.log("No headers detected in document - export canceled");
    else console.log("No data detected - export canceled");
  }

  runRead(data) {
    this.reader = new Reader(data);
  }
}

new Index();
