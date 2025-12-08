function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// here , sayMyName is reference and sayMyName()  this is exexution of function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
console.log(addTwoNumbers(3, 5));  // 8
// Function Declarations
function addTwoNumbers(number1, number2){  // number1 and number2 are parameters 

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // 3 , 5 are arguments here 

// console.log("Result: ", result);  // undefined if we donot return value from function


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) // undefined  just logged in
// if you donot pass any argument in function then it will show undefined if doesnot write if condition for checking 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


/// topic Arrow function
// A function expression is a function assigned to a variable.
//  The function above is actually an anonymous function (a function without a name).
//Function expressions are not hoisted in the same way as function declarations. They are created when the execution reaches their definition, and cannot be called before that point:
// let sum = MYfunction(2, 3); // ⛔ Will generate error.
let MYfunction = function(a1, b1){
 return  a1 + b1 
}
// this is arrow function which return a+b 
let MyFunction2 = (a, b) => a+b
let hello = () => "Hello World!";
//NOTE :  This works only if the function has only one statement.
// Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
let func = function(...args){
  for(let i of args ){
    console.log(i);
  }
}
func(2,4,5,6,7,8,5,4,2,5); // any number of argument 


// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.

function myfunc(){
   let maxi = -Infinity;
 for(i =0 ;i< arguments.length ; i++){  // size() is wrong its length
   if(arguments[i] > maxi){
    maxi  = arguments[i];
   }
 }
 console.log(maxi);
}
 
myfunc(3,4,5,2,5,7,8,5,8,9);

// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

// Objects are Passed by Reference in js 



// some arrow functions 

// This will not work
//let myFunction3 = (x, y) => { x * y } ;

// This will not work
//let myFunction4= (x, y) => return x * y ;

// Only this will work
let myFunction5 = (x, y) => { return x * y };
// Works - implicit return (no curly braces)
let myFunction1 = (x, y) => x * y;

// Also works - parentheses can help with clarity
let myFunction2= (x, y) => (x * y);



// Function Constructor 

let Myfunc = new Function("a" , "b" , "return a*b" );

console.log(Myfunc(3, 4)); 
console.log(typeof(Myfunc));  // function

// Most of the time, you can avoid using the new keyword in JavaScript.
// Functions are Objects
//The typeof operator in JavaScript returns "function" for functions.

// JavaScript functions have both properties and methods.

// The arguments.length property returns the number of arguments received when the function was invoked:
// The toString() method returns the function as a string:


// topic : Function Hoisting
// Hoisting applies to variable declarations and to function declarations.

//Because of this, JavaScript functions can be called before they are declared:
// Functions defined using an expression are not hoisted.


// Function Invocation
// The function above does not belong to any object. But in JavaScript there is always a default global object.

//In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.

//In a browser or web browser the page object is the browser window. The function above automatically becomes a window function.

// myFunction() and window.myFunction() is the same function:
// best practice to invoke a function 
//   function myFunction(a, b) {
 //   return a * b;
//   }
 //  window.myFunction(10, 2); 



