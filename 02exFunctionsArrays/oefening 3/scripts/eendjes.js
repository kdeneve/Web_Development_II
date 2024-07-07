import { berekenPositie } from "./berekenPositie.js";

//const eendtjes = [3, 2, 4, 1, 5, 2, 4, 2, 2, 2];
//console.log(berekenPositie(eendtjes));

let myArray = [];

for (let i = 1; i <= 10; i++) {
  const getal = prompt(`Geef ${i}de getal in`);
  myArray.push(parseInt(getal));
}

console.log(myArray);
console.log(berekenPositie(myArray));
1