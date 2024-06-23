// script.js

// Задача 1
const strings = ["Всё в этом мире", "контролируется нами", "Большой Брат следит за вами"];
const stringsContainer = document.getElementById("strings-container");

strings.forEach(string => {
  const div = document.createElement("div");
  div.textContent = string;
  stringsContainer.appendChild(div);
});

// Задача 2
const text = document.getElementById("text");
const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", () => {
  text.style.color = "red";
});

// Задача 3
const cardsContainer = document.getElementById("cards-container");
const addCardButton = document.getElementById("add-card-button");
const imageUrl = "./img/skull.jpg";
const popupImageContainer = document.getElementById("popup-image-container");
const popupImageUrl2 ="./img/telegram.png";
const closePopupButton = document.getElementById("close-popup-button");

addCardButton.addEventListener("click", () => {
  const card = createCard("Елита МИРА", "ВРАГ человечества", imageUrl);
  cardsContainer.appendChild(card);
});

function createCard(title, text, imageUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardHeader = document.createElement("h3");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = title;
  cardDiv.appendChild(cardHeader);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-image");
  cardImage.src = imageUrl;
  cardDiv.appendChild(cardImage);

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = text;
  cardDiv.appendChild(cardText);

  return cardDiv;
}

// Всплывающая картинка
popupImageContainer.classList.add("hidden"); // Скрыть по умолчанию

closePopupButton.addEventListener("click", () => {
  popupImageContainer.classList.remove("show");
});


// Функция для отображения всплывающей картинки
function showPopupImage() {
  popupImageContainer.classList.add("show");
}

// Добавление события нажатия на фоновое изображение (по желанию)
document.getElementById("background-image").addEventListener("click", showPopupImage);

