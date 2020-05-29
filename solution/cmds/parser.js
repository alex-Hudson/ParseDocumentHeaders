import * as path from "path";
import * as fs from "fs";

export default class Parser {
  constructor(args) {
    const filePath = args[1];
    const fileName = path.basename(filePath);
    console.log(`File name is ${fileName}`);
    try {
      const jsonPath = path.join(path.resolve(), "files", fileName);
      this.data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    } catch (e) {
      console.error(e);
    }
  }
}
