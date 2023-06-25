window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (this.document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = "#020303d3";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const closeButton = document.querySelector(".close");
const hamburgerButton = document.querySelector(".bars");
const menu = document.querySelector(".center");

let counter = 0;
let widths = 0;
window.addEventListener("resize", callResize);

function callResize() {
  widths = window.innerWidth;
  CalculateWidth();
}

CalculateWidth();
callResize();

function CalculateWidth() {
  if (widths <= 992) {
    hamburgerButton.addEventListener("click", (e) => {
      menu.style.transform = "translateX(0) ";
    });

    closeButton.addEventListener("click", (e) => {
      menu.style.transform = "translateX(100%)";
    });

    document.addEventListener("click", function (event) {
      if (
        !menu.contains(event.target) &&
        !hamburgerButton.contains(event.target)
      ) {
        menu.style.transform = "translateX(100%)";
      }
    });
  } else {
    menu.style.transform = "translateX(0)";
  }
}

const dropWRAPPER = document.querySelector("#x");
const deepWRAPPER = document.querySelector("#l");

dropWRAPPER.addEventListener("click", (e) => {
  counter++;

  if (!e.target.classList.contains("active")) {
    dropWRAPPER.classList.add("active");
  }
  if (counter == 4) {
    dropWRAPPER.classList.remove("active");
    CheckActive();
    counter = 0;
  }
});

deepWRAPPER.addEventListener("click", () => {
  deepWRAPPER.classList.add("activex");
});

function CheckActive() {
  if (!dropWRAPPER.classList.contains("active")) {
    deepWRAPPER.classList.remove("activex");
  }
}
