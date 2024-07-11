'use strict';
let zin = prompt("geef een zin in");
let words = zin.split(' ');
words.reverse();
words.forEach(element => {
    console.log(element);
});

