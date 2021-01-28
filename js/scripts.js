function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDie());

function Player(playerName, roundScore, totalScore) {
  this.playerName = playerName;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}

let newPlayerInstance = new Player("Chloe", 80, 100);


