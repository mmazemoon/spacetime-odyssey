(function(){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var Asteroid = Cosmos.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.pos = options.pos;
    options.radius = Asteroid.RADIUS;
    options.vel = options.vel;
    Asteroids.Util.randomVec(Asteroid.SPEED);

    Cosmos.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#505050";
  Asteroid.RADIUS = 25;
  Asteroid.SPEED = 4;

  Cosmos.Util.inherits(Asteroid, Cosmos.MovingObject);

})();
