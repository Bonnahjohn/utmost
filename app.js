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
