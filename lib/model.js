var data  = require('../data/data.json');
var index = require('../data/data-index.json');

var MIN_CODE_LEN = 2;
var MAX_CODE_LEN = 6;

function NAICS (data, index) {
  this._data = data || {};
  this._index = index || {};
}

NAICS.prototype = {

  all: function () {
    var items = [];
    for (key in this._data) {
      items.push(this._data[key]);
    }
    return items;
  },

  search: function (keywords) {
    keywords = keywords || '';

    var items = [];
    var results = index[keywords] || {};

    for (code in results) {
      var score = results[code];
      var object = data[code];
      items.push(object);
    }

    return items;
  },

  find: function (code) { 
    return data[code];
  },

  above: function (code) {
    code = code + '';
    var results = [];
    for (var i = code.length; i >= MIN_CODE_LEN; i--) {
      var result = this._data[ code.substr(0,i) ];
      if (result) results.push(result);
    }
    return results;
  },

  below: function (code,results) {
    code = code + '';
    results = results || [];
    for (var i = 0; i < MAX_CODE_LEN - code.length; i++)  {
      for (var j = 0; j < 10; j++) {
        var result = this._data[code+j];
        if (result) results.push(result);
        this.below(code+j, results)
      }
    }
    return results;
  }


}

module.exports = new NAICS(data, index);
