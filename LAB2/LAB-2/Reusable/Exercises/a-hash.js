const phoneBook = {
    'Marcus': '3948203948',
    'Bob': '12408172094',
    'Kate': '32948290389',
    'Daniel': '35980921408'
};


function findPhoneByName(name) {
    if (phoneBook[name]) {           
        return phoneBook[name];      
    }
    return 'Контакт не знайдено';    
}

console.log(findPhoneByName('Marcus')); 
console.log(findPhoneByName('Bob'));    
console.log(findPhoneByName('Kate'));   
console.log(findPhoneByName('Daniel')); 
console.log(findPhoneByName('Dop'));    
