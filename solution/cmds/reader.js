export default class Reader {
  /**
   * Class filter passed paragraph data into headers
   * @param {Array.<Object>} data array of paragraph objects
   */
  constructor(data) {
    this.paragraphs = data;
    if (!data) return;
    this.headers = this.readHeaders(data);
  }

  readHeaders(paragraphs) {
    const headers = [];
    paragraphs.forEach((paragraph) => {
      if (this.isHeader(paragraph.p_text)) headers.push(paragraph);
    });

    return headers;
  }

  /**
   * Returns true if string is header else
   * Conditions for being a header:
   * 1. not longer than 15 words
   * 2. contains letters
   * 3. Is a major version or is all caps and unique
   * @param {string} text
   * @returns {boolean}
   */
  isHeader(text) {
    const textArray = text.split(/[ ,.]+/);
    //longer than 15 words - unlikely to be title
    if (textArray.length > 15) return false;
    if (!this.containsLetters(text)) return false; //No letters in string

    if (this.isMajorVersion(textArray)) return true;
    else if (this.isMinorVersion(textArray)) return false;

    if (this.isAllCaps(text) && this.isUnique(text)) return true;
    else return false;
  }

  /**
   * Checks if text array has one number at the start of the string (ie. 1 but not 1.2.3)
   * @param {Array} textArray
   */
  isMajorVersion(textArray) {
    const hasInitialNumber = Number.isInteger(parseInt(textArray[0]));
    const hasNextNumber = Number.isInteger(parseInt(textArray[1]));
    if (hasInitialNumber && !hasNextNumber) return true;
    else return false;
  }

  /**
   * Checks if text array is a minor version (ie initial string has 1.1 ...)
   * @param {Array} textArray
   */
  isMinorVersion(textArray) {
    const hasInitialNumber = Number.isInteger(parseInt(textArray[0]));
    const hasNextNumber = Number.isInteger(parseInt(textArray[1]));
    if (hasInitialNumber && hasNextNumber) return true;
    else return false;
  }

  /**
   * Returns true if all letters in the array are caps
   * @param {string} text
   */
  isAllCaps(text) {
    if (typeof text !== "string") return false;
    return text === text.toUpperCase();
  }

  /**
   * Check if string is unique in this.paragraphs object
   * @param {string} text
   */
  isUnique(text) {
    const strings = Object.values(this.paragraphs).filter(
      (paragraph) => paragraph.p_text === text
    );
    if (strings.length >= 1) return false;
    else return true;
  }

  /**
   * Returns true if string contains letters returns false
   * If string contains only numbers
   * @param {string} text
   */
  containsLetters(text) {
    if (text.match(/[a-z]/i)) return true;
    else return false;
  }
}
