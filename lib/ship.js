(function(){
  if(typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var Ship = Cosmos.Ship = function (options) {
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = options.color || randomColor();

    Cosmos.MovingObject.call(this, options);
  };

  Ship.RADIUS = 15;

  Cosmos.Util.inherits(Ship, Cosmos.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

})();
