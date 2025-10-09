const months = ['January', 'February', 'March', 'April', 'May','December']

// const capitalMonths = months.forEach((month,index) => {
//     console.log(index+1,month);
//     return month.toUpperCase();
// })

const capitalMonths = months.map((month,index,arr) => {
    // console.log(index+1,month);
    // console.log(arr);
    return month.toUpperCase();
})

// const FilteredMonths = months.filter((month,index,arr) => {
//     console.log(month.includes('M') || month.includes('m'));
//     // console.log(arr);
//     // return month.includes('M') || month.includes('m');
//     return month.toLowerCase().includes('m');
// })


const FilteredMonths = months.filter((month,index,arr) => {
    // console.log(month.includes('M') || month.includes('m'));
    // console.log(arr);
    // return month.includes('M') || month.includes('m');
    return index >= 3;
})


const students = [
    {
        name: 'Akash',
        age: 21,
    },
    {
        name: 'Adarsh',
        age: 17,
    },
    {
        name: 'Amir',
        age: 18,
    },
    {
        name: 'Raman',
        age: 23,
    },
    {
        name: 'Nidhi',
        age: 16,
    },
]


// Chaining methods

// const adultStudent = students.filter( (student) =>{
//     console.log(student.age >= 18);
//     return student.age >= 18;
// }).map((student)=>{
//     return student.name;
// }).filter((student)=>{
//     return student.includes('A');
// })
