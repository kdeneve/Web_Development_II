'use strict';
let sum = 0;
const getal = Number(prompt("Geef een getal is"));
console.log(getal);

 for (let t1 = 3; t1 <= getal; t1 += 3) {
   sum += t1
 }

 for (let t1 = 5; t1 <= getal; t1 += 5) {
  sum += t1
}

 console.log(sum);

