var months = ["Jan", "Feb", "Mar", "Apr"];
var spliced = months.toSpliced(0,1);

console.log(spliced);
console.log(months);




var months1 = ["Jan", "Feb", "Mar", "Apr"];
     months1.splice(0,1);

console.log(months1);
//------------------------------------splice method
// //["Feb", "Mar", "Apr"]
// ["Jan", "Feb", "Mar", "Apr"]
// ["Feb", "Mar", "Apr"]

//-----------------------------slice method

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr=array.slice(3,6);
var arr1=array.slice(0,3);
var arr2=array.slice(6,10);
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(array);

var arr3=arr1.concat(arr2);
console.log(arr3);
//---output
// [4, 5, 6]
// [1, 2, 3]
// [7, 8, 9]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [1, 2, 3, 7, 8, 9]
//----------------By using the above array as input copy all the items of array and display with new array using both slice and splice methods.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr=array.slice(3,6);
console.log(arr);
console.log(array);
var arr1=array.splice(3,3,6,4,5);
console.log(arr1);
console.log(array);

// //var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arr=array.slice(3,6);
// console.log(arr);
// console.log(array);
// var arr1=array.splice(3,3,6,4,5);
// console.log(arr1);
// console.log(array);

//----Find the position of the last occurrence of the “apple“ of given below array.array: [“Mango“, “Apple“, ”Guava”, “Banana“, “Mango“, “Apple“, “Apple“]

let array = ["Mango", "Apple", "Guava", "Banana", "Mango", "Apple", "Apple"];

let lastIndex = array.lastIndexOf("Apple");

console.log("Position of last occurrence of 'Apple': " + lastIndex);
// "Position of last occurrence of 'Apple': 6"

//Find the index of the first element that is larger than 18array: [4, 8, 10, 17, 24, 20, 19, 27];
var array= [4, 8, 10, 17, 24, 20, 19, 27];
var result=[];
var index;

 function arr2(){
     for(var i=0;i<array.length;i++){
       if(array[i]>18){
        result.push(array[i]);
         index=i-1;
         
       }
     }
}
arr2();
console.log(result);
console.log(index);
// //[24, 20, 19, 27]
// 6
//---arrays find()search methods
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);
let first1 = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 16;
}

console.log(first);
console.log(first1);


const numbers1 = [4, 9, 16, 25, 29];
let high = numbers1.findLast(x => x > 16);
let high1 = numbers1.findLastIndex(x => x > 16);
console.log(high);
console.log(high1);
// //--------3
// 25
// 29
// 4

//----------Find the sum of all numbers in a given array
array: [45, 4, 9, 16, 25, 50, 30, 16, 4];
var array=[45, 4, 9, 16, 25, 50, 30, 16, 4];
var arr=0;

for(var i=0;i<array.length;i++){
  var arr=array[i]+arr;
  
}
console.log(arr);
//199
//-----Display all the persons who are live in “Hyderabad“ for a given array.


// var persons=[{id:1, name:'Daniel', age:25, place:'Hyderabad'},
//        {id:2, name:'Joe', age:28, place:'Bangalore'},
//        {id:3, name:'Jai', age:24, place:'Chennai'},
//        {id:4, name:'Michael', age:31, place:'Mumbai'},
//        {id:5, name:'John', age:27, place:'Hyderabad'},
//        {id:6, name:'Robert', age:30, place:'Hyderabad'}]


// // Function to filter persons living in Hyderabad
// function personsInHyderabad(personsArray) {
//     return personsArray.filter(person => person.place === "Hyderabad");
// }


// // Call the function to get persons living in Hyderabad
// const personsInHyd = personsInHyderabad(persons);

// // Displaying the persons living in Hyderabad
// console.log("Persons living in Hyderabad:");
// personsInHyd.forEach(person => console.log(person.name));

const persons = [
    { name: "John", city: "Hyderabad" },
    { name: "Jane", city: "Bangalore" },
    { name: "Jack", city: "Chennai" },
    { name: "Jill", city: "Hyderabad" },
  ];
  
  // Filter the array to only include persons who live in Hyderabad
  const hyderabadPersons = persons.filter((person) => person.city === "Hyderabad");
  
  // Display the names of the persons who live in Hyderabad
  hyderabadPersons.forEach((person) => console.log(person.name));
//----"Persons living in Hyderabad:"
// "Daniel"
// "John"
// "Robert"  
  
  
  