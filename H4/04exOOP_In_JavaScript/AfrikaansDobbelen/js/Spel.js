

import adc from "./AfrikaansDobbelenComponent.js";
import Speler from "./Speler.js";

export default class Spel {

  #spelers = []
  #spelerAanZet;


  constructor(spelersNamen) {
    for (const name of spelersNamen)
      this.#spelers.push(new Speler(name))
    
  }

  get spelerAanZet() {return this.#spelerAanZet;}
  get aantalSpelers() {return this.#spelers.length}

  get heeftWinaar() {}

  get scoreOverzicht() {}

  speel() {
    // if (!this.heeftWinaar) {
    //   for (let i = 0; i < this.aantalSpelers; i++) {
    //       this.#spelerAanZet = this.#spelers[i];
    //   }
    //   adc.speel()
    // }
    this.#spelerAanZet = this.#spelers[0];
    this.#spelerAanZet.speel();

  }

  bepaalVolgendeSpeler() {

  }




}