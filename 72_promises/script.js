const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn');

const p = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve({name :'sanskar'})
    // },4000)

    resolveBtn.addEventListener('click',()=>{
        resolve('promise resolved')
    })

    rejectBtn.addEventListener('click',()=>{
        reject('promise rejected')
    })

});

// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


p.then((data) => {
  console.log(data);
  return 155
}).then((data) => {
  console.log(data);
  return 'Anurag'
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})