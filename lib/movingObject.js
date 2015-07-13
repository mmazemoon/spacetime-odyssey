(function(){
  if (typeof Cosmos === "undefined" ){
    window.Cosmos = {};
  }

var MovingObject = Cosmos.MovingObject = function(options){
  this.pos = option.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};

MovingObject.prototype.draw = function(context){
  context.fillStyle = this.color;

  context.beginPath();
  context.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  context.fill();
};

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

})();
