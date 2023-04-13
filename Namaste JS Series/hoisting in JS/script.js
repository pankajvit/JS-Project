console.log("hoisting example");

/* Example - 1 for understanding hoisting */

// var x = 7;

// function getName() {
//   console.log("Namaste JavaScript");
// }

// getName();

// console.log(x);

/* Example - 2 for understanding hoisting */

// getName();

// console.log(x);

// var x = 7;

// function getName() {
//   console.log("Namaste JavaScript");
// }

/* Example - 3 for understanding hoisting */

// getName();

// console.log(x);

// console.log(getName);

// var x = 7;

// function getName() {

//     console.log("Namaste JavaScript");

// }

/* Example - 4 for understanding hoisting */

// getName();

// console.log(x);

// console.log(getName);

// function getName() {
//   console.log("Namaste JavaScript");
// }

/* Example - 5 for understanding hoisting */


console.log(x);

console.log(getName);

var x = 7;

var getName = () => {
  console.log("Namaste JavaScript");
};
getName();