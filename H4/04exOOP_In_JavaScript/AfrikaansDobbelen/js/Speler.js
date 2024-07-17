import Dobbelsteen from "./Dobbelsteen.js"

export default class Speler {
  static #aantalDobbelstenen = 5;
  #naam;
  #score
  #dobbelstenen = [];

  constructor (naam) {
    this.#naam = naam;
    this.#score = 0;

    for (let i = 1 ; i <= Speler.aantalDobbelstenen ; i++)
      this.#dobbelstenen.push(new Dobbelsteen());
  }



  static get aantalDobbelstenen() { return Speler.#aantalDobbelstenen;}

  get score() { return this.#score;}

  get dobbelstenen() { return this.#dobbelstenen}

  get naam() { return this.#naam }

  speel() {
    for (let ds of this.#dobbelstenen) 
      ds.rol();
  }



}