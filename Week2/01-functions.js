//Named Function:

function funName() {
   // console.log("Hello Team");
}
funName();

//function Hoisting 

let xx = () => {
    // console.log("Hello Team");
 }
 xx();


//Named Function:

function funName() {
    let  a=10;
     const b=10;
     return a+b;
}

console.log(funName());

//Anonymous Function // Function expression.

let funVar =  () => {
    console.log("Hello Team this is Function Expression / anonymous function");
}
funVar();

let funVar2 =  () => {
    console.log("Hello Team this is Function Expression / anonymous function");
}
funVar2();

//Arrow Function :

let funArrow = () => {
    console.log("Hello Team this is a Arrow Function");
}
funArrow();

/* const multiply = (a, b) => a * b;
console.log(multiply(2, 2)); 
 */


//IIFE - Immediately invoked function

(function(){

console.log(`Hello Team this is a IIFE Function`);

})

()