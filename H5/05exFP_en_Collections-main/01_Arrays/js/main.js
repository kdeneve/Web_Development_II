'use strict';
// ============================================================================
// Creëer een nieuwe array die alle getallen uit origineel bevat
// die groter zijn dan 3.
const origineel = [1, 2, 3, 4];
let groterDan3 = origineel.filter(n => n > 3);
console.log(groterDan3);

// Creëer een nieuwe array die alle even getallen uit origineel bevat
let evenGetallen = origineel.filter(n => (n%2 == 0));
console.log(evenGetallen);

// Creëer een nieuwe array die alle getallen uit origineel bevat
// maar met 5 verhoogd.
let allesPlusVijf = origineel.map(n => n + 5);
console.log(allesPlusVijf);

// Creëer een nieuwe array waarbij de oneven getallen ongewijzigd blijven
// en de even getallen vermenigvuldigd worden met 2.
let onevenMaalTwee = origineel.map(n => {
  if (n%2 == 0)
    return n * 2
  else return n
});
console.log(onevenMaalTwee);

// ============================================================================
// Creëer een nieuwe array met alle fruit in hoofdletters.
const fruit = ['orange', 'pineapple', 'strawberry', 'blueberry', 'melon'];
const fruitCaps = fruit.map(f => f.toUpperCase());
console.log(fruitCaps);

// ============================================================================
// Bereken de gemiddelde leeftijd van users
const users = [
  { id: 1, firstname: 'Jan', lastname: 'Janssens', age: 25 },
  { id: 2, firstname: 'Eva', lastname: 'De Smet', age: 30 },
  { id: 3, firstname: 'Pieter', lastname: 'Martens', age: 29 }
];

const averageAge = users.reduce((pv, el) => pv + el.age, 0) / users.length;
console.log(`Average age of users = ${averageAge}`);

// ============================================================================
// Schrijf een functie filterRange die een array van getallen filtert
// voor een gegeven start- en stopwaarde. filterRange retourneert een array
// die enkel de getallen bevat die liggen tussen [start, stop]
// De array van getallen, de start en stopwaarde zijn parameters van filterRange.
// De oorspronkelijke array moet ongewijzigd blijven
const filterRange = function(array, start, stop) {
  return array.filter( el => (el > start && el < stop))
  
};

console.log(filterRange([120, 5, -88, 26, 98, 100], 0, 100));

let aantalGeslaagden = [10, 6, 11, 15].reduce( (pv, mark) => { return pv + (mark >= 10)}, 0)
console.log(aantalGeslaagden);
// ============================================================================
// We werken we met strings die enkel de karakters
// + en - bevatten.
// Schrijf een functie berekenAantalOvergangen met een string parameter
// die berekent hoeveel maal een overgang optreedt van + naar − of omgekeerd.
// Je mag ervan uitgaan dat de invoerstring minstens 1 karakter bevat.

// Mijn poging
// const berekenAantalOvergangen = function(word) {
//   let signs = word.split('');
  
//   return signs.reduce((pv, cv, ci, signs) => { return pv + ( cv !== signs[ci+1]) } , 0)
// };

const berekenAantalOvergangen = (plusMinString) =>
  plusMinString.split('').reduce((result, value, index, array) => {
    return result =
      (index < (array.length - 1) && value !== array[index + 1])
        ? result + 1
        : result;
  }, 0);

let plusMin = '-++++----++--+';
console.log(
 `Aantal overgangen in ${plusMin} = ${berekenAantalOvergangen(plusMin)}`
);
plusMin = '++';
console.log(
 `Aantal overgangen in ${plusMin} = ${berekenAantalOvergangen(plusMin)}`
);

// ============================================================================
// Een natuurlijk getal k dat bestaat uit n cijfers en dat gelijk is aan
// de som van de n-de machten van zijn cijfers
// wordt een narcistisch getal genoemd. Enkele voorbeelden:
//
// 153 = 1^3 + 5^3 + 3^3
// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 54748 = 5^5 + 4^5 + 7^5 + 4^5 + 8^5
// 548834 = 5^6 + 4^6 + 8^6 + 8^6 + 3^6 + 4^6
// 1741725 = 1^7 + 7^7 + 4^7 + 1^7+ 7^7 + 2^7 + 5^7
//
// Schrijf een functie isNarcistisch(getal) die een boolean retourneert
// die aangeeft of getal al dan niet narcistisch is
// Maak gebruik van getal.split('') om een array met
// de afzonderlijke cijfers van een getal te bekomen
const isNarcistisch = (getal) => {
   const sum = getal.split('').reduce((result, value, index, array) => {
       return result + parseInt(value) ** array.length;
  },0);
  return (sum === parseInt(getal));
  
}

let getal = '548834';
//console.log(isNarcistisch('1634'));
console.log(`${getal} is ${isNarcistisch(getal) ? '' : 'niet '}narcistisch.`);
getal = '1234';
console.log(`${getal} is ${isNarcistisch(getal) ? '' : 'niet '}narcistisch.`);

// ============================================================================
// Schrijf een functie die controleert of een woord een permutatie is van
// een ander woord (i.e. ze bevatten dezelfde letters), bijvoorbeeld:
// voor SLAAPT en PLAATS retourneert de functie true
const isPermutatie = (woord1, woord2) => {
  const sum1 = woord1.split("").reduce((result, value) => {
    return result + value.charCodeAt();
  }, 0);

  const sum2 = woord2.split("").reduce((result, value) => {
    return result + value.charCodeAt();
  }, 0);

  return sum1 === sum2;
};

let woord1 = 'slaapt',
  woord2 = 'plaats';
console.log(
  `${woord1} en ${woord2} zijn ${
    isPermutatie(woord1, woord2) ? '' : 'g'
  }een permutatie van elkaar.`
);
woord2 = 'pleeeast';
console.log(
  `${woord1} en ${woord2} zijn ${
    isPermutatie(woord1, woord2) ? '' : 'g'
  }een permutatie van elkaar.`
);

// ============================================================================
// Sorteer de array animals op basis van gewicht: van lichter naar zwaarder
const animals = [
  {
    name: 'lion',
    size: 'medium',
    weight: 150
  },
  {
    name: 'dog',
    size: 'small',
    weight: 10
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000
  },
  {
    name: 'cat',
    size: 'small',
    weight: 5
  }
];

animals.sort(({ weight: w1 }, { weight: w2 }) => {
  return w1 - w2;
});

console.log(animals);

// ============================================================================
// Sorteer de onderstaande array aflopend op het aantal zijden van de shape
let shapes = [
  [5, 'Pentagon'],
  [3, 'Triangle'],
  [8, 'Octagon'],
  [4, 'Rectangle']
];

shapes.sort(([a], [c]) => c - a);

console.log(shapes);
