(function(){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

var GameView = Cosmos.GameView = function (game, context) {
  this.context = context;
  this.game = game;
  this.ship = this.game.addShip();
  this.timerId = null;
};

GameView.MOVES = {
  "w": [0, -1],
  "a": [-1, 0],
  "s": [0, 1],
  "d": [1, 0]
};

GameView.prototype.bindKeyHandlers = function (){
  var ship = this.ship;

  Object.keys(GameView.MOVES).forEach(function(k){
    var move = GameView.MOVES[k];
    key(k, function(){ ship.power(move); });
  });
};

GameView.prototype.start = function () {
  var gameView = this;
  this.timerId = setInterval(
    function (){
      gameView.game.step();
      gameView.game.draw(gameView.context);
    }, 1000 / Cosmos.Game.FPS
  );

  this.bindKeyHandlers();
};

})();
