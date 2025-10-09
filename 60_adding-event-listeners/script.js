const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')


function sayHi(){
    console.log('hiiii');
}

function secondSayHi(){
    console.log('second hiiii');
}


// h1.onclick = sayHi
// h1.onclick = secondSayHi

// h1.addEventListener('click',sayHi)
// h1.addEventListener('click',secondSayHi)

let count = 1;

card.addEventListener('click',() => {
    // const newElement = document.createElement('div');
    // newElement.classList.add('card');
    const newElement = card.cloneNode();
    newElement.classList.remove('add-card')
    newElement.innerText = count++;
    container.appendChild(newElement);
})