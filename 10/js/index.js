var firstNameEl = document.getElementById('first-name');
var lastNameEl = document.getElementById('last-name');
var adressEl = document.getElementById('adress');
var citiesEl = document.getElementById('cities');
var hobbiesEl = document.getElementById('hobbies');
var imagesEl = document.getElementById('images');
var avatarEl = document.getElementById('avatar');

function values() {
    console.log(firstNameEl.className);
}
values();
firstNameEl.className = 'error-input';
values();
avatarEl.src = 'https://avatars.mds.yandex.net/get-zen-logos/1640044/pub_5e9944ccca463d28e140f9a6_5e9ad33f7c1cd903b7680ad7/xxh'