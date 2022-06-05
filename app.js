'use strict';

const images = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;
nextBtn.addEventListener('click', () => {
    counter++;
    if(counter >= images.length){
        counter = 0;
    }
    images.forEach(image => {
        image.classList.remove("active");
    });
    images[counter].classList.add("active");
});

prevBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = images.length - 1;
    }
    images.forEach(image => {
        image.classList.remove("active");
    });
    images[counter].classList.add("active");
});

