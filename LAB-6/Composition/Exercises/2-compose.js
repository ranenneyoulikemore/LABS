'use strict';

const compose = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('All arguments must be functions');
  }

  const handlers = [];

  const fn = (x) => {
    let res = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (e) {
      for (const h of handlers) h(e);
      return undefined;
    }
  };

  fn.on = (name, handler) => {
    if (name === 'error' && typeof handler === 'function') {
      handlers.push(handler);
    }
  };

  return fn;
};

const inc = x => x + 1;
const twice = x => x * 2;
const boom = x => { throw new Error('fail'); };

const f1 = compose(inc, twice, inc);
console.log(f1(3));

const f2 = compose(inc, boom, twice);
f2.on('error', e => console.log('Error:', e.message));
console.log(f2(5));

module.exports = { compose };
