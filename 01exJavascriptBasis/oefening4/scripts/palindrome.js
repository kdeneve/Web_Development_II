'use strict';
const palin = String(prompt("Geef een woord in"));
let endindex = palin.length -1;
let flag =true;

for (let i = 0; i <= Math.floor(palin.length/2) ; i++) {
    if (palin[i] !== palin[endindex]) {
      flag = false;
      break;
    }
    endindex--;
}

if (flag === true)
console.log("dit is een palindrome")
else 
console.log("dit is geen palindrome")

