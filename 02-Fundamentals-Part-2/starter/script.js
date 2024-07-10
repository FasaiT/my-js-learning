"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is Jonas');
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice; //return keyword ใช้เก็บค่าที่ได้จากการคำนวน และนำมาใช้ต่อหรือเอามาแสดงผลต่อ
//     //ถ้าขาดคำนี้ไป จะเอามาใช้ไม่ได้ หรือแสดงผลต่อไม่ได้
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// //console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

/* function calcAge1(birthYeah) { 
return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1);
//Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2); */

// //Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }

//Arrow Function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah,  firstName)=> {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas')) ;
// console.log(yearsUntilRetirement(1980, 'Bob')) ;

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));
//////////////////////////Reviewing Functions
// const calcAge = function(birthYeah){
//     return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah,  firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log( `${firstName} retires in ${retirement} years`);
//         return retirement;

//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

//     return retirement;

// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// CODE CHALLENGE #1
//Arrow Fuction
// const calcAverage = (round1,round2,round3) => (round1 + round2 + round3)/3;
// //console.log(calcAverage(1,2,3));

// //TEST 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(85, 54, 41);

// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins,avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolphins win(${avgDolphins} VS ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win(${avgKoalas} VS ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

// //TEST 2
// //เนื่องจากตอนแรก การประกาศตัวแปรในบล็อกบนสุด มีการใช้ const เพราะต้องการให้ตัวแปรไม่มีการเปลี่ยนค่าได้ เป็นค่าเริ่มต้น
// //แต่ที่นี้ มาเทสนี้ เราจะ recalculate เราเลยมีการ เปลี่ยนเป็น let เพื่อให้มีการใส่ค่าใหม่เข้าไปได้
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// //friends = ['Bob', 'Alice'];

// const firstName ='Jonas';
// const jonas = [firstName, 'Scmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// const calcAge = function(birthYeah){
//     return 2037 - birthYeah;
// }
// const years =[1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// //Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// //CODE CHALLENGE 2 (KEY)
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   };

//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//   console.log(bills, tips, totals);

//Introduction to Objects
//   const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//   };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// //console.log(jonas.'last' + nameKey); //Uncaught SyntaxError: Unexpected string

// const interestedTn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if(jonas[interestedTn]){
//     console.log(jonas[interestedTn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann'
// console.log(jonas);

// //Challange
// //"Jonas has 3 friends, and his best friend is called Michael"
// console.log(jonas.friends);
// console.log("Jonas has 3 friends, and his best friend is called " + jonas.friends[0]);
// //KEY
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,

//   //ข้างล่างคือฟีลแบบ function expression
//   //   calcAge: function (birthYeah) {
//   //     return 2037 - birthYeah;
//   //   },

//   // calcAge: function () {
//   //     console.log(this);
//   //     return 2037 - this.birthYeah;
//   //   }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// //console.log(jonas['calcAge'](1991));

// //Challenge
// //"Jonas is a 46 year old teacher, and he has a driver license"
// console.log(jonas.getSummary());

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function(mass, height) {
//       mark.bmi =  mass / (height * height) ;
//       return mark.bmi;
//   }
// };
// console.log(mark.calcBMI());

// // #CODE Challenge #3
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function(mass, height) {
//       this.bmi =  this.mass / (this.height * this.height) ;
//       return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function(mass, height) {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//   }

// };
// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if(mark.calcBMI() > john.calcBMI()) {
//   console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
// } else if (mark.calcBMI() < john.calcBMI()) {
//   console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
// }

// //Loop
// console.log('Lifting weights repetition 1');

// //for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

//   const jonas = [
//     'Jonas',
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
//     true
//   ];

//   const types = [];
//   for (let i = 0; i < jonas.length ; i++) {
//     //Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     //Fillimg types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
//   }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
// ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS --- ให้ปริ้นท์แค่สตริง ถ้าเจอตัวเลขให้ข้ามไปปริ้นท์แค่สตริงทั้งหมด');
// for (let i = 0; i < jonas.length ; i++) {
//   if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER --- ถ้าเจอตัวเลขคือให้ออกจากลูปเลย');
// for (let i = 0; i < jonas.length ; i++) {
//   if(typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   'Jonas',
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true
// ];

// // 0, 1, ....,4
// //4, 3,...,0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// //Loop in loop
// for(let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--Starting Exercise ${exercise}--`);

//   for(let rep =1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetution Exercise ${rep}`)
//   }
// }

// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while(dice !==6 ) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log('Loop is about to end... ');
// }

// #CODE CHALLENGE 4
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// /* Write your code below. Good luck! 🙂 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3]), calcTip(bills[4]), calcTip(bills[5]), calcTip(bills[6]),
// calcTip(bills[7]),calcTip(bills[8]),calcTip(bills[9]),];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     totals.push(bills[i] + tips[i]);
// }

// console.log(bills, tips, totals);

// KEYS
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[1]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr [i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage([2,3,7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
