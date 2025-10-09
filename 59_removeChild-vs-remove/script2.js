let container = document.querySelector('.container');


// trick 1 best way and most professional

for(let i=1;i<=100;i++){
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');

    const newImage = document.createElement('img');
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p');
    paragraph.innerText = i;

    imageContainer.append(newImage,paragraph);

    container.appendChild(imageContainer);

}


// trick 2

// for(let i=1;i<=100;i++){
//     const imageContainer = document.createElement('div');
//     imageContainer.classList.add('img-container');

//     const newHtml = `
//             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
//             <p>${i}</p>
//             `

//     imageContainer.innerHTML = newHtml;

//     container.appendChild(imageContainer);

// }





// trick 3

// let totalHtml = ``;

// for(let i=1;i<=100;i++){
//     totalHtml += `
//             <div class="img-container">
//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
//                 <p>${i}</p>
//             </div>
//             `
// }

// container.innerHTML = totalHtml;


const myImage = document.querySelector("body > div > div:nth-child(4)");