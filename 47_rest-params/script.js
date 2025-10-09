const nums1 = [1, 2, 3, 4]

// function add(a,b,c,...nums){
//     console.log(a,b,c)
//     console.log('nums :',nums)
//     let sum = 0;
//     for(let i=0;i<nums.length;i++){
//         sum += nums[i]
//     }
//     return sum;
// }



// function add(){
//     return [...arguments].reduce( (acc,curr) => {
//         return acc + curr;
//     },0)
// }

// function add(){
//     return Array.from(arguments).reduce( (acc,curr) => {
//         return acc + curr;
//     },0)
// }


function add(...nums){
    return nums.reduce( (acc,curr) => {
        return acc + curr;
    },0)
}

const result = add(...nums1);