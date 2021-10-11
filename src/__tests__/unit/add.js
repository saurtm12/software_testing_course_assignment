import add from "../../add.js";

describe("add should sum two numbers", () => {
  it("should sum two positive integer", () => {
    const sum = add(2, 4);
    expect(sum).toBe(6);
  });

  it("should sum two negative integer", () => {
    const sum = add(-7, -1);
    expect(sum).toBe(-8);
  });

  it("should sum both negative and positive integers", () => {
    const sum = add(-6, 4);
    expect(sum).toBe(2);
  });

  it("sum of a number and zero is the number itself", () => {
    const sum = add(2, 0);
    expect(sum).toBe(2);
  });

  it("should sum decimals", () => {
    const sum = add(4.5, -3.2);
    expect(sum).toBe(1.3);
  });
});