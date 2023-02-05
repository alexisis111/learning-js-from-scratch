function getValue(id) {
    var el = document.getElementById(id);
    return el;
}

var firstNameId = 'first-name';
var lastNameId = 'last-name';

var value = getValue(firstNameId);

console.log(value);

var value1 = getValue(lastNameId);

console.log(value1);