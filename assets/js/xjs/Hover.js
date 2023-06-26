

// Define Pop up
const techHover = document.querySelector(".tech");
const techPop = document.querySelector(".pop2");
const buisnesHover = document.querySelector(".buisnes");
const buisnesPopUp = document.querySelector(".right-popUP");
const popupHover = document.querySelector(".category");
const openPopUp = document.querySelector(".category-display-pop-up");

// Right pop
techHover.addEventListener("mouseenter", () => {
  techPop.style.scale = "1";
  techPop.style.display = "block";
});
techHover.addEventListener("mouseleave", () => {
  techPop.style.scale = "0.95";
  techPop.style.display = "none";
});
techPop.addEventListener("mouseleave", () => {
  techPop.style.scale = "0.95";
  techPop.style.display = "none";
});

// left pop
buisnesHover.addEventListener("mouseenter", () => {
  buisnesPopUp.style.display = "block";
});
buisnesHover.addEventListener("mouseleave", () => {
  techPop.style.scale = "0.95";
  buisnesPopUp.style.display = "none";
});
buisnesPopUp.addEventListener("mouseleave", () => {
  techPop.style.scale = "0.95";
  buisnesPopUp.style.display = "none";
});

// Menu pop
popupHover.addEventListener("mouseenter", () => {
  openPopUp.style.display = "block";
});
popupHover.addEventListener("mouseleave", () => {
  techPop.style.scale = "0.95";
  openPopUp.style.display = "none";
});
openPopUp.addEventListener("mouseleave", () => {
  techPop.style.scale = "0.95";
  openPopUp.style.display = "none";
});
