export function evaluate(input) {
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

  function getCalculatedResult() {
    let expr = input.slice(0, -1);

    let parts = expr.split(/([+\-*/])/g).map((part) => part.trim());
    console.log("parts:", parts);

    let result = Number(parts[0]);
    console.log("result:", result);
    for (let i = 1; i < parts.length; i += 2) {
      let operator = parts[i];
      console.log("operator:", operator);
      let operand = Number(parts[i + 1]);
      console.log("operand:", operand);
      result = applyOperator(operator, result, operand);
    }
    return result.toString();
  }

  if (input[0] === "*" || input[0] === "/") {
    input = input.slice(1, -1);
  }

  if (input[input.length - 2] === "." && input[input.length - 1] === ".") {
    input = input.slice(0, -1);
  }

  if (
    operators.includes(input[input.length - 2]) &&
    operators.includes(input[input.length - 1])
  ) {
    input = input.slice(0, -1);
  }

  // Evaluate expression if ends with "="
  if (input[input.length - 1] === "=" && input.length > 2) {
    return getCalculatedResult();
  }
  // Evaluate expression if ends with en operator in the operators
  if (operators.includes(input[input.length - 1]) && input.length > 2) {
    return getCalculatedResult() + input[input.length - 1];
  }

  return input;
}
