const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//  [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]


console.log(Array.isArray("Hitesh"))  // false
console.log(Array.from("Hitesh"))  // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) //  [] //  interesting
/*
Array.from(): This static method creates a new, shallow-copied Array instance from an array-like or iterable object.
{name: "hitesh"}: This is a plain JavaScript object, not an array or an iterable (like a string, Map, Set).
Result: Since the object lacks iterable properties or a length property, Array.from() doesn't find any elements to convert and returns an empty array []
*/
Array.from(Object.keys({name: "hitesh"})) // would give ['name']
Array.from(Object.values({name: "hitesh"})) //   would give ['hitesh']
Array.from(Object.entries({name: "hitesh"})) // would give [['name' 'hitesh']]. 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]