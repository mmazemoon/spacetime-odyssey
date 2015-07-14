(function(){
  if (typeof Cosmos === "undefined" ){
    window.Cosmos = {};
  }

var MovingObject = Cosmos.MovingObject = function(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};

MovingObject.prototype.collideWith = function (otherObject) {
  // default do nothing
};

MovingObject.prototype.draw = function(context){
  context.fillStyle = this.color;

  context.beginPath();
  context.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  context.fill();
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  var centerDist = Cosmos.Util.dist(this.pos, otherObject.pos);
  return centerDist < (this.radius + otherObject.radius);
};

MovingObject.prototype.isWrappable = true;

MovingObject.prototype.move = function(){

  // incrementing position by velocity
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

  if (this.game.isOutOfBounds(this.pos)) {
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos);
    } else {
      this.remove();
    }
  }
};

MovingObject.prototype.remove = function () {
  this.game.remove(this);
};

})();
