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
