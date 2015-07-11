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


})();
