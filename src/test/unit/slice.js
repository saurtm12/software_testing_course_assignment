import slice from "../../slice";

describe("slice should creates a slice of array from start up to, but not including end", () => {
  it("should return correctly with an array, a positive start and end position ", () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 1, 3);
    expect(result).toEqual([2, 3]);
  });

  it("should return correctly with an array, a negative start and end position ", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const result = slice(array, -5, -2);
    expect(result).toEqual([3, 4, 5]);
  });

  it("should return correctly with an array, a positive start and negative end position ", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const result = slice(array, 2, -2);
    expect(result).toEqual([3, 4, 5]);
  });
 
  it("should return correctly with an array, a positive start and without end position ", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const result = slice(array, 4);
    expect(result).toEqual([5, 6, 7]);
  });

  it("should return correctly with an null array", () => {
    const array = [];
    const result = slice(array, 2);
    expect(result).toEqual([]);
  });

  it("should return correctly with a start position greater than end position", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = slice(array, 5, 3);
    expect(result).toEqual([]);
  });

  it("should return correctly with a negative start position greater than negative end position", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = slice(array, -3, -5);
    expect(result).toEqual([]);
  });
});