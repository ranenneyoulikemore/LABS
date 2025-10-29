function sum(...args) {
    let total = 0;

    for(const num of args){
      total += num;
    }

    return total;
}
const a = sum(1, 4, 10);
console.log(a)
