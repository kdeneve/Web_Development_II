"use strict";

const input = Number(prompt("Enter a number"));

switch (true) {
  case isNaN(input) || input == "":
    console.log("is not a number");
    break;
  case input % 3 === 0 && input % 5 === 0:
    console.log("FizzBuzz");
    break;
  case input % 3 === 0:
    console.log("Fizz");
    break;
  case input % 5 === 0:
    console.log("Buzz");
    break;
  default:
    console.log(input);
}
