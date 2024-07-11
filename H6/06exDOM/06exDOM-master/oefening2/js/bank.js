/*
class UitgavenRepository {
  constructor() {
    this._uitgaven = [];
    this.uitgavenOpvullen();
  }

  get uitgaven() {
    return this._uitgaven;
  }

  voegUitgaveToe(id, datum, bedrag, omschrijving, categorie) {

  }

  uitgavenOpvullen() {
    this.voegUitgaveToe(
      1,
      new Date(2018, 2, 5),
      25,
      'Fnac Veldstraat',
      'andere'
    );
    this.voegUitgaveToe(2, new Date(2018, 2, 5), 560, 'Huur', 'woning');
    this.voegUitgaveToe(
      3,
      new Date(2018, 2, 6),
      15,
      'NMBS Gent-Sint-Pieters',
      'vervoer'
    );
    this.voegUitgaveToe(
      4,
      new Date(2018, 2, 7),
      100,
      'Delhaize Sterre',
      'voeding'
    );
    this.voegUitgaveToe(
      5,
      new Date(2018, 2, 7),
      65,
      'Texaco Tankstation',
      'vervoer'
    );
    this.voegUitgaveToe(6, new Date(2018, 2, 8), 15, 'Decascoop', 'andere');
    this.voegUitgaveToe(
      7,
      new Date(2018, 2, 9),
      20,
      'GB Sint-Denijs-Westrem',
      'voeding'
    );
  }


  geefCategorieen() {

  }

  totaalBedragUitgaven() {

  }

  uitgavenPerCategorie(categorie) {

  }

}
*/

/*
class BankComponent {
  constructor(window) {
    this._canvas = window.document.getElementById('canvas');
    this._ctx = this._canvas.getContext('2d');
    this._offset = 50;
    this._storage = window.localStorage;
    this._aantalBezoeken = 1;
    this._uitgavenRepository = new UitgavenRepository();
  }

  get canvas() {
    return this._canvas;
  }
  get ctx() {
    return this._ctx;
  }
  get offset() {
    return this._offset;
  }
  get storage() {
    return this._storage;
  }
  get aantalBezoeken() {
    return this._aantalBezoeken;
  }
  get uitgavenRepository() {
    return this._uitgavenRepository;
  }

  toHtml() {
    this.resetCanvas();
    this.tekenen();
    this.tekst();
  }

  resetCanvas() {
    this._canvas.width = this._canvas.width;
  }

  tekenen() {
     // tekenen van de assen
    this._ctx.lineWidth = 2;
    this._ctx.strokeStyle = '#333';
    this._ctx.font = 'italic 8pt sans-serif';

    // verticale as tekenen
    this._ctx.moveTo(this._offset, this._offset);
    this._ctx.lineTo(this._offset, this._canvas.height - this._offset);
    this._ctx.stroke();

    // horizontale as tekenen
    this._ctx.moveTo(this._offset, this._canvas.height - this._offset);
    this._ctx.lineTo(
      this._canvas.width - this._offset,
      this._canvas.height - this._offset
    );
    this._ctx.stroke();

    this._ctx.fillStyle = 'black';
    // labels
    for (let i = 0; i <= 100; i += 10) {
      this._ctx.fillText(
        i,
        this._offset - 15,
        this._canvas.height - this._offset - i * 3
      );
    }

    const categorieen = this._uitgavenRepository.geefCategorieen();
    const totaleUitgaven = this._uitgavenRepository.totaalBedragUitgaven();

    this._uitgavenRepository
      .geefCategorieen()
      .forEach((categorie, index, array) => {
        const uitgavePerCategorie = this._uitgavenRepository.uitgavenPerCategorie(
          categorie
        );
        const breedteKolom = Math.round(
          (this._canvas.width - 2 * this._offset - array.length * 20) /
          array.length
        );
        const percentage = Math.round(
          uitgavePerCategorie * 100 / totaleUitgaven,
          0
        );
        this._ctx.beginPath();
        this._ctx.fillStyle = 'red';
        this._ctx.fillRect(
          this._offset + 10 + (breedteKolom + 20) * index,
          this._canvas.height - this._offset - 3 * percentage,
          breedteKolom,
          3 * percentage
        );
        this._ctx.closePath();
        this._ctx.beginPath();
        this._ctx.fillStyle = 'black';
        this._ctx.fillText(
          categorie,
          this._offset + 10 + (breedteKolom + 20) * index,
          this._canvas.height - this._offset + 10
        );
        this._ctx.closePath();
      });
  }

  tekst() {

  }

  getAantalBezoekenFromStorage() {

  }

  setAantalBezoekenInStorage() {

  }
}
*/
function init() {
  // Testcode Deel 1
  /*
  const uitgave1 = new Uitgave(1, new Date(2018, 2, 2), 25, 'Fnac Veldstraat', 'andere' );
  const uitgave2 = new Uitgave(2, new Date(2018, 2, 2), 560, 'Huur', 'woning');
  console.log(uitgave1);
  console.log(uitgave2);
  */
  // Testcode Deel 2
  /*
  const uitgavenRepository = new UitgavenRepository();
  console.log(uitgavenRepository.uitgaven);
  console.log(uitgavenRepository.geefCategorieen());
  console.log(uitgavenRepository.totaalBedragUitgaven());
  console.log(uitgavenRepository.uitgavenPerCategorie("andere"));  
  */
  // Testcode Deel 3
  /*
  const bankComponent = new BankComponent(this);
  bankComponent.toHtml();
  */
}

window.onload = () => {
  init();
};

Date.prototype.datumNotatie = function () {
  const dagen = [
    'Zondag',
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrijdag',
    'Zaterdag',
  ];
  return (
    dagen[this.getDay()] +
    ' ' +
    this.getDate() +
    '/' +
    (this.getMonth() + 1) +
    '/' +
    this.getFullYear()
  );
};
