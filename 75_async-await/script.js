async function makeRequest(){
    const url = 'https://httpbin.org/delay/2'

    const response = await fetch(url)
    const data = await response.json()
    return data

    // or 
    
    // const data = await (await fetch(url)).json()
    // console.log(data)
}

makeRequest().then((data)=>{
    console.log(data)
})