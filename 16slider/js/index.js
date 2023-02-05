//find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var sliderImg = document.getElementById('slider-img');

//subscribes to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create images array
var imagesUrls = [];
imagesUrls.push('https://ykl-res.azureedge.net/847b934b-1010-4cf2-8a92-2fd71d692fcb/photomedium.jpg');
imagesUrls.push('https://wallpaperpure.net/wp-content/uploads/2018/07/3da62077430f43ae3bf54009b32a4a33-350x250.jpeg');
imagesUrls.push('http://www.fonstola.ru/mini/201308/105039.jpg');
imagesUrls.push('https://cache.desktopnexus.com/thumbseg/2272/2272138-bigthumbnail.jpg');

//changes src's images
var currentImageIndex = 0;
sliderImg.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;


//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    sliderImg.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;


    //disable next button if need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    sliderImg.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    //disable next button if need
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}