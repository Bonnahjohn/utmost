// inspired searching of the menu
const input = document.querySelector(".input");
input.addEventListener("input", (filter) => {
  filter = input.value.toLowerCase();
  const lists = document.querySelectorAll("li > button");

  lists.forEach((item) => {
    let word = item.textContent;
    if (word.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
//  sleep luxury read more button
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
const container = document.querySelector(".cover");
const btnMore = document.querySelector(".morebtn");
const moreText = document.querySelector(".more");
const dot = document.querySelector(".dot");
btnMore.addEventListener("click", () => {
  if (dot.style.display === "none") {
    dot.style.display = " inline";
    btnMore.innerHTML = "Read More";
    moreText.style.display = "none";
    container.style.height = "320px";
  } else {
    dot.style.display = "none";
    btnMore.innerHTML = "Read less";
    moreText.style.display = "inline";
    container.style.height = "420px";
  }
});

//  sleep luxury read more button
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
const containers = document.querySelector(".contain");
const buttonMore = document.querySelector(".showbtn");
const showMore = document.querySelector(".moretext");
const dots = document.querySelector(".dots");

buttonMore.addEventListener("click", () => {
  if (dots.style.display === "none") {
    dots.style.display = " inline";
    buttonMore.innerHTML = "Read More";
    showMore.style.display = "none";
    containers.style.height = "320px";
  } else {
    dots.style.display = "none";
    buttonMore.innerHTML = "Read less";
    showMore.style.display = "inline";
    containers.style.height = "420px";
  }
});

// gallery button\
const allBtn = document.getElementById("allBtn");
const allPara = document.querySelector(".allPara");

allBtn.addEventListener("click", () => {
  allPara.textContent = "Products page is not available  for now !!!!";
});

// footer
const year = document.getElementById("year");
let getDate = new Date();

year.innerHTML = getDate.getFullYear();

// carousel manipulation

const reviews = [
  {
    id: 1,
    Image: "assets/bed1.jpg",
    text: `I was for a perfect interior solution for my 
              new home. I'm using Furntick as my home interior  
              method and I will recomanded everyone who needs  a best house
              interior.`,
    person: "john Bonnah",
  },
  {
    id: 2,
    Image: "assets/bed3.jpg",
    text: `I was for a perfect interior solution for my 
              new home. I'm using Furntick as my home interior 
              method and I will recomanded everyone who needs  a best house
              interior.`,
    person: "john Bonnah poku",
  },
];

const Image = document.getElementById("imgs");
const info = document.getElementById("text");
const personal = document.getElementById("name");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// starting item number
let currentItem = 3;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(persons) {
  const item = reviews[persons];
  Image.src = item.Image;
  info.textContent = item.text;
  personal.textContent = item.person;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  console.log("forward");
  showPerson[currentItem];
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  console.log("back");
  showPerson[currentItem];
});
