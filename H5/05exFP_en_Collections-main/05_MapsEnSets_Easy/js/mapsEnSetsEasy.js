"use strict";
// =============
// Deel 1 - Maps
// =============

// Declareer een lege map genaamd nl_en_dict
const nl_en_dict = new Map();

// Voeg de volgende key-value pairs toe aan nl_en_dict. Maak gebruik van method chaining.
// stoel - chair
// tafel - table
// kaars - candle
// dubbel - double

nl_en_dict
  .set("stoel", "chair")
  .set("tafel", "table")
  .set("kaars", "candle")
  .set("dubbel", "double");

console.log(nl_en_dict);

// Declareer een map genaamd en_fr_dict die initieel volgende entries bevat.
// chair - chaise
// table - table
// candle - bougie
// double - double

const en_fr_dict = new Map();

en_fr_dict
  .set("chair", "chaise")
  .set("table", "table")
  .set("candle", "bougie")
  .set("double", "double");

console.log(en_fr_dict);

// Gebruik nl_en_dict om woorden te vertalen van NL naar EN
// Vul onderstaande code aan

// console.log("Vertalen van NL naar EN");
// let word = prompt("Geef een nederlands woord");
// while (word) {
//   if (nl_en_dict.has(word))
//     console.log(`NL: ${word} - EN: ${nl_en_dict.get(word)}`);
//   else console.log(`${word} staat niet in het woordenboek`);
//   word = prompt("Geef een nederlands woord");
// }

// Gebruik beide woordenboeken om woorden te vertalen van NL naar EN
// Vul onderstaande code aan

// console.log("Vertalen van NL naar FR");
// let word = prompt("Geef een nederlands woord");
// while (word) {
//   if (nl_en_dict.has(word) && en_fr_dict.has(nl_en_dict.get(word)))
//     console.log(`NL: ${word} - FR: ${en_fr_dict.get(nl_en_dict.get(word))}`);
//   else console.log(`${word} staat niet in het woordenboek`);
//   word = prompt("Geef een nederlands woord");
// }

// Itereer over nl_en_dict en log alle nederlandse woorden naar de console.
// Maak gebruik van een for .. of lus

for (const key of nl_en_dict.keys()) console.log(key);

// Itereer over en_fr_dict en log alle entries naar de console.
// Maak gebruik van een for .. of lus en array destructuring.
// Elke entry wordt getoond als key: value

for (const entry of en_fr_dict.entries()) {
  const [k, v] = entry;
  console.log(`${k} : ${v}`);
}

// Schrijf een functie die een woordenboek als parameter heeft
// en die retourneert hoeveel woorden identiek zijn in beide talen (i.e. key en value hebben dezelfde waarde)

const gelijkeWaarden = function (woordenboek) {
  let teller = 0;
  for (const entry of woordenboek.entries()) {
    const [k, v] = entry;
    if (k === v) teller++;
  }
  return teller;
};

// Gebruik de functie en log naar de console voor onze beide dictionaries
// hoeveel identieke woorden ze bevatten

console.log(
  `Woordenboek nl_en_dict heeft ${gelijkeWaarden(nl_en_dict)} identieke woorden`
);

console.log(
  `Woordenboek en_fr_dict heeft ${gelijkeWaarden(en_fr_dict)} identieke woorden`
);

// =============
// Deel 2 - Sets
// =============

const krishna = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const krishna2 = new Set();

// Overloop de array krishna met een forEach en voeg alle
// elementen toe aan een initieel lege set.
// Overloop de set met een for-of en druk de inhoud af.
// Zijn de dubbels verdwenen?

krishna.forEach((v) => krishna2.add(v));

for (const v of krishna2) console.log(v);

// Maak nu gebruik van de spread syntax om met een one-liner
// een *array* van unieke waarden te krijgen uit de array krishna

const uniqueArray = [...new Set(krishna)];

// Maak een array met 3 *verschillende* random getallen tussen 1 en 6

let population = new Map();
population.set("Iceland", 341243);
population.set("Belgium", 11589623);
population.set("Burkina Faso", 3273);

console.log(`Before sort:`);
console.log(population);
population = new Map(
  [...population].sort(([key1], [key2]) => {
    if (key1 < key2) return -1;
    if (key1 > key2) return 1;
    return 0;
  })
);
console.log(`After sort:`);
console.log(population);
