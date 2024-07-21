

import adc from "./AfrikaansDobbelenComponent.js";
import Speler from "./Speler.js";

export default class Spel {

  #spelers = []
  #spelerAanZet;


  constructor(spelersNamen) {
    for (const name in spelersNamen)
      this.#spelers.push(new Speler(name))
    
  }

  get spelerAanZet() {return this.#spelerAanZet;}
  get aantalSpelers() {return this.#spelers.length}

  get heeftWinaar() {}

  get scoreOverzicht() {}

  speel() {

  
  }

  bepaalVolgendeSpeler() {

  }




}