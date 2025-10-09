const paragraph = document.querySelector('p')

const h1 = document.querySelector('h1')

// console.log(paragraph.textContent)

// console.log(paragraph.innerText)

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
    link.classList.add('greenLink')
    // link.classList.toggle('greenLink')
}


// change box color
document.querySelector("body > div > button").onclick = function(){
    document.querySelector("#box").style.backgroundColor = 'orange'
    document.querySelector("#box").style.padding = '20px'
    document.querySelector("#box").style.fontSize = '20px'
}


// toogle theme
document.querySelector("body > button").onclick = function(){
    document.querySelector("body").classList.toggle('dark-theme');
}

// cssText use
document.querySelector("body > div > button:nth-child(3)").onclick = function(){
    document.querySelector("#box").style.cssText = `
        background-color: pink;
        border: 2px solid blue;
        font-size: 15px;
    `
}
// document.querySelector("body > div > button:nth-child(3)").onclick = function(){
//     document.querySelector("#box").style.cssText = `
//         border: 2px solid red;
//         background-color: pink;
//         font-size: 20px;
//     `
// }