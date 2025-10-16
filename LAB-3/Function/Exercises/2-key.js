'use strict';

function generateKey(length, characters) {
  let result = '';
  const charsLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsLength);
    result += characters[randomIndex];
  }
  return result;
}

const characters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
const key = generateKey(16, characters);
console.log(key);
