// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");
  
  // indexOf
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  
  // lastIndexOf  ->returns last index of a specified value
  function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World");
  
  // slice ->extracts a part of string //gives value betweeb start and end including start excluding end
  function getSlice(str, start, end) {  
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);
  
  // substring gives "end " next values after "start" not recommended touse
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end)); /////test
  }
  getSubstring("Hello World", 0, 5);
  
  // replace ->replaces a specified value with another

  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  // split ->converts string to array of substrings
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  // trim ->removes white space from both ends of string
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
  


  //NUMBERS

 // parseInt -> IT is a global function
 //converts anything to integer

 console.log(parseInt("42"));  // ->42
console.log(parseInt("42px"));  //->42
console.log(parseInt("3.14"));    // ->3
console.log(parseInt("absbd42px")); // -> it wont convert ,,must start with a number


//array

//push -> push element at the end of the array
//pop -> pop element from the end of the array
//shift ->pop element from the front
//unshift -> push something in beginning of array

//concat ->merge two arrays
//->array1.concat(array2)


const initialarray=[1,2,3];

function logthing(str){
console.log(str);
}

initialarray.forEach(logthing) //->will call logthing for every value of initialarray





