const fruits = ["Banana", "Orange", "Apple", "Mango"];
//The length property returns the length (size) of an array
let size = fruits.length;
console.log(size);


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(fruits.toString());

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
//The at() method returns an indexed element from an array.
let fruit = fruits.at(2);

console.log(fruits.join(" - "));
//The pop() method returns the value that was "popped out":
console.log(fruits.pop());
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(fruits2.shift());
console.log(fruits2);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits2.unshift("Lemon");


const arr = ["Cecilie", "Lone"];
const ar = ["Emil", "Tobias", "Linus"];
//The concat() method creates a new array by merging (concatenating) existing arrays:
const arr4 = arr.concat(ar);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const mynewArray = arr1.concat(arr2, arr3);
console.log(mynewArray);


//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//The splice() method adds new items to an array.
fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2);
fruits2.splice(0, 1);
console.log(fruits2);

let position = fruits.indexOf("Apple") + 1;
console.log(position);
let positionLast = fruits.lastIndexOf("Apple") + 1;
console.log(positionLast);

console.log(fruits.includes("Mango"));
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);
