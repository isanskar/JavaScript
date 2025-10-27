const image = document.querySelector("img");
const button = document.querySelector('button');

// const user = {
//   userId: 1,
//   id: 1,
//   title: 'delectus aut autem',
//   completed: false
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         console.log('Got the data')
//         console.log(json)
//       })

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

button.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
        image.src = json.message
    })
})

