import upperFirst from "../../upperFirst";

describe("upperFirst should convert the first character of string to upper case", () => {

  it("should convert empty string", () => {
    const original = "";
    const text = upperFirst(original);
    expect(text).toBe("");
  });

  it("should convert strings in lowercase", () => {
    const original = "fred";
    const text = upperFirst(original);
    expect(text).toBe("Fred");
  })

  it("should convert strings in uppercase", () => {
    const original = "FRED";
    const text = upperFirst(original);
    expect(text).toBe("FRED");
  });
});