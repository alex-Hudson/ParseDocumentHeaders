import * as path from "path";
import * as fs from "fs";

export default class Exporter {
  /**
   * Output data to filePath and fileName
   * @param {Object} data
   * @param {string} filePath
   * @param {string} fileName
   */
  constructor(data, filePath = null, fileName = null) {
    this.exportData(data, filePath, fileName);
  }

  /**
   * Output results to desired location with desired name as json
   * @param {Object} data headers data
   * @param {string} filePath path to desired output location
   * @param {string} fileName name of file or headers.json
   */
  exportData(data, filePath, fileName) {
    fileName = fileName || "headers.json";
    filePath = filePath || "";

    let baseDir = path.join(filePath || path.resolve(), fileName);
    fs.open(`${baseDir}`, "wx", (err, desc) => {
      if (!err && desc) {
        fs.writeFile(desc, JSON.stringify(data, null, 2), (err) => {
          if (err) throw err;
          console.log(`Results Received At ${baseDir}`);
        });
      } else {
        console.log(err.message);
      }
    });
  }
}
