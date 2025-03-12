//The length property returns the length of a string:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let char = text.charAt(0);
console.log(char);

let text1 = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work
console.log(text1);

//slice() extracts a part of a string and returns the extracted part in a new string.
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

let part1 = text.slice(-12);
console.log(part1);

//A string is converted to upper case with toUpperCase()
let text2 = text1.toUpperCase();
console.log(text2);

//concat() joins two or more strings:
let text3 = "Hello";
let text4 = "World";
let text5 = text3.concat(" ", text4);

//The trim() method removes whitespace from both sides of a string:
 text2 = text1.trim();
 console.log(text2);
 
 //A string can be converted to an array with the split() method:
 text.split(",");
 console.log(text);
 
 //If the separator is "", the returned array will be an array of single characters:
 text.split("")
 console.log(text);

 
 //the indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
 let index = text.indexOf("CDEF");
 console.log(index);

 index = text.lastIndexOf("locate");
 console.log(index);
 
 text.match("CDE");
 
 // The includes() method returns true if a string contains a specified value.
 text.includes("world");