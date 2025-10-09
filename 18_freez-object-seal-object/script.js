let username = "Akash"

const user = {
  firstName: 'Adarsh',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// to delete anything from object
// delete user.firstName

// Object.seal(user)
Object.freeze(user)

console.log("firstName" in user) 


