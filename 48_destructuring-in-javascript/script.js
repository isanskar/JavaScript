const colors = ['red', 'green', 'yellow', 'pink', 'black','White']

// Array destructuring
// const color1 = colors[0];
// const color2 = colors[1];
// const color3 = colors[2];

const [color1,color2,color3] = colors;

// const [,,color3] = colors;

const {3 : a, 5 : b} = colors;


const user = {
  name: 'Anurag',
  age: 25,
  address: {
    city: 'Bangalore',
    state: 'Karnataka',
  },
}

// object destructuring
// const name = user.name;
// const age = user.age;

const {name,age} = user;

// const {name:username ,age:userAge} = user;

// const {address} = user;
// const {city} = address;

// const { address : {city} } = user;


// function destructuring
function userIntro({name,age,address:{city}}){
    console.log(name,age,city)
}

// userIntro(user)

function printColor([a,b,,g]){
    console.log(a,b,g)
}

printColor(colors);