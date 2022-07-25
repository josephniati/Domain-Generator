/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let generateDomain = () => {
    document.querySelector("#btn").addEventListener("click", () => {});
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let n = 0; n < noun.length; n++) {
          console.log(pronoun[i] + adj[j] + noun[n] + ".com");
        }
      }
    }
  };
  // let myArr = generateDomain();
  // console.log(generateDomain());
  generateDomain();
};
