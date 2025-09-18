const userConst = { name: "Bob" };
userConst.name = "Daniel"; 

let userLet = { name: "Bob" };
userLet.name = "Daniel"; 

console.log(userConst); 
console.log(userLet);  

const newUser = { name: "Charlie" };
// userConst = newUser; - зміна поля name - працює; зміна посилання на об'єкт - не допускає, бо const - стала змінна
userLet = newUser;    

//console.log(userConst); 
console.log(userLet);    