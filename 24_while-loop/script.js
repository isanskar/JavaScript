console.log('Program Started')

// let i = 1

// while(i<101){
//     console.log(i)
//     i++
// }

let friends = ['Karan','Varun','Tejas','Bilal','Anurag','Love','Aman',]

let i = 0;
while(i < friends.length){
    console.log(`${i+1}. ${friends[i]}`)
    friends[i] = friends[i] + ' Procodrr'
    i++
}

console.log('Program Ended')