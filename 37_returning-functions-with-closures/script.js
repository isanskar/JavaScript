

function outer(){

    const a = 2;

    function parent(){

        const b = 4;

        // function add(){
        //     console.log(a + b);
        // }

        // return add;

        return function() {
            console.log(a + b);
        };
    }

    return parent();
}

const add1 = outer();


console.dir(add1);