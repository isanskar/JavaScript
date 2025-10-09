const nameTag = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name')
const ageInput = document.querySelector('.age')
const ageTag = document.querySelector('.age-tag')


// // nameTag.innerText = localStorage.myName
// nameTag.innerText = localStorage.getItem('myName')
// nameInput.addEventListener('input', (e)=>{
//     // localStorage.myName = e.target.value
//     localStorage.setItem('myName', e.target.value )
//     nameTag.innerText = localStorage.getItem('myName')
// })

// ageTag.innerText = localStorage.getItem('myAge')
// ageInput.addEventListener('input', (e)=>{
//     // localStorage.myName = e.target.value
//     localStorage.setItem('myAge', e.target.value )
//     ageTag.innerText = localStorage.getItem('myAge')
// })


const myData = JSON.parse(localStorage.getItem('myData')) || {};

if(myData.name){
    nameTag.innerText = myData.name;
}

if(myData.age){
    ageTag.innerText = myData.age;
}


nameInput.addEventListener('input' , (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData',JSON.stringify(myData));
    nameTag.innerText = e.target.value;
})

ageInput.addEventListener('input' , (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData',JSON.stringify(myData));
    ageTag.innerText = e.target.value;
})

