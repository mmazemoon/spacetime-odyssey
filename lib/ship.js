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

  Ship.prototype.power = function (impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

})();
