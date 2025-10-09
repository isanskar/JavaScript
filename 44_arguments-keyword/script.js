// function add(){
//     let sum = 0
//     for(let i=0;i < arguments.length;i++){
//    // console.log(i);
//         sum += arguments[i];
//     }
//     return sum;
// }

// const add = function (){
//     let sum = 0
//     for(let i=0;i < arguments.length;i++){
//         // console.log(i);
//         sum += arguments[i];
//     }
//     return sum;
// }


// rest operator used in arrow function coz it don't have argument keyword
// const add = (...nums) => {
//     let sum = 0
//     for(let i=0;i < nums.length;i++){
//         // console.log(i);
//         sum += nums[i];
//     }
//     return sum;
// }


// convert argument to array and return sum of array 
function add1(){
    const arr = [...arguments]
    const result = arr.reduce((acc,curr)=>{
        return acc + curr;
    },0)
    return result;
}