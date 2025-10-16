'use strict';

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

const result = Object.keys(iface)                
  .filter(key => typeof iface[key] === 'function')
  .map(key => [key, iface[key].length]);          

console.log(result);


