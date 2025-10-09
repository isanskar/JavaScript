const nums = [1,2,3,4,5];

// const sum = nums.reduce( (accumulator,current,index) => {
//     console.log(index);
//     console.log(accumulator,current);
//     return accumulator + current;
// },10);

const product = nums.reduce( (accumulator,current) => {
    console.log(accumulator,current);
    return accumulator * current;
});