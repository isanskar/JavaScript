const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

let count = 1

// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')

//     newCard.addEventListener('click',(e)=>{
//         newCard.remove();
//     })

//     newCard.innerText = count++
//     container.append(newCard)
// })


addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})


container.addEventListener('click',(e)=>{
    if(e.target !== container){
        e.target.remove();
    }
})