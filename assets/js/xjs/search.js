const searchBar = document.querySelector(".src");
const srcDisplay = document.querySelector(".search-display");
let srcCard = "";
let random = "";
let random2 = "";

searchBar.addEventListener("input", () => {
  srcDisplay.style.display = "block";
  let searchValues = searchBar.value.toLowerCase();
  if (searchValues === "" || searchValues === " ") {
    srcDisplay.innerHTML = `<span>Sonuc Blunamadi.</span>`;
  } else {
    const filteredData = userData.filter((item) => {
      random = item.headTexts.toLowerCase().includes(searchValues);
      random2 = item.user.toLowerCase().includes(searchValues);
      return random, random2;
    });
    filterShowResult(filteredData);
  }
});

function filterShowResult(result) {
  srcDisplay.innerHTML = "";
  if (result.length === 0) {
    srcDisplay.innerHTML = `<span>what you were looking for was not found please search for anything else.</span>`;
    return;
  }
  if (result.length >= 2) {
    srcDisplay.style.overflowY = "scroll";
  }

  result.forEach((card) => {
    srcCard = `
                <div class="shop-item-wrapper search" id="${card.id}">
                  <div class="left" style="background: url(${card.img}) no-repeat center/cover"></div>
                  <div class="right">
                    <h4 class="headtexts">${card.headTexts}</h4>
                    <div class="creator">${card.user}</div>
                    <div class="price">$${card.price}</div>
                  </div>
                </div>`;
    srcDisplay.innerHTML += srcCard;
  });
}

srcDisplay.addEventListener("mouseleave", () => {
  srcDisplay.style.display = "none";
});
