'use strict'

const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// console.log('************************')

// for( const fruit of fruits){
//     console.log(fruit);
// }

const username = 'ovi shrivastava';

// for(const letter of username){
//     console.log(letter);
// }

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Bangalore',
}

// not prefered slow
// for(const key in person){
//     console.log(person[key]);
// }

const personValues = Object.values(person);
const personEntries = Object.entries(person);

// better than for in
const personKeys = Object.keys(person);
for(const key of personKeys){
    console.log(person[key]);
}



