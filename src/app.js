/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const valueCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const figureCard = ["♦", "♥", "♠", "♣"];
  const FIGURECARDUP = document.querySelector(".figureUp");

  function randomElementArray(arr) {
    let numRandom = Math.floor(Math.random() * arr.length);
    return arr[numRandom];
  }

  function cardConstructor(valueCard, figureCard) {
    const VALUECARDSELECTOR = document.querySelector(".value");
    const FIGURECARDDWN = document.querySelector(".figureDwn");
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
  cardConstructor(
    randomElementArray(valueCard),
    randomElementArray(figureCard)
  );

  let randomBtn = document.getElementById("btnRandom");
  randomBtn.addEventListener("click", function() {
    cardConstructor(
      randomElementArray(valueCard),
      randomElementArray(figureCard)
    );
  });
  let timeStartBtn = document.getElementById("timeStartBtn");
  timeStartBtn.addEventListener("click", function() {
    setInterval(function() {
      cardConstructor(
        randomElementArray(valueCard),
        randomElementArray(figureCard)
      );
    }, 10000);
  });
  const CARD = document.getElementById("card");
  let heigth = document.getElementById("heigth");
  let width = document.getElementById("width");
  heigth.addEventListener("input", function() {
    CARD.style.height = heigth.value;
  });
  width.addEventListener("input", function() {
    CARD.style.width = width.value;
  });
};

//<div class="col-4 bg-white rounded-3 text-danger my-5 mx-auto">
//<div class="row pb-5 ms-3"><h1>♥</h1></div>
//<div class="row py-5 text-center"><h1>7</h1></div>
//<div class="row pt-5 me-3 text-end"><h1>♥</h1></div>
//</div>
