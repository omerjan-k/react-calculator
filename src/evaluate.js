function evaluate(input) {
  const operators = ["+", "-", "/", "*"];

  function applyOperator(operator, a, b) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  }

  if (input[input.length - 2] === input[input.length - 1]) {
    input = input.slice(0, -1);
  }

  if (
    operators.includes(input[input.length - 2]) &&
    operators.includes(input[input.length - 1])
  ) {
    input = input.slice(0, -1);
  }

  if (input[input.length - 1] === "=" && input.length >= 3) {
    for (const operator of operators) {
      if (input.includes(operator)) {
        const [a, b] = input.slice(0, -1).split(operator).map(Number);
        const result = applyOperator(operator, a, b);
        return result.toString();
      }
    }
  }

  if (operators.includes(input[input.length - 1]) && input.length >= 4) {
    for (const operator of operators) {
      if (input.slice(0, -1).includes(operator)) {
        const [a, b] = input.slice(0, -1).split(operator).map(Number);
        const result = applyOperator(operator, a, b);
        return result.toString() + input[input.length - 1];
      }
    }
  }

  return input;
}

export default evaluate;
