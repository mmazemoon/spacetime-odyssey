(function(){
  if(typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  function randomColor (){
    var hexDigits = "0123456789ABCDEF";

    var color = "#";
    for (var i = 0; i < 3; i++){
      color += hexDigits[Math.floor((Math.random() * 16))];
    }
    return color;
  }

  var Ship = Cosmos.Ship = function (options) {
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = options.color || randomColor();

    Cosmos.MovingObject.call(this, options);
  };

  Ship.RADIUS = 15;

  Cosmos.Util.inherits(Ship, Cosmos.MovingObject);

  Ship.prototype.fireBullet = function (){
    var norm = Cosmos.Util.norm(this.vel);

    if(norm === 0){
      // Can't fire unless moving.
      return;
    }

    var relVel = Cosmos.Util.scale(
      Cosmos.Util.dir(this.vel),
      Cosmos.Bullet.SPEED
    );

    var bulletVel = [
      relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];

    var bullet = new Cosmos.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  };

  Ship.prototype.power = function (impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

})();
