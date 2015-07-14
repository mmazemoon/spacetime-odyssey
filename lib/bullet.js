(function(){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var Bullet = Cosmos.Bullet = function (options){
    options.radius = Bullet.RADIUS;

    Cosmos.MovingObject.call(this, options);
  };

  Bullet.RADIUS = 2;
  Bullet.SPEED = 15;

  Cosmos.Util.inherits(Bullet, Cosmos.MovingObject);

  Bullet.prototype.collideWith = function (otherObject){
    if(otherObject instanceof Cosmos.Asteroid){
      this.remove();
      otherObject.remove();
    }
  };

  Bullet.prototype.isWrappable = false;
})();
