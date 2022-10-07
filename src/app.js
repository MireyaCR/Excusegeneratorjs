/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generatexcuse();
  //write your code here
  console.log("askdfjañsl");
};
let generatexcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoi = 0;
  let whati = 0;
  let wheni = 0;

  return who[whoi] + " " + what[whati] + " " + when[wheni];
};
