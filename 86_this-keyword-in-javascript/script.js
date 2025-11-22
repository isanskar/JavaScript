// function Hi(){
//     this.hello = 'world'
//     console.log(this)
// }

// new Hi()

// const User = {
//     firstName : 'Anurag',
//     lastName : 'singh',
//     tags: ['a','b','c'],
//     printtags : ()=>{
//         console.log(this)
//     }
// }

// const body = document.querySelector('body');

// body.addEventListener('click',(e) => {
//     console.log(e.target)
//     console.log(e.currentTarget)
//     console.log(this)
// })

class User {
    constructor(){
        this.firstName = 'Anurag'
        console.log(this)
    }

    getUser(){
        console.log(this)
    }
}