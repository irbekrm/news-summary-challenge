(function(exports) {
  exports.headlineMaker = headlines => 
    headlines.map(headline => `<li>${headline}</li>`).join('');
})(this);
