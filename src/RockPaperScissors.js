// Player Class
function Player(name) {
	this.name = name;
}

Player.prototype.choses = function(playerPick) {
	this.chosen = playerPick;
}

// Game Class
function Game(player) {
	this.player1 = player1;
	this.player2 = player2;
}


Game.prototype.winner = function() {
 if(player1.chosen === 'rock' && player2.chosen === 'scissors'){
 	return player1;
 }
if(player1.chosen === 'paper' && player2.chosen === 'rock'){
	return player1;
 }
 if(player1.chosen === 'scissors' && player2.chosen === 'paper'){
 	return player1;
 }
 if(player1.chosen === player2.chosen){
 	return 'Draw';
 }
 else{
 	return player2;
 }
}




