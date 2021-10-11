import divide from "../../divide";

describe("divide divides two numbers", () => {
  it("should divide correctly two numbers that result in a decimal", () => {
    expect(divide(6,4)).toBe(1.5);
  });

  it("should divide correctly two numbers that result in a integer", () => {
    expect(divide(8,4)).toBe(2);
  });

  it("should return the same number if divide by 1", () => {
    expect(divide(5,1)).toBe(5);
  });

  it("should return 1 if didide by the same number", () => {
    expect(divide(5,5)).toBe(1);
  });

  it("should not divide by 0", () => {
    expect(divide(2,0)).toBe(NaN);
  });

  it("should divide decimals correctly", () => {
    expect(divide(65.5, 10)).toBe(6.55);
  });
});