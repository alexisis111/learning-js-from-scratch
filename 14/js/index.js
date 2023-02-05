var operationButton = document.getElementsByClassName('operation-button');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);


    if (operationCode === '+') {
        result = number1 + number2;

    } else if (operationCode === '-') {
        result = number1 - number2;

    } else if (operationCode === '*') {
        result = number1 * number2;

    } else {
        result = number1 / number2;

    }
    alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}


for (var i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener('click', onOperationButtonClick);
}