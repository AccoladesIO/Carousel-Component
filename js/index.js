const slider = document.querySelector('.slider-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const downButton = document.querySelector('.down-btn');
const upButton = document.querySelector('.up-btn');
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const slidesheight = slider.clientHeight
    console.log(slidesheight)
    if (direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }else if( direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * slidesheight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * slidesheight}px)`
}
