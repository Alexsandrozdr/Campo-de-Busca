const filterElementByTheLetter = document.querySelector("header input");
const cards = document.querySelectorAll("#cards li");

filterElementByTheLetter.addEventListener("input", filterCards);

function filterCards() {
  if (filterElementByTheLetter.value != "") {
    for (let card of cards) {
      let title = card.querySelector("h2");
      title = title.textContent.toLowerCase();

      let filterText = filterElementByTheLetter.value.toLowerCase();

      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}
