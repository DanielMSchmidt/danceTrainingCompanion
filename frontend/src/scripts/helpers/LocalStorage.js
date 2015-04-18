'use strict';

var PREFIX = 'DanceTrainingCompanionApp';

var Storage = {
  setObject: function(key, value) {
    return localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },

  getObject: function(key) {
    return JSON.parse(localStorage.getItem(PREFIX + key));
  },
};

module.exports = Storage;
