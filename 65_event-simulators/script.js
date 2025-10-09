const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const addCardButton = document.querySelector('.add-card')
const input = document.querySelector('input')
const form = document.querySelector('form');

let count = 1;

card.addEventListener('click',() => {
    const newElement = document.createElement('div');
    newElement.classList.add('card');
    newElement.innerText = count++;
    container.appendChild(newElement);
    
})



// setTimeout(() => {
//     input.focus();
//     console.log('Input Focused')
// }, 1000);


// setTimeout(() => {
//     input.blur();
//     console.log('Input blurred')
// }, 3000);


// setTimeout(() => {
//     form.submit();
//     console.log('Form submitted');
// }, 3000);


// form.reset();


// for(let i=0;i<1000;i++){
//     addCardButton.click()
// }

// const intervalId = setInterval(()=>{
//     if(count > 999){
//         clearInterval(intervalId);
//     }
//     addCardButton.click()
// },10)

