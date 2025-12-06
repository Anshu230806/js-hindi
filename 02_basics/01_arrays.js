// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // insert elemnet at start 
// myArr.shift()   //  delete element from start

// console.log(myArr.includes(9)); // false 
// console.log(myArr.indexOf(3)); // 3

// const newArr = myArr.join()  //
// problem  with join is this that it make array of array while joining   e.g[1,2,3,[4,5]]

// console.log(myArr);
// console.log( newArr);


// slice, splice
// slice doesnot change the original array and also slice doesnot include last given index elemnet 
// splice changes the original array  and splice includes last given index  element 
console.log("A ", myArr);   //  A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
 
console.log(myn1);    /// [ 1, 2 ]
console.log("B ", myArr);   // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  //  C  [ 0, 4, 5 ]   , here original array changed 
console.log(myn2);// [ 1, 2, 3 ]