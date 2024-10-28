
//===MAPPING
// const array1 = ['vanilla', 'chocolate', 'strawberry'];

// const array2 = array1.map((currentElement) => {
//   return currentElement + ' ice cream';
// });

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream'
// // Use `.map()` to iterate over the following array:

//<-------------------------------------exercise 1--------------------------------->
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const multipliedNums = nums.map((num) => {
    return num * 2;
})

console.log(multipliedNums);
//<------------------------------------------------------------------->

//===ArrayDESTRUCTURING 
// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

// const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'

//<-------------------------------------exercise 2--------------------------------->
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// const [firstFruit, secondFruit] = pizzaToppings
// console.log(pizzaToppings[0])
// console.log(firstFruit)
// console.log(pizzaToppings[1])
// console.log(secondFruit)
// console.log(pizzaToppings[2])
//<------------------------------------------------------------------->
// //===ObjectDESTRUCTURING 
// const person = {
//     name: 'Alex',
//     role: 'Software Engineer',
//   };
  
//   // Object destructuring:
//   const { name, role } = person;
  
//   console.log(name); // 'Alex'
//   console.log(role); // 'Software Engineer'
  
//   // Equivalent in traditional dot notation:
//   console.log(person.name); // 'Alex'
//   console.log(person.role); // 'Software Engineer'
//<-------------------------------------exercise 3--------------------------------->
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };

//   const { make, model } = car;

//   console.log(make)
//   console.log(model)
  
//<------------------------------------------------------------------->

//===Spread Operators
// const originalArray = [1, 2, 3];
// const duplicateArray = [...originalArray];

// console.log(duplicateArray); // [1, 2, 3]

// const originalArray = [1, 2, 3];
// const referenceArray = originalArray; // referenceArray is now a reference to originalArray

// referenceArray.push(4); // Modifying referenceArray also modifies originalArray
// console.log(originalArray); // [1, 2, 3, 4]

//The spread operator (...) prevents nesting and altering of the original array. The array created with the spread operator generates a independent new array!

//<-------------------------------------exercise 4--------------------------------->

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings)


//<------------------------------------------------------------------->

//Spread Operators on Objects
// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   const clonedObject = { ...originalObject };
//   console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }
  
//   const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   const clonedObject = originalObject;
//   clonedObject.foo = 'Goodbye';
  
//   console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

//   const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   // Copy the properties of originalObject:
//   const clonedObject = { ...originalObject };
  
//   // Update the properties of clonedObject:
//   clonedObject.foo = 'Goodbye';
//   clonedObject.bar = 0;
  
//   console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
//   console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }
  
  
//<-------------------------------------exercise 5--------------------------------->

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
 const myCar = {...car}
 console.log(myCar)
  


//<------------------------------------------------------------------->
//Dynamic Keys in Objects======================================
// const fruitInventory = {
//     apples: 2,
//     oranges: 4,
//   };
  
//   const selectedFruit = 'apples'; // Variable as a dynamic key
//   const selectedFruitCount = fruitInventory[selectedFruit];
  
//   console.log(selectedFruitCount); // 2
// const fruitType = 'bananas'; // Variable as a dynamic key

// const fruitInventory = {
//   [fruitType]: 5,
// };

// console.log(fruitInventory); // { bananas: 5 }
//<-------------------------------------exercise 6--------------------------------->

// Create an object named userProfile. 
const propertyName = 'username'

const userProfile = {
    [propertyName]: 'username123'
}
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 

// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
console.log(userProfile[propertyName])
//<------------------------------------------------------------------->