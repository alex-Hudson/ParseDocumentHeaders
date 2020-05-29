export default class Reader {
  constructor(data) {
    this.headers = this.readHeaders(data);
  }

  readHeaders(paragraphs) {
    const headers = [];
    paragraphs.forEach((paragraph) => {
      if (this.isHeader(paragraph.p_text)) headers.push(paragraph.p_text);
    });

    return headers;
  }

  /**
   *
   * @param {string} text
   */
  isHeader(text) {
    const textArray = text.split(" ");
    if (textArray.length > 15) return false;
    else {
      if (this.isMajorVersion(textArray)) return true;
      if (this.isAllCaps(textArray)) return true;
    }
  }

  /**
   * Checks if text array has one number at the start of the string (ie. 1 but not 1.2.3)
   * @param {Array} textArray
   */
  isMajorVersion(textArray) {
    if (parseInt(textArray[0]) && !parseInt(textArray[1])) return true;
    else return false;
  }

  /**
   * Returns true if all letters in the array are caps
   * @param {Array} textArray 
   */
  isAllCaps(textArray)
}
