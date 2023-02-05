function addErrorClass(id) {
    var el = document.getElementById(id);
    el.className = 'error-input';
}

function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('adress');
}

//setTimeout(addErrorClassToAllInputs, 3000);

var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', onFirstNameKeydown);

function onFirstNameKeydown() {
    addErrorClass('first-name');
}

var firstNameEl = document.getElementById('first-name');

firstNameEl.addEventListener('keydown', onFirstNameKeydown);