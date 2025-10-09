const userInput  = document.querySelector('#username');
const paragraph = document.querySelector('p');
const form = document.querySelector('form');

let inputValue;

// userInput.addEventListener('click', ()=>{
//     console.log('input clicked');
// })

// userInput.addEventListener('dblclick', ()=>{
//     console.log('input double clicked');
// })


// userInput.addEventListener('input', (e)=>{
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// })


// userInput.addEventListener('change', (e)=>{
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
// })

// userInput.addEventListener('focus', (e)=>{
//     console.log(e);
//     console.log(e.type)
// })

// userInput.addEventListener('blur', (e)=>{
//     console.log(e);
//     console.log(e.type)
// })

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const myFormData = new FormData(form)

    for (const p of myFormData.entries()) {
        console.log(p);
    }
})

// form.addEventListener('click', (e) => {
//     // e.preventDefault()
//     console.log(e);
//     console.log('From Clicked');
// })



// form.addEventListener('submit',(e)=>{
//     // e.preventDefault();
//     console.log(e);
//     console.log('form submitted');
// })