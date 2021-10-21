export const getLastDigit = (expression) => {
  const expressionWithOutSpace = expression.trim();
  const lastDigit = expressionWithOutSpace[expressionWithOutSpace.length - 1];
  return lastDigit;
};

export const isLastDigitOperand = (expression) => {
  const lastDigit = getLastDigit(expression);

  return (
    lastDigit === "-" ||
    lastDigit === "*" ||
    lastDigit === "/" ||
    lastDigit === "+"
  );
};

export const getLastNumber = (expression) => {
  const lastNumber = expression.trim().split(" ").pop();
  return lastNumber;
};

/**
 *
 * @param {string} expression
 * @returns {string} result | error
 *
 * time complexity: O(n)
 */
export const calculate = (expression) => {
  const terms = expression.split(" ");

  const evaluateExpression = (position, type) => {
    const leftTerm = parseFloat(terms[position - 1]);
    const rightTerm = parseFloat(terms[position + 1]);
    let value;

    if (type === "*") {
      value = leftTerm * rightTerm;
    } else if (type === "/") {
      value = leftTerm / rightTerm;
    }

    terms.splice(position - 1, 3, value);
  };

  // handle Multiply and Division
  for (let i = 0; i < terms.length; i++) {
    if (terms[i] === "*") {
      evaluateExpression(i, "*");

      // adjust pointer position
      i--;
    } else if (terms[i] === "/") {
      evaluateExpression(i, "/");

      // adjust pointer position
      i--;
    }
  }

  let result = parseFloat(terms[0]);

  // handle addition and subtraction
  for (let i = 1; i < terms.length; i = i + 2) {
    if (terms[i] === "-") {
      result -= parseFloat(terms[i + 1]);
    } else if (terms[i] === "+") {
      result += parseFloat(terms[i + 1]);
    }
  }

  if (result.toString() === "NaN") {
    return "Invalid expression";
  }

  return result.toString();
};
