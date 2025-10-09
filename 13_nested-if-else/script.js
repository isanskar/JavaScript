
const username = 'Atul' 
const userAge = 19

if(username){
    console.log(username)   
}

if(userAge){
    console.log(userAge)
}

debugger

if(userAge > 0 && userAge < 5){
    console.log(`${username} is a kid`);
    console.log(`he/she is playing`);
}
else if(userAge >= 5 && userAge < 18){
    console.log(`${username} is a school student`);
    console.log(`he/she is studying maths`);
}
else if(userAge >= 18  && userAge < 24){
    console.log(`${username} is a collage student`);
    console.log(`he/she is doing CSE`);
    if(userAge > 20){
        console.log('user is above 20 year');
    }
    else{
        console.log('User is not above 20');
        if(username.length >=5 ){
            console.log(`user's name have more than 5 alphabets`);
        }
        else{
            console.log(`name is too short`);
        }
    }
}
else if(userAge >= 24 && userAge < 45){
    console.log(`${username} is a working professional`);
    console.log(`he/she is SWE`);
}
else if(userAge >= 45 && userAge < 121 ){
    console.log(`${username} is retired`);
    console.log(`he/she is reading newspaper`);
}
else if(userAge >= 121) {
    console.log(`${username} is immortal`)
}
else{
    console.log(`Enter valid age`);
}

console.log("Program End");