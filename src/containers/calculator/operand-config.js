import { getLastDigit, isLastDigitOperand } from "../../utils";

const deleteHandler = (expression) => {
  const isOperand = isLastDigitOperand(expression);

  let newExpression;

  // because operand has two spaces around it
  if (isOperand) {
    newExpression = expression.substring(0, expression.length - 3);
  } else {
    newExpression = expression.substring(0, expression.length - 1);
  }

  return `${newExpression}`;
};
const operandHandler = (expression, operand) => {
  return `${expression} ${operand} `;
};

const subtractionHandler = (expression) => {
  const isFirstDigit = getLastDigit(expression) === undefined;
  if (isFirstDigit) {
    return "-";
  }
  return `${expression} - `;
};

export const OPERAND = {
  Del: { value: "Del", handler: deleteHandler },
  "/": {
    value: "/",
    handler: (expression) => operandHandler(expression, "/"),
    class: "operand",
  },
  "*": {
    value: "*",
    handler: (expression) => operandHandler(expression, "*"),
    class: "operand",
  },
  "-": { value: "-", handler: subtractionHandler, class: "operand" },
  "+": {
    value: "+",
    handler: (expression) => operandHandler(expression, "+"),
    class: "operand",
  },
};
