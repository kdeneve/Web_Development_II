import { craps } from "./craps.js";

const init = function () {
  document.getElementById("play").onclick = craps.play;
  craps.bet = prompt("What is your bet?");
  alert("Press play to start the game");
};

window.onload = init;
