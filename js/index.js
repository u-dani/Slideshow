
let slide1 = document.querySelector('.c-slide--slide1');
let inputs = document.querySelectorAll('.c-slider-nav__input');

let index = 1;
let functionInterval = () => {
    index++;
    if (index > 5) {
        index = 1;
    }
    changeSlide();
}
let timeInterval = 5000;
let interval = setInterval(functionInterval, timeInterval);


inputs.forEach( input => {
    input.addEventListener('change', checkIndex);
})


function changeSlide() {

    inputs.forEach( input => {
        input.parentNode.classList.remove('c-slider-nav__label--fill');
    });
    
    inputs[index - 1].parentNode.classList.add('c-slider-nav__label--fill');

    let margin = 20 * (index-1);
    slide1.style.marginLeft = "-" + margin +"%";
}


function checkIndex({target}) {

    resetInterval();
    const array = target.id.split("");
    const arrayReverse = array.reverse();
    index = arrayReverse[0];
    changeSlide();
}


let resetInterval = () => {

    console.log('reseto')
    clearInterval(interval);
    interval = setInterval(functionInterval, timeInterval)
}
