/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const valueCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const figureCard = ["♦", "♥", "♠", "♣"];

  function randomElementArray(arr) {
    let numRandom = Math.floor(Math.random() * arr.length);
    return arr[numRandom];
  }

  function cardConstructor(valueCard, figureCard) {
    let randomValueCard = randomElementArray(valueCard);
    let randomfigureCard = randomElementArray(figureCard);
    let FIGURECARDUP = document.querySelector(".figureUp");
    const VALUECARD = document.querySelector(".value");
    const FIGURECARDDWN = document.querySelector(".figureDwn");
    FIGURECARDUP.textContent = `${randomfigureCard}`;
    VALUECARD.textContent = `${randomValueCard}`;
    FIGURECARDDWN.textContent = `${randomfigureCard}`;
    if (randomfigureCard === "♦" || randomfigureCard === "♥") {
      FIGURECARDUP.classList.add("text-danger");
      FIGURECARDDWN.classList.add("text-danger");
    }
  }
  cardConstructor(valueCard, figureCard);
};

//<div class="col-4 bg-white rounded-3 text-danger my-5 mx-auto">
//<div class="row pb-5 ms-3"><h1>♥</h1></div>
//<div class="row py-5 text-center"><h1>7</h1></div>
//<div class="row pt-5 me-3 text-end"><h1>♥</h1></div>
//</div>
