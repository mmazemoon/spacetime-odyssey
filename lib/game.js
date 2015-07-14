(function(){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var Game = Cosmos.Game = function(){
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];

    this.addAsteroids();
  };

  Game.BG_COLOR = "#000000";
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.FPS = 32;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.add = function (object) {
    if (object instanceof Cosmos.Asteroid){
        this.asteroids.push(object);
    } else if (object instanceof Cosmos.Bullet){
        this.bullets.push(object);
    } else if (object instanceof Cosmos.Ship) {
        this.ships.push(object);
    } else {
      throw "wtf?";
    }
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Cosmos.Asteroid({ game: this }));
    }
  };

  Game.prototype.addShip = function (){
    var ship = new Cosmos.Ship({
      pos: this.randomPosition(),
      game: this
    });

    this.add(ship);
    return ship;
  };

  Game.prototype.allObjects = function(){
    return [].concat(this.ships, this.asteroids, this.bullets);
  };

  Game.prototype.checkCollisions = function () {
    var game = this;

    this.allObjects().forEach(function (obj1){
      game.allObjects().forEach(function(obj2){
        if(obj1 === obj2){
          // don't allow self collision
          return;
        }
        if(obj1.isCollidedWith(obj2)){
          obj1.collideWith(obj2);
        }
      });
    });
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

  Game.prototype.remove = function (object) {
    if (object instanceof Cosmos.Bullet){
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Cosmos.Asteroid){
      var idx = this.asteroids.indexOf(object);
      this.asteroids[idx] = new Cosmos.Asteroid({ game: this });
    } else if (object instanceof Cosmos.Ship){
      this.ships.splice(this.ships.indexOf(object), 1);
    } else {
      throw "wtf?";
    }
  };

  Game.prototype.step = function (){
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.wrap = function (pos){
    return [
      wrap(pos[0], Game.DIM_X), wrap(pos[1], Game.DIM_Y)
    ];

    function wrap (coord, max){
      if (coord < 0){
        return max - (coord % max);
      } else if (coord > max) {
        return coord % max;
      } else {
        return coord;
      }
    }
  };
})();
