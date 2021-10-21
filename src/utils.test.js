import {
  getLastDigit,
  isLastDigitOperand,
  getLastNumber,
  calculate,
} from "./utils";

describe("getLastDigit", () => {
  it("return last digit and ignore space", () => {
    expect(getLastDigit("1 + ")).toBe("+");
    expect(getLastDigit("15 ")).toBe("5");
    expect(getLastDigit("158")).toBe("8");
  });
});

describe("isLastDigitOperand", () => {
  it("returns true if last digit is operand", () => {
    expect(isLastDigitOperand("1 + ")).toBe(true);
    expect(isLastDigitOperand("2 - ")).toBe(true);
    expect(isLastDigitOperand("9 * ")).toBe(true);
    expect(isLastDigitOperand("10 / ")).toBe(true);
  });
  it("returns false if last digit is not operand", () => {
    expect(isLastDigitOperand("10")).toBe(false);
    expect(isLastDigitOperand("11 ")).toBe(false);
  });
});

describe("getLastNumber", () => {
  it("returns last number", () => {
    const expression = "10 + 11";
    expect(getLastNumber(expression)).toBe("11");
  });
});

describe("calculate", () => {
  it("evaluates multi operand expressions and should follow the bodmas rule", () => {
    let expression = "2 + 3 + 3";
    let result = calculate(expression);
    expect(result).toBe("8");

    expression = "2 + 3 - 3";
    result = calculate(expression);
    expect(result).toBe("2");

    expression = "5 / 2 - 3";
    result = calculate(expression);
    expect(result).toBe("-0.5");

    expression = "1 + 2 * 2 / 3 - 2 * 3";
    result = calculate(expression);
    expect(result).toBe("-3.666666666666667");
  });

  it("supports decimal numbers", () => {
    let expression = "2 + 3 + 0.3";
    let result = calculate(expression);
    expect(result).toBe("5.3");

    expression = "2 + 3 + .3";
    result = calculate(expression);
    expect(result).toBe("5.3");

    expression = "1.1 + 2 * 2 / 3 - 2 * 0.3";
    result = calculate(expression);
    expect(result).toBe("1.8333333333333335");
  });
});
