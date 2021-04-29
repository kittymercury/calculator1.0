let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let clearButton = document.querySelector('.clear');
let resultButton = document.querySelector('.result');
let calculationArea = '';

if (typeof window.orientation !== 'undefined') {
  let body = document.querySelector('body');
  body.classList.add('is-mobile');
}

for (let number of numbers) {
  number.onclick = function () {
    calculationArea += number.textContent;
    display.textContent = calculationArea;
  }
};

for (let operator of operators) {
  operator.onclick = function () {
    calculationArea += operator.textContent;
    display.textContent = calculationArea;
  }
};

clearButton.onclick = function() {
  calculationArea = '';
  display.textContent = calculationArea;
};

resultButton.onclick = function () {
  let functionBody = 'return ' + calculationArea;
  let executeFunctionBody = new Function(functionBody);
  let result = executeFunctionBody();
  display.textContent = result;
  calculationArea = '';
}
