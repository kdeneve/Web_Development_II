class Boek {
  constructor(id, titel, afbeelding) {
    this._id = id;
    this._titel = titel;
    this._afbeelding = afbeelding;
  }

  get id() {
    return this._id;
  }
  get titel() {
    return this._titel;
  }
  get afbeelding() {
    return this._afbeelding;
  }
}

class BoekenRepository {
  constructor() {
    this._boeken = [];
    this.boekenVullen();
  }

  get boeken() {
    return this._boeken;
  }

  voegBoekToe(id, titel, afbeelding) {
    this._boeken.push(new Boek(id, titel, afbeelding));
  }

  // geefBoeken retourneert een deel van de boeken in een array
  // parameter 'vanafBoek' is een nummer en geeft aan vanaf het hoeveelste boek we een deel nemen (eerste boek is nummer 1)
  // parameter 'aantalBoeken' is een nummer en geeft aan hoeveel opeenvolgende boeken we in het deel stoppen
  geefBoeken(vanafBoek, aantalBoeken) {}

  boekenVullen() {
    this.voegBoekToe(1, 'Wuthering Heights', 'WutheringHeights.jpg');
    this.voegBoekToe(2, 'Gullivers Travels', 'GulliversTravels.jpg');
    this.voegBoekToe(3, 'A Bend In The River', 'ABendInTheRiver.jpg');
    this.voegBoekToe(
      4,
      'The Picture Of DorianGray',
      'ThePictureOfDorianGray.jpg'
    );
    this.voegBoekToe(5, 'A Christmas Carol', 'AChristmasCarol.jpg');
    this.voegBoekToe(6, 'Alice In Wonderland', 'AliceInWonderland.jpg');
    this.voegBoekToe(7, 'The Quie tAmerican', 'TheQuietAmerican.jpg');
    this.voegBoekToe(8, 'The Stranger', 'TheStranger.jpg');
    this.voegBoekToe(9, 'Anna Karenina', 'AnnaKarenina.jpg');
    this.voegBoekToe(10, 'On The Road', 'OnTheRoad.jpg');
    this.voegBoekToe(11, 'Anne Frank', 'AnneFrank.jpg');
    this.voegBoekToe(12, 'A Passage To India', 'APassageToIndia.jpg');
    this.voegBoekToe(13, 'Bird Song', 'BirdSong.jpg');
    this.voegBoekToe(14, 'Catch 22', 'Catch22.jpg');
    this.voegBoekToe(15, 'Don Quichote', 'DonQuichote.jpg');
    this.voegBoekToe(16, 'Frankenstein', 'Frankenstein.jpg');
    this.voegBoekToe(17, 'Hamlet', 'Hamlet.jpg');
    this.voegBoekToe(18, 'Harry Potter Series', 'HarryPotterSeries.jpg');
    this.voegBoekToe(19, 'His Dark Materials', 'HisDarkMaterials.jpg');
    this.voegBoekToe(20, 'Jane Eyre', 'JaneEyre.jpg');
    this.voegBoekToe(21, 'Life Of Pi', 'LifeOfPi.jpg');
    this.voegBoekToe(22, 'The Catcher In The Rye', 'TheCatcherInTheRye.jpg');
    this.voegBoekToe(23, 'The Color Purple', 'TheColorPurple.jpg');
    this.voegBoekToe(24, 'Lord Of The Flies', 'LordOfTheFlies.jpg');
    this.voegBoekToe(25, 'Memoirs Of A Geisha', 'MemoirsOfAGeisha.jpg');
    this.voegBoekToe(26, 'The Grapes Of Wrath', 'TheGrapesOfWrath.jpg');
    this.voegBoekToe(27, 'The Great Gatsby', 'TheGreatGatsby.jpg');
    this.voegBoekToe(28, 'Men Without Women', 'MenWithoutWomen.jpg');
    this.voegBoekToe(29, 'The Divine Comedy', 'TheDivineComedy.jpg');
    this.voegBoekToe(30, 'The Lord Of The Rings', 'TheLordOfTheRings.jpg');
    this.voegBoekToe(31, 'MobyDick', 'MobyDick.jpg');
    this.voegBoekToe(32, 'Money', 'Money.jpg');
    this.voegBoekToe(
      33,
      'Adventures Of Huckleberry Finn',
      'AdventuresOfHuckleberryFinn.jpg'
    );
    this.voegBoekToe(34, 'Nineteen Eighty Four', 'NineteenEightyFour.jpg');
    this.voegBoekToe(
      35,
      'One Flew Over The Cuckoos Nest',
      'OneFlewOverTheCuckoosNest.jpg'
    );
    this.voegBoekToe(36, 'Pride And Prejudice', 'PrideAndPrejudice.jpg');
    this.voegBoekToe(37, 'Rebecca', 'Rebecca.jpg');
    this.voegBoekToe(38, 'Robinson Crusoe', 'RobinsonCrusoe.jpg');
    this.voegBoekToe(39, 'The Bell Jar', 'TheBellJar.jpg');
    this.voegBoekToe(40, 'The Canterbury Tales', 'TheCanterburyTales.jpg');
    this.voegBoekToe(41, 'Brave New World', 'BraveNewWorld.jpg');
    this.voegBoekToe(
      42,
      'The Count Of Monte Cristo',
      'TheCountOfMonteCristo.jpg'
    );
    this.voegBoekToe(43, 'Heart Of Darkness', 'HeartOfDarkness.jpg');
    this.voegBoekToe(44, 'The Wind In The Willows', 'TheWindInTheWillows.jpg');
    this.voegBoekToe(45, 'To Kill A Mockingbird', 'ToKillAMockingbird.jpg');
    this.voegBoekToe(46, 'Ulysses', 'Ulysses.jpg');
    this.voegBoekToe(47, 'The War Of The Worlds', 'TheWarOfTheWorlds.jpg');
    this.voegBoekToe(48, 'The Way We Live Now', 'TheWayWeLiveNow.jpg');
  }
}

class BoekenComponent {
  constructor(storage) {
    this._boekenRepository = new BoekenRepository();
    this._gelezenBoeken = new Set();
    this._actievePagina = 1; // bevat het nummer van de pagina die momenteel getoond wordt
    this._storage = storage;
    this.aantalBoekenPerPagina = 6;
  }
  get boekenRepository() {
    return this._boekenRepository;
  }
  get gelezenBoeken() {
    return this._gelezenBoeken;
  }
  get actievePagina() {
    return this._actievePagina;
  }
  get storage() {
    return this._storage;
  }
  get aantalBoekenPerPagina() {
    return this._aantalBoekenPerPagina;
  }

  set aantalBoekenPerPagina(value) {
    this._aantalBoekenPerPagina = value;
  }

  // navigatieToHtml genereert de twee knoppen die in de div met id navigatie moeten komen
  navigatieToHtml() {
    const aantalPaginas =
      this._boekenRepository.boeken.length / this._aantalBoekenPerPagina;

    const btn1 = document.createElement('button');
    btn1.appendChild(document.createTextNode('<'));
    btn1.onclick = () => {
      this._actievePagina = Math.max(1, this._actievePagina - 1);
      this.boekenToHtml();
    };

    const btn2 = document.createElement('button');
    btn2.appendChild(document.createTextNode('>'));
    btn2.onclick = () => {
      this._actievePagina = Math.min(aantalPaginas, this._actievePagina + 1);
      this.boekenToHtml();
    };
    document.getElementById('navigatie').appendChild(btn1);
    document.getElementById('navigatie').appendChild(btn2);
  }

  // boekenToHtml genereert dynamsich de boekenplank die in de div met id boeken moet komen
  boekenToHtml() {
    console.log(this.actievePagina);
    const boeken = this._boekenRepository.geefBoeken(
      (this._actievePagina - 1) * this._aantalBoekenPerPagina,
      this._aantalBoekenPerPagina
    );
    const boekenDiv = document.getElementById('boeken');
    boekenDiv.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'row';

    // voor elk boek:

    boekenDiv.appendChild(row);
  }

  voegGelezenBoekToe(id) {
    this.gelezenBoeken.add(id);
    this.setGelezenBoekenInStorage();
  }

  // getGelezenBoekenFromStorage haaltde lijst met id's van gelezen boeken op uit de storage
  getGelezenBoekenFromStorage() {}

  // setGelezenBoekenInStorage plaatst de lijst van id's van gelezen boeken in de storage
  setGelezenBoekenInStorage() {}
}

function init() {
  const boekenComponent = new BoekenComponent(window.localStorage);
  boekenComponent.getGelezenBoekenFromStorage();
  boekenComponent.navigatieToHtml();
  boekenComponent.boekenToHtml();
}

window.onload = init;
