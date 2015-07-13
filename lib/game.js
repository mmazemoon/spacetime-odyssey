(function(){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var Game = Cosmos.Game = function(){
  };

  Game.BG_COLOR = "#000000";
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Cosmos.Asteroid({ game: this }));
    }
  };

  Game.prototype.allObjects = function(){
    return [].concat(this.asteroids);
  };

  Game.prototype.draw = function (context){
    context.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    context.fillStyle = Game.BG_COLOR;
    context.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function(object){
      object.draw(context);
    });
  };

Game.prototype.isOutOfBounds = function (pos){
  return (pos[0] < 0) || (pos[1] < 0) ||

  (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};

  Game.prototype.moveObjects = function (){
    this.allObjects().forEach(function(object){
      object.move();
    });
  };

  Game.prototype.randomPosition = function(){
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  };

  Game.prototype.wrap = function (pos){
    if (coord < 0){
      return max - (coord % max);
    } else if (coord > max) {
      return coord % max;
    } else {
      return coord;
    }
  };

})();
