// 1. variables
// 2. array
// 3. How to loop an array
// 4. functions
// 5. callback functions

var name = "Sonam";
var number = 123;

const anotherName = "Hello";
console.log(name);
console.log(number);
console.log(anotherName);

name = "Batman";
console.log(name);
// if i change anotherName then its give me error bcz anotherName define as a constant variables

// anotherName = "sonam";
// console.log(anotherName);

//2. array

var array = [10,9,8,7];
console.log(array);

console.log(array[0]);

//If we have more 100> items or more items in array then we use  Loop for display every element

for (i = 0; i < array.length; i++){
  console.log(array[i]);
}

// Another Method to Run this

array.map(function(each){
  console.log(each);
});

//functions

function naming(){
  var name = "hello";
  name = "joker";
}

console.log(naming());
