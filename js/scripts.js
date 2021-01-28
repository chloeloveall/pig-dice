function Game() {
  this.players = {};
  // this.gameOver = true;
}
Game.prototype.addPlayer = function(player) {
  this.players[player.playerName] = player;
}
function Player(playerName) {
  this.playerName = playerName;
  this.roundScore = 0;
  this.totalScore = 0;
}
Player.prototype.rollDie = function() {
  return Math.floor(Math.random() * 6) + 1;
}
Player.prototype.playerRoll = function() {
  const currentRound = this.rollDie();
  if (currentRound === 1) {
    console.log('this is telling you the score is zero')
    return this.roundScore = 0;
  } else {
    return this.roundScore += currentRound;
  }
};


let newPlayer = new Player("Chloe");



