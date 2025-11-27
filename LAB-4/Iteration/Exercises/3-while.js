function sum(...args) {
  let total = 0;
  let i = 0;

  while(i < args.length){
    total += args[i];
    i++;
  }
  return total;
}

const a = sum(2, 5, 8);
console.log(a)
