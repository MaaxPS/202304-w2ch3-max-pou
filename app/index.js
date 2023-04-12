const numbers = document.querySelectorAll(".num");
const deleteAll = document.querySelector(".deleteAll");
const deleteButton = document.querySelector(".delete");
const sqrt = document.querySelector(".sqrt");
const division = document.querySelector(".division");
const subtraction = document.querySelector(".substraction");
const addition = document.querySelector(".addition");
const product = document.querySelector(".product");
const decimanlPoint = document.querySelector(".decimalPoint");
const equal = document.querySelector(".equal");
const displayNumbers = document.querySelector(".displayNumbers");
let numbersSave = [];
let actualNumber = [];
let operator = [];
let result;
let lastEqual = false;
let isInfinite = false;

sqrt.addEventListener("click", () => {
  result = Math.sqrt(Number(actualNumber.join("")));
  displayNumbers.innerHTML = result;
  actualNumber = [];
  for (const value of result.toString()) {
    actualNumber.push(value);
  }

  lastEqual = true;
  numbersSave = [];
  operator = [];
});

deleteAll.addEventListener("click", () => {
  numbersSave = [];
  actualNumber = [];
  operator = [];
  displayNumbers.innerHTML = "&nbsp";
});

equal.addEventListener("click", () => {
  numbersSave.push(Number(actualNumber.join("")));
  actualNumber = [];
  result = numbersSave[0];
  for (let i = 0; i < operator.length; i++) {
    switch (operator[i]) {
      case "+":
        result += numbersSave[i + 1];
        break;
      case "-":
        result -= numbersSave[i + 1];
        break;
      case "*":
        result *= numbersSave[i + 1];
        break;
      case "/":
        result /= numbersSave[i + 1];
        break;
        default:
    }
  }

  if (!isFinite(result)) {
    displayNumbers.innerHTML = "Math Error";
    result = 0;
    isInfinite = true;
  } else if(isFinite(result)){
    displayNumbers.innerHTML = result;
    numbersSave = [];
    operator = [];
    actualNumber = [];
    for (const value of result.toString()) {
      actualNumber.push(value);
    }
  }

  lastEqual = true;
});

deleteButton.addEventListener("click", () => {
  actualNumber.pop();
  displayNumbers.innerHTML = displayNumbers.innerHTML.slice(
    0,
    displayNumbers.innerHTML.length - 1
  );
  if (displayNumbers.textContent === "") {
    displayNumbers.innerHTML = "&nbsp;";
  }
});

division.addEventListener("click", () => {
  if (isInfinite) {
    numbersSave = [];
    actualNumber = [];
    operator = [];
    displayNumbers.innerHTML = "&nbsp";
    isInfinite = false;
  } else {
    displayNumbers.innerHTML += "÷";
    numbersSave.push(Number(actualNumber.join("")));
    actualNumber = [];
    operator.push("/");
    lastEqual = false;
  }
});
product.addEventListener("click", () => {
  if (isInfinite) {
    numbersSave = [];
    actualNumber = [];
    operator = [];
    displayNumbers.innerHTML = "&nbsp";
    isInfinite = false;
  } else {
    displayNumbers.innerHTML += "×";
    numbersSave.push(Number(actualNumber.join("")));
    actualNumber = [];
    operator.push("*");
    lastEqual = false;
  }
});
addition.addEventListener("click", () => {
  if (isInfinite) {
    numbersSave = [];
    actualNumber = [];
    operator = [];
    displayNumbers.innerHTML = "&nbsp";
    isInfinite = false;
  } else {
    displayNumbers.innerHTML += "+";
    numbersSave.push(Number(actualNumber.join("")));
    actualNumber = [];
    operator.push("+");
    lastEqual = false;
  }
});
subtraction.addEventListener("click", () => {
  if (isInfinite) {
    numbersSave = [];
    actualNumber = [];
    operator = [];
    displayNumbers.innerHTML = "&nbsp";
    isInfinite = false;
  } else {
    displayNumbers.innerHTML += "-";
    numbersSave.push(Number(actualNumber.join("")));
    actualNumber = [];
    operator.push("-");
    lastEqual = false;
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (lastEqual) {
      numbersSave = [];
      actualNumber = [];
      operator = [];
      displayNumbers.innerHTML = "&nbsp";
      lastEqual = false;
    }

    displayNumbers.innerHTML += number.value;
    actualNumber.push(number.value);
  });
});

decimanlPoint.addEventListener("click", () => {
  if (!actualNumber.includes(".")) {
    actualNumber.push(".");
    displayNumbers.innerHTML += ".";
  }
});
