(function(){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

var GameView = Cosmos.GameView = function (game, context) {
  this.context = context;
  this.game = game;

  this.timeId = null;
};

GameView.prototype.start = function () {
  var gameView = this;
  this.timeId = setInterval(
    function (){
      gameView.game.draw(gameView.context);
    }, 20
  );
};





})();
