import * as path from "path";
import * as fs from "fs";

export default class Parser {
  /**
   * Class to parse file from "files" folder
   * Data can then be acessed from the data object
   * @param {Array} filePath command line arguments containing the pa
   */
  constructor(filePath) {
    const fileName = path.basename(filePath);
    console.log(`File name is ${fileName}`);

    this.data = this.loadFile(filePath);
  }

  /**
   * Returns Parsed JSON data from file in "files" directory
   * @param {string} fileName
   */
  loadFile(filePath) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
}
