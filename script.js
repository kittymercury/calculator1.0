let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let clearButton = document.querySelector('.clear');
let resultButton = document.querySelector('.result');
let calculationArea = '';
let resultGiven = false;
let operatorSymbols = ['+', '-', '/', '*'];

if (typeof window.orientation !== 'undefined') {
  let body = document.querySelector('body');
  body.classList.add('is-mobile');
}

for (let number of numbers) {
  number.onclick = function () {
    let input = number.textContent;
    if (input === '0' && calculationArea === '0') {
      return;
    }
    if (calculationArea === '' && input === '.') {
      return;
    }
    if (calculationArea.includes('.') && input === '.') {
      return;
    }
    if (resultGiven) {
      calculationArea = '';
      resultGiven = false;
    }
    calculationArea += input;
    display.textContent = calculationArea;
  }
};

for (let operator of operators) {
  operator.onclick = function () {
    let input = operator.textContent;
    if (calculationArea === '') {
      return;
    }
    if (resultGiven) {
      resultGiven = false;
    }

    if (operatorSymbols.some((symbol) => calculationArea.endsWith(symbol))) {
      return;
    }
    calculationArea += input;
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
  calculationArea = result.toString();
  resultGiven = true;
}
