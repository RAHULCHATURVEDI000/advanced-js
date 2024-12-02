//DATE
const currentdate = new Date();
console.log(currentdate.getMonth()); //gives current year -1900

console.log(currentdate.getFullYear());  //gives current year exactly


// imp que-> calcuale the time taken by a function to count numbers from 1 to n
function calsum(n){
    let a=0;
    for(let i=0;i<n;i++){
        a=a+i;
    }
    return a;
}

const beforedate = new Date();
const beforetimeinmns= beforedate.getTime();
calsum(1000000);

const afterdate = new Date();
const aftertimeinms = afterdate.getTime();

console.log(afterdate - beforedate);


function currenttime(){
    const help =new Date;
    console.log(help.getTime().toString());
    
}

currenttime();

//JSON -> javascript object notation

JSON.parse //0>converts json string to js object
JSON.stringify//0>converts js object to json string


// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj); //retrieve all keys from objet as an array
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);//retrive all values of objects as an array
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);//obtain all the key value pair as nested arrays
    console.log("After Object.entries():", entries);

//output ->After Object.entries(): [ ["key1", "value1"], ["key2", "value2"], ["key3", "value3"] ]



  
    let hasProp = obj.hasOwnProperty("property"); //checks if object has any of its own property(non -inherited) ,, boolean indication
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" }); //takes all the values from the object ans assigns it to another target obejct
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
  