(function(){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var Game = Asteroids.Game = function(){
  };

  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Cosmos.Asteroid({ game: this }));
    }
  };

  Game.prototype.randomPosition = function(){
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  };

})();
