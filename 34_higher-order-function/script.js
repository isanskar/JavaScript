// Higher order functions
function a(b){
    console.dir(b)

    b();
}


// Call back functions
// functions which are passed in fuctions as
a(function (){
    console.log('hello');
});