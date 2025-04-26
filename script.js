let data = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let newNumber = 102;
let position = 3;
data.splice(position, 0, newNumber, 103);
// console.log(data);

let newArray = data.slice(position, 5);
// console.log(newArray);
