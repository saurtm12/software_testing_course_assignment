import at from "../../at.js";

const testObject = { "a": [{ "b": { "c": 3 } }, 4] }

describe("at should return an array consists of testObjects corresponding to given paths", () => {
  it("should return values as expected in the given example", () => {
    const result = at(testObject, ["a[0].b.c", "a[1]"]);
    expect(result).toEqual([3,4]);
  });

  it("should return the object value", () => {
      const result = at(testObject, ["a[0].b"]);
      expect(result).toEqual([
          {"c" : 3}
      ]);
  });

  it("should return undefined testObjects with invalid paths", () => {
    const invalid_location = at(testObject, ["a[0].b.d.c", "a[4]"]);
    expect(invalid_location).toEqual([undefined, undefined]);

    const invalid_type = at(testObject, [3]);
    expect(invalid_type).toEqual([undefined]);
  });
});