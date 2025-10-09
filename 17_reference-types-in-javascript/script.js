const myName = "Anurag"

const username1 = ""
const username2 = ""

const user1 = {
    firstName : "Akash",

}

// const user2 = {
//     firstName : "Adarsh",
//     'last-Name' : "Singh",
//     Anurag : "Developer"
// }

// console.log(user2.firstName)
// console.log(user2['last-Name'])
// console.log(user2[myName])
// console.log(user2["first" + "Name"])


const user2 = {
    firstName : "Adarsh",
    lastName : "Singh",
    address : {
        city : "Bangalore",
        pinCode : 903202,
        state : "Karnataka",
        moreDetails : {
            population : 982673728,
            area : "4837 sq km",
        }
    }
}

// user2.age = 26
// user2["is-Graduate"] = true

//object destructing
const {city , state} = user2.address

console.log(city)
console.log(state)