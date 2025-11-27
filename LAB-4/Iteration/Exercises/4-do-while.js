function sum(...args) {
  let total = 0;
  let i = 0;

    do{
      total += args[i];
      i++;
    } while (i < args.length);

    return total;

}
const a = sum(2, 7, 3);
console.log(a)