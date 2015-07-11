(function (){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var inherits = Util.inherits = function(ChildClass, ParentClass){
    function Surrogate () { this.constructor = ChildClass; }
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  // Return a randomly oriented vector with the given length.
  var randomVec = Util.randomVec = function(length){
    return var deg = 2 * Math.PI * Math.random();
  };

})();
