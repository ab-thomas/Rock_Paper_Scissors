describe("Rock-Paper-Scissors", function() {
   
  
  beforeEach(function() {
    player1 = new Player('Player1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);
  });



describe("Player", function() {
  
  it('has a name', function() {
    expect(player1.name).toEqual('Player1');
  });

  it('knows a player picks', function() {
    player1.choses('scissors');
    expect(player1.chosen).toEqual('scissors')
  });
});

describe("Game", function() {

  it('has 2 players', function() {
    expect(game.player1).toBe(player1);
    expect(game.player2).toBe(player2);
  });

  it('can determine that rock beats scissors', function() {  
    player1.choses('scissors');
    player2.choses('rock');
    
    expect(game.winner()).toBe(player2);
  });

  it('can determine that paper beats rock', function() {
    player1.choses('paper');
    player2.choses('rock');

    expect(game.winner()).toBe(player1);
  });

  it('can determine that scissors beats paper', function() {
    player1.choses('scissors');
    player2.choses('paper');
    
    expect(game.winner()).toBe(player1); 
  });

  it('can determine that paper against paper will draw', function() {
    player1.choses('paper');
    player2.choses('paper');
    
    expect(game.winner()).toBe('Draw'); 
  });

  it('can determine that rock against rock will draw', function() {
    player1.choses('rock');
    player2.choses('rock');
    
    expect(game.winner()).toBe('Draw'); 
  });

  it('can determine that scissors against scissors will draw', function() {
    player1.choses('scissors');
    player2.choses('scissors');

    expect(game.winner()).toBe('Draw'); 
  });
});
});








