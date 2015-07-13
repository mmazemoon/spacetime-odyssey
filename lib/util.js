(function (){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var Util = Cosmos.Util = {};

  // Return a randomly oriented vector with the given length.
  var randomVec = Util.randomVec = function(length){
    var deg = 2 * Math.PI * Math.random();

    return scale([Math.sin(deg), Math.cos(deg)], length);
  };

  // Scale the length of a vector by the given amount.
  var scale = Util.scale = function (vec, m){
    return [vec[0] * m, vec[1] * m];
  };

  var inherits = Util.inherits = function(ChildClass, ParentClass){
    function Surrogate () { this.constructor = ChildClass; }
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

})();
