/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const VALUECARD = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const FIGURECARD = ["♦", "♥", "♠", "♣"];
  const FIGURECARDUP = document.querySelector(".figureUp");
  const VALUECARDSELECTOR = document.querySelector(".value");
  const FIGURECARDDWN = document.querySelector(".figureDwn");
  let randomBtn = document.getElementById("btnRandom");
  let timeStartBtn = document.getElementById("timeStartBtn");
  const CARD = document.getElementById("card");
  let heigth = document.getElementById("heigth");
  let width = document.getElementById("width");

  function randomElementArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function cardConstructor(valueCard, figureCard) {
    FIGURECARDUP.textContent = `${figureCard}`;
    VALUECARDSELECTOR.textContent = `${valueCard}`;
    FIGURECARDDWN.textContent = `${figureCard}`;
    if (figureCard === "♦" || figureCard === "♥") {
      FIGURECARDUP.classList.add("text-danger");
      FIGURECARDDWN.classList.add("text-danger");
      FIGURECARDUP.classList.remove("text-black");
      FIGURECARDDWN.classList.remove("text-black");
    }
    if (figureCard === "♠" || figureCard === "♣") {
      FIGURECARDUP.classList.add("text-black");
      FIGURECARDDWN.classList.add("text-black");
      FIGURECARDUP.classList.remove("text-danger");
      FIGURECARDDWN.classList.remove("text-danger");
    }
  }

  function renderCard(arr, arr2) {
    cardConstructor(
      randomElementArray(VALUECARD),
      randomElementArray(FIGURECARD)
    );
  }
  renderCard();

  randomBtn.addEventListener("click", function() {
    return renderCard();
  });

  timeStartBtn.addEventListener("click", function() {
    setInterval(function() {
      renderCard();
    }, 10000);
  });

  heigth.addEventListener("input", function() {
    CARD.style.height = heigth.value;
  });
  width.addEventListener("input", function() {
    CARD.style.width = width.value;
  });
};
