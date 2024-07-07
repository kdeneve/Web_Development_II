
"use strict";

let keuzeGebruiker;
keuzeGebruiker = prompt('Kies je blad, steen of schaar?');
let keuzeComputer;
const getal = Math.random();
console.log(getal);

if (getal < 1/3)
  keuzeComputer = 'blad';
else if (getal >= 1/3 && getal < 2/3)
  keuzeComputer = 'steen';
else keuzeComputer ='schaar';

console.log(keuzeGebruiker);
console.log(keuzeComputer);

function geefResultaat(keuze1, keuze2) {
   if (keuze1 === keuze2)
    console.log('Het is een gelijkspel');
   
   else if (keuze1 === 'steen') {
      if (keuze2 === 'schaar')
            console.log('steen wint');
          else console.log('blad wint');
   }

   else if (keuze1 === 'blad') {
    if (keuze2 === 'steen')
      console.log( 'blad wint');
        else console.log('schaar wint');
  }
  
    else if (keuze1 === 'schaar') {
      if (keuze2 === 'steen')
        console.log('steen wint');
          else console.log('schaar wint');
  }  
}

geefResultaat(keuzeGebruiker, keuzeComputer);


