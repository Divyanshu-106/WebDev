function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

function calculate(operator, num1, num2) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Error";
  }
  return result;
}

let currentInput = "0";
let previousInput = "";
let currentOperator = null;
const displayElement = document.getElementById("display");

function updateDisplay() {
  displayElement.innerText = currentInput;
}

function appendNumber(number) {
  if (currentInput === "0" || currentInput === "Error") {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function setOperator(operator) {
  if (currentOperator !== null) {
    calculateResult();
  }
  previousInput = currentInput;
  currentInput = "0";
  currentOperator = operator;
}

function calculateResult() {
  if (currentOperator === null || previousInput === "") return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  const result = calculate(currentOperator, num1, num2);

  currentInput = result.toString();
  currentOperator = null;
  previousInput = "";

  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  previousInput = "";
  currentOperator = null;
  updateDisplay();
}
