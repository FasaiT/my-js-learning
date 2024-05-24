'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       //Reassigning outer scope's variable
//       const output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str); //const, let เป็น block scoped
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'John';
// calcAge(1991);
// // console.log(age);
// // printAge();

// //Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// //การประกาศตัวแปรไว้ภายใต้บรรทัดที่จะเรียกการใช้งาน = TDZ (Temporal dead zone)
// var me = 'Jonas';
// let job = 'teacher';
// const year = '1991';

// //Functions
// //ฟังก์ชันเดียวที่เราสามารถเรียกใช้ ก่อนมีการประกาสคือ function declaration ปกติ

// console.log(addDecl(2, 3)); //output: 5 เราสามารถเรียก function declaration ได้ก่อนที่จะถูกระบุได้
// // console.log(addExpr(2, 3)); //ถ้าใช้การประกาศตัวแปรด้วย const จะได้ Uncaught ReferenceError: Cannot access 'addExpr' before initialization (TDZ (Temporal dead zone)) แต่ถ้าใช้ var ประกาศจะได้
// console.log(addArrow); //undefined
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   //   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

///////////////////////////////////////
// // Regular Functions vs. Arrow Functions
// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     //Solution 1
//     // const self = this; //self ot that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);

//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     //Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// //Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

///////////////////////////////////////
// // Objects vs. primitives

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before married:', jessica);
console.log('After married', marriedJessica);

// marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//เราใช้ได้แค่ใน first level เท่านั้น ในกรณีที่มี สevel อื่นซ้อนกัน object ตัวที่อยู่ข้างใน ก็ไม่มีการเปลี่ยนแปลงอะไร
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before married:', jessica2);
console.log('After married', jessicaCopy);
