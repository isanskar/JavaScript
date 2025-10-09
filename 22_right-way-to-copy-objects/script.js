// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')


// Method 1
// const myFruits = []
// Object.assign(myFruits,fruits)
// myFruits.push('Dates')
// myFruits.push('Grapes')

// Method 2
// const myFruits = [ ...fruits ]

// Method 3
// const myFruits = [].concat(fruits)

// Method 4
const myFruits = fruits.slice()



const user1 = {
    firstName : 'Akash',
    lastName : 'Singh',
    pata : {
        city : 'delhi',
        pincode : '439009',
    },
    subjects : [ 'Maths', 'Physics', 'English']
}

// const user2 = user1
// user2.lastName = 'Pandey'

// Shallow copy

//Method 1
// const user2 = {}
// Object.assign(user2,user1)
// user2.lastName = 'Pandey'

// Method 2
// const user2 = { ...user1 }
// user2.lastName = 'Pandey'



// deep copy 
const user2 = JSON.parse(JSON.stringify(user1))