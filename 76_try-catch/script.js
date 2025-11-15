// const user = {
//     name : 'anurag',
//     age: 21
// }

// try{
//     console.log(user.address)
// } catch(err){
//     console.dir(err.message)
// } finally{
//     console.log('hello ji namaste')
// }

// console.log(3 + 7)

async function makeAsyncRequest() {
  try{
    const url = 'https://httpbin.org/delay/2'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch(err){
    console.log(err)
  }
}

makeAsyncRequest()