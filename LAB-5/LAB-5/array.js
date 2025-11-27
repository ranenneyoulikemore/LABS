'use strict';

const array = () => {
  const data = [];
  const arr = i => data[i];
  arr.push = x => data.push(x);
  arr.pop = () => data.pop();
  return arr;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());