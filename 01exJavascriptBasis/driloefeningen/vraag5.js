/**
 * Vraag 5
 * Waarom wordt in onderstaand programma  console.log() niet uitgevoerd?
 */
"use strict";
const a = "5";
const b = 5;
if (a != b) {
  console.log(`De string '5' is verschillend van het getal 5.`);
}

// er zijn twee operatoren voor gelijkheid:

// == (en !=)
// er gebeurt impliciete type conversie, m.a.w. het type wordt niet gecontroleerd

// === (en !==)
// geen impliciete type conversie
