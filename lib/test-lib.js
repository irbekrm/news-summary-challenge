(function(exports) {
  exports.expect = (action, arg1, arg2) => console.log(action(arg1, arg2) ? 'TEST PASSED' : 'TEST FAILED');

  exports.equality = (actual, expected) => Array.isArray(actual) && Array.isArray(expected) ? actual.join('') === expected.join('') : actual === expected;

  exports.membership = (collection, member) => collection.includes(member);
})(this);


