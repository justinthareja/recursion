// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

 if (obj === null) {
    console.log('typeof object is null');
    return 'null';
  }

  if (typeof obj === 'function') {
    console.log('typeof obj is function')
    return undefined;
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    console.log('typeof obj is number or boolean')
    return obj.toString();
  }

  if (typeof obj === 'string') {
    console.log('typeof obj is string')
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    console.log('obj is an array');
    var result = '['

    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        result += ',';
      }
    }

    result += ']'
    return result;
  }

  if (typeof obj === 'object') {
      var result = "{";
      var keys = Object.keys(obj);

    for(var i = 0; i < keys.length; i++){
      if(typeof obj[keys[i]] === 'function' || typeof obj[keys[i]] === 'undefined') { 
        continue;
      }

      result += stringifyJSON(keys[i]) + ":" + stringifyJSON(obj[keys[i]]);
      if(i < keys.length - 1) {
        result += ',';
      } 
    }

    result += '}';

    return result

  }


};


