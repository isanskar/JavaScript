const message = "Hello World!"
const faltuMessage = "          Hey there whats up! I am Anurag          "
const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLowerCase()     //chaining

const replacedMessage = finalMessage.replace("Hey","Hello")

const lastFourDigits = "7856"
const maskedAccountNumber = lastFourDigits.padStart(16,"*")


const capitalMessage = message.toUpperCase()

//Template literals
const bankBalance = 976


const concatenateString = `Last four digits of account is `.concat(lastFourDigits)
const templateString = `account number is ${lastFourDigits.padStart(16,"*")}.`
const templateString2 = `You have $${bankBalance} in your account`


const addedString = 'You have ₹' + bankBalance + ' in your account.'