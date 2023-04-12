let numbers = document.querySelectorAll(".num");
let deleteAll = document.querySelector(".deleteAll");
let deleteButton = document.querySelector(".delete");
let sqrt = document.querySelector(".sqrt");
let division = document.querySelector(".division");
let subtraction = document.querySelector(".substraction");
let addition = document.querySelector(".addition");
let product = document.querySelector(".product");
let decimanlPoint = document.querySelector(".decimalPoint");
let equal = document.querySelector(".equal");
let displayNumbers = document.querySelector(".displayNumbers");
let numbersSave = [],
  actualNumber = [],
  operator = [],
  result,
  lastEqual = false,
  isInfinite = false;

sqrt.addEventListener("click", () => {
  result = Math.sqrt(Number(actualNumber.join("")));
  displayNumbers.innerHTML = result;
  actualNumber = [];
  for (let i = 0; i < result.toString().length; i++) {
    actualNumber.push(result.toString()[i]);
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
    }
  }
  if (!isFinite(result)) {
    displayNumbers.innerHTML = "Math Error";
    result = 0;
    isInfinite = true;
  } else {
    displayNumbers.innerHTML = result;
    numbersSave = [];
    operator = [];
    actualNumber = [];
    for (let i = 0; i < result.toString().length; i++) {
      actualNumber.push(result.toString()[i]);
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
