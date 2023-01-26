
const containerSlides = document.querySelector('.js-container-slides')
const SliderNav = document.querySelector('.js-slider-nav');

const classSlide = 'c-slide';
const classLabel = 'c-slider-nav__label';
const classLabelFill = 'c-slider-nav__label--fill';
const classInput = 'c-slider-nav__input';

let labels;
let inputs;

let index = 0;
let functionInterval = () => {
    index++;
    if (index >= arrayNamesImagens.length) {
        index = 0;
    }
    changeSlide();
};
let timeInterval = 5000;
let interval = setInterval(functionInterval, timeInterval);

/* .jpg */
const arrayNamesImagens = [
    'floresta-rio',
    'gato-no-campo',
    'gato-preto',
    'gato-preto-andando',
    'macacos-cinzas',
    'montanhas-rio-floresta',
    'mulher-flores-brancas',
    'mulher-vestido-florido',
    'ovelha-filhote-na-grama',
    'pantera-cor-de-rosa'
];

containerSlides.style.width = arrayNamesImagens.length * 100 + "%";
const widthSlide = 100;


function loadSlides() {

    arrayNamesImagens.forEach( (name, index) => {
        createSlides( name, index );
        createSliderNav( index )
    });

    labels = document.querySelectorAll('.' + classLabel);
    inputs = document.querySelectorAll('.' + classInput);

    labels[0].classList.add(classLabelFill);
    inputs[0].setAttribute('checked', '');

    inputs.forEach( input => {
        input.addEventListener('change', checkIndex);
    });
}


function createSlides( name, index ) {

    let slide = document.createElement('div');
    slide.classList.add(classSlide);
    slide.setAttribute('data-slide', index)

    slide.style.width = widthSlide + "%";
    slide.style.backgroundImage = 'url("images/' + name + '.jpg")';

    containerSlides.appendChild(slide);
}


function createSliderNav( index ) {

    let label = document.createElement('label');
    label.classList.add(classLabel);
    label.setAttribute('for', 'slide-' + index);

    label.innerHTML = `<input type="radio" name="slider-nav" class=${classInput} id="slide-${index}" data-slide="${index}"/>`

    SliderNav.appendChild(label);
}


function changeSlide() {
    let left = (index * widthSlide);
    containerSlides.style.left = '-' + left + "%";

    labels.forEach( label => {
        label.classList.remove(classLabelFill);
    });

    inputs[index].parentNode.classList.add(classLabelFill);

}


function checkIndex({target}) {

    resetInterval();
    index = target.dataset.slide;
    changeSlide();
}


let resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(functionInterval, timeInterval)
}


window.onload = loadSlides();