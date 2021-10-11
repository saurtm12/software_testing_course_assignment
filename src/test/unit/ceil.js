import ceil from "../../ceil";

describe("ceil should round a number up to the given precision", () => {
  it("should round a numbẻ up to the nearest integer when no precision is given", () => {
    expect(ceil(3.1415)).toBe(4);
  });

  it("should round a number up correctly when a positive precision is given", () => {
    expect(ceil(3.1415, 1)).toBe(3.2);
    expect(ceil(3.1415, 2)).toBe(3.15);
  });

  it("should round a number up correctly when a negative precision is given", () => {
    expect(ceil(123456, -2)).toBe(123500);
  });
});