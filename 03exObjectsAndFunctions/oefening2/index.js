import { greetUser, touchRock } from "./iRock.js";

const init = function () {
  //greetUser();
  const beeld = document.getElementById("rockImg");
  beeld.onclick = greetUser;
};

window.onload = init;
