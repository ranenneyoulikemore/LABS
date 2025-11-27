const persons = {
  tao: { born: 1942, died:1983},
  jack: { born: 1827, died:1900},
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(obj) {
    const result = {};
    for(const person in obj){
      result[person] = obj[person].died - obj[person].born;
    }
    return result;
}
console.log(ages(persons))