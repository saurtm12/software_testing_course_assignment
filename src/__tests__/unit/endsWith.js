import endsWith from "../../endsWith";

describe("endsWith checks if the string ends with the target string", () => {
  it("should return true that Pizza ends with a", () => {
    expect(endsWith("Pizza", "a")).toBe(true);
  });

  it("should return true that Pizza ends with za", () => {
    expect(endsWith("Pizza", "za")).toBe(true);
  });

  it("should return false that Pizza ends with e", () => {
    expect(endsWith("Pizza", "e")).toBe(false);
  });

  it("should return true that Pizza ends with i at index 2", () => {
    expect(endsWith("Pizza", "i", 2)).toBe(true);
  });

  it("should automatically correct the position index to 0 if the given value is negative", () => {
    expect(endsWith("Pizza", "a", -5)).toBe(false);
    expect(endsWith("Pizza", "P", -5)).toBe(false);
    expect(endsWith("Pizza", "", -5)).toBe(true);
  });

  it("should automatically correct the position index to the string length if the given value is larger than the length", () => {
    expect(endsWith("Pizza", "P", 50)).toBe(false);
  });

  it("should return true with position > length of match string with test string is empty", () => {
    expect(endsWith("Pizza", "", 6)).toBe(true);
    expect(endsWith("Pizza", "", 100)).toBe(true);
  });
});