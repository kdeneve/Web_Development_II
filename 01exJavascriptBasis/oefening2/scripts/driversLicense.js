"use strict";

const input = Number(prompt("Enter a number"));

if (isNaN(input)) console.log("Not a number");
else if (input % 3 === 0 && input % 5 === 0) console.log("FizzBuzz");
else if (input % 3 === 0) console.log("Fizz");
else if (input % 5 === 0) console.log("Buzz");
else console.log(input);




// "use strict";
// const speedLimit = 70;
// const kmPerPoint = 5;
// const speed = Number(prompt("Wat is uw snelheid?"));
// const diff = speed - speedLimit;
// const points = Math.floor(diff / kmPerPoint);

// //console.log(points);

// switch (true) {
//   case speed <= speedLimit:
//     console.log("OK");
//     break;
//   case points >= 0 && points < 12:
//     console.log("points: " + points);
//     break;
//   default:
//     console.log("drivers license is suspended");
// }
