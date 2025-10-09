// // function declaration

// function Square(num){
//     return num * num;
// }


// function expression

// const Square = function(num){
//     return num * num;
// }


// arrow function expression

// const Square = (num) => {
//     return num * num;
// }


// implicit return (implicit means automatic)
const Square = num => num * num;

const Add = (num1,num2) => num1 + num2;

const random = () => (
    Math.floor((Math.random()*10)+1)
)


// setTimeout( ()=>{
//     console.log('hello')
// },2000);
