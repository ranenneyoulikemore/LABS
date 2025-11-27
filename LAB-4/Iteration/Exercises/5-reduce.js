function sum(...args){

    return args.reduce((total, num) => total + num, 0)
}
const a = sum(12, 90, 64);
console.log(a)