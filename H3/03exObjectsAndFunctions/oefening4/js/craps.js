const dice1 = {
  eyes: 1,
  roll: function () {
    this.eyes = Math.floor(Math.random() * 6 + 1);
  },
};

const dice2 = {
  eyes: 1,
  roll: function () {
    this.eyes = Math.floor(Math.random() * 6 + 1);
  },
};

export const initialiseerCraps =function() {
  document.getElementById("play").onclick = craps.play;
  craps.bet = prompt("What is your bet?");
  alert("Press play to start the game");
}

const craps = {
  bet: 0,
  point: 0,
  earned: 0,
  gameover: false,
  dices: [dice1, dice2],
  rollDice: function () {
    dice1.roll();
    dice2.roll();
  },
  getSum: function () {
    return dice1.eyes + dice2.eyes;
  },
  play: function () {
    craps.rollDice();
    alert(`You played ${craps.getSum()}`);

  }
    // if (craps.getSum() == 7 || craps.getSum() == 11 )
   // this.bet *= 2;
    // else
}