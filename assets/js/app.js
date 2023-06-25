(function () {
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

  hamburgerButton.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
  });

  closeButton.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
  });

  const deepDropDown = document.querySelector(".ci2-drop-down");
  const deepDropDownMENU = document.querySelector(".deep-drop-down-menu");

  const dropWRAPPER = document.querySelector("#x");
  const deepWRAPPER = document.querySelector("#l");

  let counter = 0;

  dropWRAPPER.addEventListener("click", (e) => {
    counter++;
    
    if (!e.target.classList.contains("active")) {
      dropWRAPPER.classList.add("active");
    } else {
    }

    if (counter == 3) {
      dropWRAPPER.classList.remove("active");
      counter = 0
    }
  });

  deepWRAPPER.addEventListener("click", (e) => {
    if (!e.target.classList.contains("activex")) {
      deepWRAPPER.classList.add("activex");
    } else {
      deepWRAPPER.classList.remove("activex");
    }
  });
})();
