// const user1 = {
//   firstName: 'Anurag',
//   lastName: 'Singh',
//   age: 25,
//   getAgeYear: function(){
//         return new Date().getFullYear() - user1.age;
//     }
// }

// const user2 = {
//   firstName: 'Akash',
//   lastName: 'Sharma',
//   age: 35,
//   getAgeYear: function(){
//         return new Date().getFullYear() - user2.age;
//     }
// }


function getUser(firstName, lastName, age){
    const user = {
        firstName,
        lastName,
        age,
        getAgeYear: function(){
            return new Date().getFullYear() - user.age;
        }
    }

    return user
}

const user1 = getUser('Akash','singh',32)
const user2 = getUser('Anurag','singh',24)

console.log(user1.getAgeYear() === user2.getAgeYear())

const arr1 = [1,2]
const arr2 = [3,4]

console.log(arr1.pop === arr2.pop)