let Filterdatas = [
  {
    id: "python",
    "head text": "Expand your career opportunities with Python",
    "paragraph text":
      "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
    "button text": "Python",
  },
  {
    id: "excel",
    "head text": "Analyze and visualize data with Excel",
    "paragraph text":
      "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
    "button text": "Excel",
  },
  {
    id: "webdev",
    "head text": "Build websites and applications with Web Development",
    "paragraph text":
      "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
    "button text": "Web Development",
  },
  {
    id: "js",
    "head text": "Grow your software development skills with JavaScript",
    "paragraph text":
      "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS.",
    "button text": "JavaScript",
  },
  {
    id: "data",
    "head text": "Lead data-driven decisions with Data Science",
    "paragraph text":
      "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics.",
    "button text": "Data Sience",
  },
  {
    id: "amazon",
    "head text": "Become an expert in cloud computing with AWS Certification",
    "paragraph text":
      "Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more you can earn. Anyone can learn AWS skills, and with AWS online training, you can move at your own pace.",
    "button text": "Amazon AWS",
  },
  {
    id: "draw",
    "head text": "Expand your creative skillset with Drawing",
    "paragraph text":
      "Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going.",
    "button text": "Drawing",
  },
];

const headTEXT = document.querySelector(".headtext");
const parTEXT = document.querySelector(".ptext");
const buttTEXT = document.querySelector(".atext");
const button = document.querySelectorAll(".filter-wrapper button");

button.forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    // !
    clickedBUTTON = buttons;

    if (!clickedBUTTON.classList.contains("text-active")) {
      button.forEach((btn) => {
        btn.classList.remove("text-active");
      });
    }

    buttons.classList.add("text-active");
    filterCategory();

    if (buttons.id == Filterdatas[index].id) {
      headTEXT.innerHTML = Filterdatas[index]["head text"];
      parTEXT.innerHTML = Filterdatas[index]["paragraph text"];
      buttTEXT.innerHTML = "Explore " + Filterdatas[index]["button text"];
    }
    
    width = 0
    btnCounter = 0;
    page2Slider.style.transform = "translateX(0%)";
    UI.addToShopCart()
  });
});

function filterCategory() {
  page2Slider.innerHTML = "";

  userData.forEach((item, index) => {
    if (clickedBUTTON.id === item.category) {
      if (item.bestseller == true) {
        code = `
        <div class="card shopcart ${item.category}" id="${item.id}">
        <div class="img-border">
        <div class="bgimg" style="background: url(${item.img}) no-repeat center/cover"></div>
        </div>
        <div class="text-section">
          <h4 class="headtexts">
            ${item.headTexts}
            </h4>
            <div class="creator">${item.user}</div>
            <div class="score">
            <span class="rating">${item.rating}</span>
            <div class="star-wrapper">
              ${item.starImg}
            </div>
            <div class="nmbr-of-people">${item.peopleNumber}</div>
          </div>
          <div class="price">$${item.price}</div>
          <div class="best">Bestseller</div>
        </div>
      </div>
      `;
        page2Sliderr.innerHTML += code;
      } else {
        code = `
        <div class="card shopcart ${item.category}" id="${item.id}"> 
        <div class="img-border">
          <div class="bgimg" style="background: url(${item.img}) no-repeat center/cover"></div>
        </div>
        <div class="text-section">
          <h4 class="headtexts">
            ${item.headTexts}
          </h4>
          <div class="creator">${item.user}</div>
          <div class="score">
            <span class="rating">${item.rating}</span>
            <div class="star-wrapper">
              ${item.starImg}
            </div>
            <div class="nmbr-of-people">${item.peopleNumber}</div>
          </div>
          <div class="price">$${item.price}</div>
        </div>
      </div>
      `;
        page2Sliderr.innerHTML += code;
      }
    }
  });
}
