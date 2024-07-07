'use strict';
let getal = prompt("Geef een getal in");
let primes = [];

for (let i = 2; i < getal; i++) {
  let isPrime = true;

      for (let j = 2 ; j <= i/ 2 ; j++) {
        if ( i % j === 0) {
          isPrime = false;
          break;
        }  
     }
     
     if (isPrime)
        primes.push(i)
  }
console.log(primes)




