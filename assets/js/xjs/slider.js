const sliderWrapper = document.querySelector(".slider-wrapper");
const slideContent = document.querySelectorAll(".slide");
const sliderImg = document.querySelector(".slimg");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const sliderContent = document.querySelector(".slider-main");

let counter = 0;
let interval;

next.addEventListener("click", NextButton);
prev.addEventListener("click", PrevButton);

function NextButton() {
  if (counter > slideContent.length - 1) {
    counter = 0;
  }
  Next();
  ClearInterval();
  createInterval();
  counter++;
}

function PrevButton() {
  counter--;
  if (counter < 0) {
    counter = slideContent.length - 1;
  }
  Prev();
  ClearInterval();
  createInterval();
}

function Next() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      sliderContent.style.transform = "translateX(0%)";
    } else {
      sliderContent.style.transform = "translateX(-50%)";
    }
  });
}

function Prev() {
  slideContent.forEach((item, index) => {
    if (index == counter) {
      sliderContent.style.transform = "translateX(-50%)";
    } else {
      sliderContent.style.transform = "translateX(0%)";
    }
  });
}

function createInterval() {
  interval = setInterval(NextButton, 4500);
}

function ClearInterval() {
  clearInterval(interval);
}


//----------------------------------------------------------------------------------------------------------------


const page2Slider = document.querySelector(".card-slide-wrapper");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");

next2.addEventListener("click", NextSlider);
prev2.addEventListener("click", PrevSlider);

let width = 0;
let btnCounter = 0;



function NextSlider() {
const sldierContent2 = document.querySelectorAll(".card");
if(width < 0) width = 0
  btnCounter++

  sldierContent2.forEach((item, index) => {
    if (btnCounter > sldierContent2.length -1 ) {
      btnCounter = 0;
    }
    if (btnCounter == index) {
      width += item.offsetWidth + 10;
      page2Slider.style.transform = "translateX(0%)";
    } else {
      page2Slider.style.transform = `translateX(-${width}px)`;
    }
  });
  buttonClose()
}

function PrevSlider() {
const sldierContent2 = document.querySelectorAll(".card");
if(width < 0) width = 0

  btnCounter--;
  sldierContent2.forEach((item, index) => {
    if (btnCounter <= 0 || width < 0) {
      btnCounter = 0;
      width = 0
    }
    if (btnCounter == index) {
      // console.log("btnCounter " + btnCounter);
      width -= item.offsetWidth + 10;
      page2Slider.style.transform = "translateX(0%)";
    } else {
      page2Slider.style.transform = `translateX(-${width}px)`;
    }
  });
  buttonClose()
}


function buttonClose(){
const sldierContent2 = document.querySelectorAll(".card");
if(btnCounter == 0){
    prev2.style.visibility = "hidden"
  }else{
    prev2.style.visibility = "visible"
  }

  if(btnCounter >= sldierContent2.length -3){
    next2.style.display = "none"
  }else{
    next2.style.display = "block"
  }
}


window.addEventListener("DOMContentLoaded", () => {
  createInterval();
 setInterval(() => {
  buttonClose()
 }, 200);
});
