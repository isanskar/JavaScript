function makeHttpRequest(method,url){
    const xhr = new XMLHttpRequest();
    
    xhr.responseType = 'json';

    const promise = new Promise((resolve, reject)=>{
        xhr.addEventListener('load',()=>{
            resolve(xhr.response);
        })

        xhr.addEventListener('error',()=>{
            reject('request rejected')
        })
    });

    xhr.open(method,url);

    xhr.send();

    return promise;
}


// callback Hell

// makeHttpRequest('GET','https://dummyjson.com/users',(usersdata)=>{
//     makeHttpRequest('GET',`https://dummyjson.com/posts/user/${usersdata.response.users[0].id}`,(postsdata)=>{
//         makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postsdata.response.posts[0].id}`,(commentsdata)=>{
//             makeHttpRequest('GET',`https://dummyjson.com/users/${commentsdata.response.comments[0].user.id}`,(userdata)=>{
//                 console.log(userdata.response)
//             })
//         })
//     })
// });

makeHttpRequest('GET','https://dummyjsom.com/users')
.then((usersData)=>makeHttpRequest('GET',`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((postsData)=>makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
.then((commentsData)=>makeHttpRequest('GET',`https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
.then((userData)=>{console.log(userData)})
.catch((err)=>{console.log(err)});
