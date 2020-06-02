import Reader from "../solution/cmds/reader";

describe("Reader", () => {
  const paragraphs = [{ p_text: "abc" }, { p_text: "test text" }];
  const reader = new Reader(paragraphs);

  //Test Reader
  test("Has the correct constructor name", () => {
    expect(reader.constructor.name).toBe("Reader");
  });

  test("Differentiates between major and minor versions", () => {
    const input = [["1", "2"], ["1", "a"], ["0"]];
    expect(reader.isMajorVersion(input[0])).toBe(false);
    expect(reader.isMajorVersion(input[1])).toBe(true);
    expect(reader.isMajorVersion(input[2])).toBe(true);
  });

  test("Checks For All Caps", () => {
    const input = ["abcdefg", "ABCDEFG", "AbCdEf", "0123", "!", 1];
    expect(reader.isAllCaps(input[0])).toBe(false);
    expect(reader.isAllCaps(input[1])).toBe(true);
    expect(reader.isAllCaps(input[2])).toBe(false);
    expect(reader.isAllCaps(input[3])).toBe(true);
    expect(reader.isAllCaps(input[4])).toBe(true);
    expect(reader.isAllCaps(input[5])).toBe(false);
  });

  test("Works Out If String is Unique", () => {
    expect(reader.isUnique("abc")).toBe(false);
    expect(reader.isUnique("abcd")).toBe(true);
    expect(reader.isUnique("a")).toBe(true);
  });

  test("Checks for String Containing Letters", () => {
    expect(reader.containsLetters("abc")).toBe(true);
    expect(reader.containsLetters("abc123")).toBe(true);
    expect(reader.containsLetters("a1bc")).toBe(true);
    expect(reader.containsLetters("123")).toBe(false);
    expect(reader.containsLetters("!£$%")).toBe(false);
    expect(reader.containsLetters(";'@")).toBe(false);
  });

  test("Gets Headers Correctly", () => {
    expect(reader.isHeader("1. abc")).toBe(true);
    expect(reader.isHeader("1. Major version")).toBe(true);
    expect(reader.isHeader("1.1 abc")).toBe(false);
    expect(reader.isHeader("HEADER")).toBe(true);
    expect(reader.isHeader("1.1.1 NOT A HEADER")).toBe(false);
    expect(
      reader.isHeader(
        "I'm a really very long string - so I'm probably a paragraph. Therefore you should not think that I'm a header - that would be silly"
      )
    ).toBe(false);
    expect(reader.isHeader("abc")).toBe(false); //non unique
  });

  test("Reads Headers", () => {
    expect(
      reader.readHeaders([{ p_text: "ABC" }, { p_text: "test text" }])
    ).toStrictEqual([{ p_text: "ABC" }]);
  });
});
