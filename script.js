"use strict";
// Select all slides
const slides = document.querySelectorAll(".gallery-item");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 10}px)`;
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  
    slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${360 * (indx - curSlide)}px)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${360 * (indx - curSlide)}px)`;
  });
});
