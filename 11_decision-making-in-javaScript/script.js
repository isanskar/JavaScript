const username = prompt("Enter your name")
const userAge = parseInt(prompt("Enter your age"))

debugger
console.log(username);
console.log(userAge);

if(userAge > 0 && userAge < 5){
    console.log(`${username} is a kid`);
    console.log(`he/she is playing`);
}
if(userAge >= 5 && userAge < 18){
    console.log(`${username} is a school student`);
    console.log(`he/she is studying maths`);
}
if(userAge >= 18  && userAge < 24){
    console.log(`${username} is a collage student`);
    console.log(`he/she is doing CSE`);
}
if(userAge >= 24 && userAge < 45){
    console.log(`${username} is a working professional`);
    console.log(`he/she is SWE`);
}
if(userAge >= 45 ){
    console.log(`${username} is retired`);
    console.log(`he/she is reading newspaper`);
}

console.log("Program End");