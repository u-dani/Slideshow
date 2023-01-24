
let slide1 = document.querySelector('.c-slide--slide1');
let inputs = document.querySelectorAll('.c-slider-nav__input');

const classe = 'c-slider-nav__input--';


inputs.forEach( input => {
    input.addEventListener('change', changeSlide);
})


function changeSlide({target}) {

    switch (target.id) {
        case "slide-1":
            slide1.style.marginLeft = "0%";
            break;
        
        case "slide-2":
            slide1.style.marginLeft = "-20%";
            break;

        case "slide-3":
            slide1.style.marginLeft = "-40%";
            break;

        case "slide-4":
            slide1.style.marginLeft = "-60%";
            break;

        case "slide-5":
            slide1.style.marginLeft = "-80%";
            break;
    }
}