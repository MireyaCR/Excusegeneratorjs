/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generatexcuse();
  });
  //write your code here
  console.log("askdfjañsl");
};
let generatexcuse = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class.",
    "right in time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  let whoi = Math.floor(Math.random() * who.length);
  let whati = Math.floor(Math.random() * who.length);
  let wheni = Math.floor(Math.random() * who.length);

  return who[whoi] + " " + what[whati] + " " + when[wheni];
};
