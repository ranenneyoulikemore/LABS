//task_1
function incNumber(x) {
  return x + 1;
}

const a = 10;
const b = incNumber(a);
console.dir({ a, b }); 

//task_2
function incObject(num) {
  num.n = num.n + 1;
}

const obj = { n: 15 };
incObject(obj);
console.dir(obj); 

//task_3
let arr = [1, 2, -1, -5, true, false, 50, 'JS', 'hello', 23, 'computer', -32, 'comments', -235, 31, false, 'glass', 3.14, [1,2,3], null, function(){}]
const typesCount = {};
for (const item of arr){
    const type = typeof item;


    if(!(type in typesCount)){
            typesCount[type] = 0;
    }
    typesCount[type]++;
}
console.dir(typesCount);