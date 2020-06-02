export default class Reader {
  /**
   * Class filter passed paragraph data into headers
   * @param {Array.<Object>} data array of paragraph objects
   */
  constructor(data) {
    this.paragraphs = data;
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
   *
   * @param {string} text
   * @returns {boolean}
   */
  isHeader(text) {
    const textArray = text.split(" ");
    //longer than 15 words - unlikely to be title
    if (textArray.length > 15) return false;
    if (!this.containsLetters(text)) return false; //No letters in string
    if (this.isMajorVersion(textArray)) return true;
    if (this.isAllCaps(text) && this.isUnique(text)) return true;
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
   * @param {string} text
   */
  isAllCaps(text) {
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
    if (strings.length > 1) return false;
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
