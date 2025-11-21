const name="hitesh "
const repoCount = 50

// console.log(name + repoCount + " value ");
// better way  using bacticks  string interpotation 
console.log(`my name is ${name} and my repoCount ${repoCount}  `);

const gameName = new String("hitesh-hc")
console.log(typeof gameName ); // object 
console.log(gameName);  // [String: 'hiteshhc']

console.log(gameName[0]); // h
//console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase());  //HITESHHC

// console.log(gameName.__proto__)  // {}  in console it shows char at every index in string object 
// console.log(gameName.toUpperCase());  // HITESHHC

console.log(gameName.charAt(2));  // t
console.log(gameName.indexOf("t"));  // 2

const newString = gameName.substring(0,4); 
console.log(newString); // hite
// if -ve value given to substring then it automatically start with 0 index 
const newstring = gameName.substring(-8,4); 
console.log(newstring); // hite
const anotherString =  gameName.slice(-7, 4 );
/// slice also take negative values and if -ve value given to it then it print in reverse order 
// first index is start index and second index is end index 
console.log(anotherString);  ///  ite 


const newStringOne = "   hitesh  "
const str = newStringOne.trim();

console.log(newStringOne);  //     hitesh
console.log(str); // hitesh


const url ="http://hitesh.com/hitesh%20chaudary"

console.log(url.replace("%20" , "-"));
console.log(url.includes('sundar'));  //  false

console.log(gameName.split('-'));  // [ 'hitesh', 'hc' ]








