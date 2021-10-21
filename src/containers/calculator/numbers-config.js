import { calculate, getLastNumber } from "../../utils";

const numberHandler = (expression, number) => {
  const lastNumber = getLastNumber(expression);

  if (lastNumber === "0" && number === "0") {
    return expression;
  } else if (lastNumber === "0") {
    return `${expression.substring(0, expression.length - 1)}${number}`;
  }

  return `${expression}${number}`;
};

const dotHandler = (expression) => {
  const hasDot = expression.includes(".");
  if (hasDot) {
    return expression;
  }

  return `${expression}.`;
};

const equalHandler = (expression) => {
  return calculate(expression);
};

export const NUMBERS = {
  7: {
    value: "7",
    handler: (expression) => numberHandler(expression, "7"),
  },
  8: {
    value: "8",
    handler: (expression) => numberHandler(expression, "8"),
  },
  9: {
    value: "9",
    handler: (expression) => numberHandler(expression, "9"),
  },
  4: {
    value: "4",
    handler: (expression) => numberHandler(expression, "4"),
  },
  5: {
    value: "5",
    handler: (expression) => numberHandler(expression, "5"),
  },
  6: {
    value: "6",
    handler: (expression) => numberHandler(expression, "6"),
  },
  1: {
    value: "1",
    handler: (expression) => numberHandler(expression, "1"),
  },
  2: {
    value: "2",
    handler: (expression) => numberHandler(expression, "2"),
  },
  3: {
    value: "3",
    handler: (expression) => numberHandler(expression, "3"),
  },
  0: {
    value: "0",
    handler: (expression) => numberHandler(expression, "0"),
  },
  ".": {
    value: ".",
    handler: dotHandler,
  },
  "=": {
    value: "=",
    handler: equalHandler,
    class: "equal",
  },
};
