// fetch('https://dummyjson.com/products')
//     .then((res)=> res.json())
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err))

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    type: 'Stationary'
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log)
.catch((err)=> console.log(err))

// fetch('https://dummyjson.com/users')
// .then((res)=>res.json())
// .then((usersData)=>{
//     return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`)
// })
// .then((res)=>res.json())
// .then((postsData)=>{
//     return fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
// })
// .then((res)=>res.json())
// .then((data)=>console.log(data))