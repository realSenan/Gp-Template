// Scrolll
window.addEventListener("scroll",ScrollSize );

function ScrollSize() {
  const toUP = this.document.querySelector(".up-to-top");
  const header = document.querySelector(".header");
  if (this.document.documentElement.scrollTop > 100) {
    toUP.style.display = "flex";
    header.style.backgroundColor = "#020303d3";
  } else {
    header.style.backgroundColor = "transparent";
    toUP.style.display = "none";
  }
}
ScrollSize()
// Scrolll

// responsive menu
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

callResize();
CalculateWidth();

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
// responsive menu

// Menu bar active
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
// Menu bar active

const portfolioItem = document.querySelectorAll(".portfolio-item");
const portfolioWrapper = document.querySelectorAll(".portfolio-wrapper");
const buttons = document.querySelectorAll(".portfolio-flters li");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonContent = e.target.textContent.toLowerCase();

    if (!button.classList.contains("active")) {
      buttons.forEach((btn) => {
        if (btn.classList.contains("active")) {
          btn.classList.remove("active");
        }
      });
    }

    button.classList.add("active");

    portfolioItem.forEach((portfolio) => {
      const portfolioContent = portfolio
        .querySelector("p")
        .textContent.toLowerCase();

      if (buttonContent == "all") {
        portfolio.style.display = "flex";
      } else {
        if (buttonContent == portfolioContent) {
          portfolio.style.display = "flex";
        } else {
          portfolio.style.display = "none";
        }
      }
    });
  });
});
