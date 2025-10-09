const h1 = document.querySelector('h1')
const container = document.querySelector(".container")


const paragraph = document.createElement('p')

// paragraph.innerHTML = 'Hello';
// paragraph.classList.add('Helloo')
// paragraph.id = 'namaste';
// container.appendChild(paragraph)



// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// const firstImg = document.querySelector('img');

// for(let i=2;i<=200;i++){
//     const temp = firstImg.cloneNode(true);
//     temp.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     console.log(temp.src)
//     container.appendChild(temp);
// }



for(let i=1;i<=100;i++){
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(newImg);
}