const giftButton = document.querySelector(".gift__button");
const closeButton = document.querySelector(".close__button");

function openPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("show-popup");
  const card = document.querySelector(".card");
  card.style.display = "none";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show-popup");
  const card = document.querySelector(".card");
  card.style.display = "flex";
}

giftButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
