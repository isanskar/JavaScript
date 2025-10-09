const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

const animals = ['Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger']

const oddNumbers = [1,3,5,7,9]

// evenNumbers.shift()
// evenNumbers.unshift(0)

const addedArray1 = evenNumbers.concat(animals)
const addedArray2 = animals.concat(evenNumbers,oddNumbers)

const elementIndex = evenNumbers.indexOf(6)
const isPresent = animals.includes('Cat')

const subString1 = evenNumbers.slice(4)
const subString2 = evenNumbers.slice(4,8)

// const subString3 = evenNumbers.splice(2,2,'bonky') //modify original array