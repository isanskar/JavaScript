function makeHttpRequest(method,url,callback){
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load',()=>{
        callback(xhr);
    })

    xhr.open(method,url);

    xhr.send();
}


// callback Hell

makeHttpRequest('GET','https://dummyjson.com/users',(usersdata)=>{
    makeHttpRequest('GET',`https://dummyjson.com/posts/user/${usersdata.response.users[0].id}`,(postsdata)=>{
        makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postsdata.response.posts[0].id}`,(commentsdata)=>{
            makeHttpRequest('GET',`https://dummyjson.com/users/${commentsdata.response.comments[0].user.id}`,(userdata)=>{
                console.log(userdata.response)
            })
        })
    })
});
