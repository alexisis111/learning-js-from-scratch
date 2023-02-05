function values(el) {
    console.log(el.value);
    console.log(el.className);
}

function findId(id) {
    document.getElementById(id);
}

var firstNameEl = document.getElementById('first-name');
values(firstNameEl);

var lastNameEl = document.getElementById('last-name');
values(lastNameEl);

var adressEl = document.getElementById('adress');
values(adressEl);