const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener('click',(e)=>{
    // e.stopPropagation();
    console.log('6. window Clicked')
},{capture: true})

document.addEventListener('click',(e)=>{
    console.log('5. document Clicked')
},{capture: true})

document.body.addEventListener('click',(e)=>{
    console.log('4. Body Clicked')
},{capture: true})

green.addEventListener('click',(e)=>{
    console.log('3. Green Clicked')
},{capture: true})

pink.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('2. Pink Clicked')
},{capture: true})

blue.addEventListener('click',(e)=>{
    console.log('1. Blue Clicked')
},{capture: true})

// blue.addEventListener('click',(e)=>{
//     console.log('1. Blue Clicked')
// },{once: true})