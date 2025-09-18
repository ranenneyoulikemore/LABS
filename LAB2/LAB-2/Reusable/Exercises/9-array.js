const contacts = [
    {name: 'Marcus', phone:'3948203948'},
    {name:'Bob', phone:'12408172094'},
    {name:'Kate', phone:'32948290389'},
    {name:'Daniel', phone:'35980921408'},
]

function findPhoneByName(name){
    for( let i = 0; i < contacts.length; i++){
        if(contacts[i].name === name){
            return contacts[i].phone;
        }
    }
    return 'Контакт не знайдено';
}

console.log(findPhoneByName('Marcus'));
console.log(findPhoneByName('Bob'));
console.log(findPhoneByName('Kate'));
console.log(findPhoneByName('Daniel'));
console.log(findPhoneByName('Dop'));