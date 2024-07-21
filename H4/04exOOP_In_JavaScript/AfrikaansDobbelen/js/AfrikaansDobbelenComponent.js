/***********************************
Deze klasse vormt de lijm tussen ons domein (Dobbelsteen) en de HTML pagina
als de gebruiker iets wijzigt op de html pagina gaat het domein aangesproken worden en de
web pagina aangepast worden. Voorbeeld: de gebruiker rolt de dobbelsteen
De AfrikaansDobbelenComponent gaat de methode rol aanspreken in de domeinklasse Dobbelsteen
*/

import Speler from "./Speler.js"
//import Dobbelsteen from "./Dobbelsteen.js"
import Spel from "./Spel.js"

export default class AfrikaansDobbelenComponent {
  //#dobbelsteen
  #spel

  constructor () {
    //this.#dobbelsteen = new Dobbelsteen();
    //this.#dobbelsteen.rol();
    //this.#speler = new Speler("Kirikou");
    this.#spel = new Spel(this.#geefSpelers());

    //this.#speler.speel();
    document.getElementById("play").onclick = () => {
      //alert(this.#speler.naam);
      this.#spel.speel();
      this.#toHtml();
      };
  }


  #toHtml() {
  
    for (let t = 0 ; t < Speler.aantalDobbelstenen ; t++) {
      //alert(t);
      const ds = document.getElementById(t + 1);
      ds.src="./images/Dice" + this.#speler.dobbelstenen[t].aantalOgen  +".png"
    }

    document.getElementById("speler").innerHTML = `Speler = ${this.#speler.naam}`;
    document.getElementById("score").innerHTML = `Score = ${this.#speler.score}`;
   
  }

   #geefSpelers() {
    let aantal = prompt("Geef het aantal spelers in: ")
    let players = [];
    while (aantal > 0)
    {
      players.push(prompt("Geef de naam van de speler in"))
      aantal--;
    }
    return players;
   }

}

/***************************************************************************************** */
/* onderstaand stukje code heb je pas in de laatste stap van de oefening nodig (zie opgave) */
/***************************************************************************************** */
// if (document.getElementById("play").value === "Rol dobbelstenen") {
//   document.getElementById("play").value = "Volgende speler";
//   document.getElementById("play").onclick = () => {
//     this.#spel.bepaalVolgendeSpeler();
//     this.toHtml();
//   };
// } else {
//   document.getElementById("play").value = "Rol dobbelstenen";
//   document.getElementById("play").onclick = () => {
//     this.#spel.speel();
//     this.toHtml();
//   };
// }