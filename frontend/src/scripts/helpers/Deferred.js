'use strict';

module.exports = function Deferred() {
  var d = {};
  d.promise = new Promise(function(resolve, reject) {
    d.resolve = resolve;
    d.reject = reject;
  });
  return d;
};
