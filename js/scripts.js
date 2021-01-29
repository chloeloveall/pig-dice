// Business Logic for Game ---------
function Game() {
  this.players = {};
  // this.gameOver = true;
}

Game.prototype.addPlayer = function(player) {
  this.players[player.playerName] = player;
}

// Business Logic for Player ---------
function Player(playerName) {
  this.playerName = playerName;
  this.roundScore = 0;
  this.totalScore = 100;
}

Player.prototype.hold = function () {
  this.totalScore = this.roundScore + this.totalScore;
  if (this.totalScore >= 100) {
    return "Score total: " + this.totalScore + " CONGRATS YOU ARE THE WINNER!";
  } else if (this.totalScore < 100) {
    alert("It is now the other player's turn");
    return this.totalScore;
  } 
}

Player.prototype.rollDie = function() {
  return Math.floor(Math.random() * 6) + 1;
}

Player.prototype.addRound = function() {
  const currentRound = this.rollDie();
  if (currentRound === 1) {
    return this.roundScore = 0;
  } else {
    return this.roundScore = this.roundScore + currentRound;
  }
};

let newGame = new Game();
let player1 = new Player("Chloe");
let player2 = new Player('Alan');
newGame.addPlayer(player1);
newGame.addPlayer(player2);
player1.hold();

// User Interface Logic 
$(document).ready(function() {
  $("form#pigDice").submit(function(event) {
    event.preventDefault();
    const inputtedPlayer1 = $("input#player1").val();
    const inputtedPlayer2 = $("input#player2").val();
    
  })
})

