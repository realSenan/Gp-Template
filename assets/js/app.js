// Scrolll Nav bar
window.addEventListener("scroll", ScrollSize);

function ScrollSize() {
  const header = document.querySelector(".header");
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "#020303d3";
  } else {
    header.style.backgroundColor = "transparent";
  }
}
ScrollSize();
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
  function OpenMenu() {
    menu.style.cssText = "transform : translateX(0) !important";
    menu.classList.add("active");
  }
  function CloseMenu() {
    menu.style.cssText = "transform : translateX(100%) !important";
    dropWRAPPER.classList.remove("active");
    menu.classList.remove("active");
  }

  if (widths <= 992) {
    hamburgerButton.addEventListener("click", OpenMenu);

    closeButton.addEventListener("click", CloseMenu);

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        CloseMenu();
      }
    });
  }

  document.addEventListener("touchmove", (e) => {
    const isInsideMenu = menu.contains(e.target);
    if (!isInsideMenu) {
      CloseMenu();
    }
  });
}
// responsive menu

// Menu bar active
const dropWRAPPER = document.querySelector("#x");
const deepWRAPPER = document.querySelector("#l");
const deepDropDownMenu = document.querySelector(".deep-drop-down-menu");

dropWRAPPER.addEventListener("click", (e) => {
  if (!e.target.classList.contains("active")) {
    dropWRAPPER.classList.toggle("active");
  }
});

deepWRAPPER.addEventListener("click", (e) => {
  e.stopPropagation();
  deepWRAPPER.classList.toggle("activex");
});

deepDropDownMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

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
      const portfolioContent = portfolio.querySelector("p").textContent.toLowerCase();

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

// Menu navbar active

const menuActive = document.querySelectorAll(".menu-list li a");

menuActive.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active"))
      menuActive.forEach((btn) => {
        if (btn.classList.contains("active")) {
          btn.classList.remove("active");
        }
      });

    item.classList.add("active");
    console.log(item);
  });
});

function setActiveNavLink() {
  const section = document.querySelectorAll("section");
  section.forEach((section) => {
    const id = section.getAttribute("id");

    menuActive.forEach((a) => {
      if (section.getBoundingClientRect().top <= 0) {
        if (a.getAttribute("href") == `#${id}`) {
          a.classList.add("active");
        } else {
          a.classList.remove("active");
        }
      }
    });
  });
}

window.addEventListener("scroll", setActiveNavLink);
window.addEventListener("touchmove", setActiveNavLink);
