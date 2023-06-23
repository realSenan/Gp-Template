(function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.document.documentElement.scrollTop > 100) {
      header.style.backgroundColor = "#020303d3";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
})();
