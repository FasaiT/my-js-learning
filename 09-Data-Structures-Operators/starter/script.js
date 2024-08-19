'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20.00', address}) 
  {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredient) {
  console.log(mainIngredient);
  console.log(otherIngredient);
  }
};


/////////////////////////////////////////////////////////////////////////
// //Destructering Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   address: 'Via del Sol, 21',
//   starterIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName, 
//   openingHours: hours, 
//   categories: tags
// } = restaurant
// console.log(restaurantName, hours, tags); 

// //Setting a default value to the object 
// //ตรงนี้เป็นประโยชน์เพราะในความเป็นจริงแล้ว เรารับdata มาจากที่ไหนสักที่ เราไม่มีทางรู้หน้าตาของข้อมูลที่แท้จริง 
// //Default variables
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a,b} = obj); //Have to wrap this destructuring assignment into parenthesis.

// console.log(a,b);

// //Nested objects
// const{ fri: {open: o, close: c} } = openingHours;
// console.log(o, c);

///////////////////////////////////////////////
// //Destructering Arrays
// //ข้างล่างคือการดึงค่าแอเรย์ออกมาเก็บไว้ในรูปแบบของตัวแปร
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// //ใช้การประกาศตัวแปร const เพราะเป็นค่าคงที่
// //การประกาศตัวแปรที่หน้าต่าคล้ายกับแอเรย์ไว้ด้านซ้ายคือ destructuring assignment, not an arrays, must use const เป็นการเขียนโค้ดแบบย่อหน้าตาเหมือนแอเรย์
// //The original array is of course not affected. เพราะเราแค่ unpack มันออกมาเฉย ๆ
// console.log(x, y, z); //ได้ผลลัพธ์ของแอเรย์ออกมา
// console.log(arr);

// // const [first, , second] = restaurant.categories;
// // console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// //ในการทำ Destructuring Arrays เราไม่จำเป็นต้องสร้างตัวแปรขึ้นมาใหม่ เราแค่ , คั่นแล้วเว้นว่างไปเลยก็ได้ มันก็จะแสดงเป็นตำแหน่งตัวที่เราต้องการแทน ในที่นี้คือตัวที่ 3 ของ restaurant.categories
// console.log(main, secondary);

// //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);                                                                                                                                                                                                                                                                                                                                                                                                             

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Setting Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
///////////////////////////////////////////////

// //The Spread Operator (...)
// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2, ...arr]; 
// console.log(newArr); 

// console.log(...newArr); //The result is the same way as we write console.log(1,2,7,8,9);

// //Adding new element to the array by using spread operator
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays (starterMenu, mainMenu)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, 'S.'];
// console.log(letters);
// console.log(...str);
// console.log('j','o');
// //console.log(`${...str} Schmedtmann`); //เราไม่สามารถใช้กับการสร้างสตริงใน template literal ได้ เพราะใน `${ }` เก็บหลายค่าที่แยกออกจากกันด้วยcomma ไม่ได้ 
// //เราจะสามารถส่งหลายค่าที่แยกออกจากกันด้วย คอมม่าได้ก็ต่อเมื่อ เราต้องการสร้างแอร์เรย์ใหม่หรือ ส่งอาร์กิวเม้นท์ผ่านฟังก์ชันเท่านั้น

// //Real-world example
// const ingredients = [
//   // prompt("Let\'s make paste ! Ingredient 1?"), 
//   // prompt("Let\'s make paste ! Ingredient 2?"), 
//   // prompt("Let\'s make paste ! Ingredient 3?")
//   ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestautant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestautant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name ='Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
///////////////////////////////////////////////

// //Rest Pattern and Parameters
// //1) Destructuring
// //SPREAD, because on the ROGHT side of =
// const arr = [1,2,...[3,4]];

// //REST, because on LEFT side of =
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a, b, others);

// const [pizza, ,risotto,...otherfood] = 
// [...restaurant.mainMenu, 
//   ...restaurant.starterMenu];
// console.log(pizza, risotto, otherfood); //ตัวประกอบที่เหลือทั้งหมด ไม่ว่าจะอยู่ในตำแหน่งไหนก็ตามที่เราไม่ได้อ้างอิงถึง จะถูกเก็บไว้ในตัวแปรตัวสุดท้าย ในที่นี้คือ otherfood เราจะไม่สามารถใส่ตัวแปรอะไรเพิ่มเติมเข้าไปข้างหลังอีกได้ เพราะไม่งั้น syntax REST จะไม่ทำงาน

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) Functions
// const add = function(...numbers) {
// let sum = 0;
// for(let i =0; i < numbers.length; i++) sum += numbers[i];
// console.log(sum);
// }
// add(2,3);
// add (5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x = [23, 5,7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spanich');
// restaurant.orderPizza('mushroom');
///////////////////////////////////////////////

// //Short Circuiting (&& and ||)
// console.log('----- OR -----'); //OR จะสนใจแค่ค่าแรกที่เป็น true เท่านั้น นอกนั้นไม่สนใจ
// //1) Use ANY data type, return ANY data type, short-circuit evaluation.
// console.log(3 || 'Jonas'); //3
// console.log('' || 'Jonas'); //Jonas
// console.log(true || 0); //true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests: 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND -----'); //AND จะเป็นจริงก็ต่อเมื่อ การดำเนินการทั้งหมดเป็นจริงเท่านั้น ถ้ามีตัวใดผิด มันก็จะคืนค่า false 
// console.log(0 && 'Jonas'); //0 //คืนค่าที่เป็น false เท่านั้นโดยไม่สนใจตัวอื่น
// console.log(7 && 'Jonas'); //Jonas //แต่ถ้าค่าแรกที่เจอเป็น true มันจะดำเนินการต่อไป และส่งคืนค่าสุดท้ายที่เป็น true ตัวเดียวเลย

// console.log('Hello' && 23 && null && 'Jonas'); //null เพราะ Hello เป็น true, 23 เป็น true แต่ null เป็น false มันเลยไม่ได้ดำเนินการไปต่อจนถึงตัวสุดท้าย

// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza ('mushroom', 'spanich');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spanich');


// //The Nullish Coalescing Operator (??) จะ Return ค่าทางขวามือเมื่อค่าทางซ้ายเป็น Null หรือ Undefined
// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10; 
// // rest2.numGuests = rest2.numGuests || 10;
// //Or we can writr the same thing in more concise way 
// // rest1.numGuests ||= 10; //20 
// // rest2.numGuests ||= 10; //10

// //Nullish assignment operator (null or undefined) คือจะใส่ค่าให้กับตัวแปรนั้น เมื่อตัวแปรนั้นเป็น null or undefined
// rest1.numGuests ??= 10; //0
// rest2.numGuests ??= 10; //10

// //AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMUS>' //owner: undefined because there is no owner
// // rest2.owner = rest2.owner && '<ANONYMUS>' //owner: '<ANONYMUS>'
// rest1.owner &&= '<ANONYMUS>'; //คุณสมบัติ owner ไม่มีอยู่จริง false ด้วยวิธีการเขียนแบบนี้ มันกจะไม่มี owner: undefined
// rest2.owner &&= '<ANONYMUS>'; //คุณสมบัติ owner มีอยู่จริง true

// console.log(rest1); //20 
// console.log(rest2); //10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////=
