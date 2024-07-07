/**
 * Vraag 3
 * Vraag een getal aan de gebruiker en beeld in de console een aantal regels af met hartjes (♥),
 * zoals in onderstaand voorbeeld.
 *
 * Voorbeeld:
 *
 * INPUT:
 *   Hoeveel regels met hartjes moeten er afgeprint worden? 4 regels
 *
 * OUTPUT:
 *    START PROGRAM
 *    ♥
 *    ♥♥
 *    ♥♥♥
 *    ♥♥♥♥
 *    END PROGRAM
 */

'use strict'

const aantal = prompt('Hoeveel hartjes wil je uitprinten?');
console.log("START PROGRAM")
for (let i = 1; i <= aantal; i++) {
    console.log("♥".repeat(i));
}
console.log("END PROGRAM")