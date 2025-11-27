const contract = (fn, ...types) => {
  const resultType = types.pop();
  return (...args) => {
    if (args.length !== types.length) {
      throw new TypeError('Argument count mismatch');
    }

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const type = types[i];
      const name = type.name.toLowerCase();
      
      if (typeof arg !== name && !(arg instanceof type)) {
        throw new TypeError(`Argument ${i} type mismatch`);
      }
    }

    const res = fn(...args);
    const resName = resultType.name.toLowerCase();

    if (typeof res !== resName && !(res instanceof resultType)) {
      throw new TypeError('Result type mismatch');
    }

    return res;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);
