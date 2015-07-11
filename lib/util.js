(function (){
  if (typeof Cosmos === "undefined"){
    window.Cosmos = {};
  }

  var inherits = Util.inherits = function(ChildClass, ParentClass){
    function Surrogate () { this.constructor = ChildClass; }
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

})();
