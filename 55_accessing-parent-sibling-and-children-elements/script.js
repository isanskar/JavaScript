const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

h1.style.color = 'hotpink';
h1.style.backgroundColor = "brown";

const allLinks = document.querySelectorAll('a')

// allLinks.forEach((curr) => {
//     curr.style.color = 'teal';
//     curr.style.textDecorationLine = "none";
//     curr.style.fontWeight = 700;
//     curr.style.fontFamily = 'cursive';
//     curr.style.fontSize = '18px';
// })

for(const link of allLinks){
    // link.style.color = 'teal';
    // link.style.textDecorationLine = "none";
    // link.style.fontWeight = 700;
    // link.style.fontFamily = 'cursive';
    // link.style.fontSize = '18px';

    // link.style.cssText = `
    // color: teal;
    // font-family: cursive;
    // font-weight: 700;
    // text-decoration-line: none;
    // font-size: 18px;`

    link.className = "myLink"
    link.classList.add('green-link')
    // link.classList.toggle('green-link')
}


const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)");