function Player(playerName) {
  this.playerName = playerName;
  this.roundScore = 0;
  this.totalScore = 0;
}

Player.prototype.rollDie = function() {
  return Math.floor(Math.random() * 6) + 1;
};

Player.prototype.addRound = function() {
  return this.roundScore += rollDie;
};

// let newPlayerInstance = new Player("Chloe", 80, 100);


