// let js = 'amazing';
//       if (js === 'amazing') alert ('JS is FUN!');

//       40 + 8 + 23 - 10;
//       console.log(40 + 8 + 23 - 10);

//       let firstName = "Bob";
//       let first = 'jonas'
//       let firstNamePerson
//       let first_name_person

//       console.log(firstName);
//       console.log(firstName);
//       console.log(firstName);

//       let person = 'jonas';

//     //   assignment: Values and Variables
// var country = "Thailand";
// var continent = "Asia";
// var population  = 76;

// console.log(country);
// console.log(continent);
// console.log(population);

// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);

// // console.log(typeof true);
// // console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// // javascriptIsFun = "YES!";
// // console.log(typeof javascriptIsFun);

// // let year ;
// // console.log(year);
// // console.log(typeof year);

// // year = 1991;
// // console.log(typeof year);
// // console.log(typeof null); //object

// // assignment: Data Types

// var isIsland = false;
// let language;

// console.log(language);
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof isIsland);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// var job = "programmer";
// job = "teacher";

// lastName = "TUNTI"
// console.log(lastName);
/////////////////////////////
//Basic operators
//Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10,  2** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedmann';
// console.log(firstName + ' ' + lastName);

// //Assaignment operators
// let x = 10 + 5; //15
// x += 10; // x =  x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x ++; // x = x +1;
// x--;
// x--;
// console.log(x);

// //Comparison operators

// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// // console.log(25-10-5);

// let x, y;
// x = y = 25-10-5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// CHALLENGE #1 //
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log("BMIMark " + BMIMark);
// console.log("BMIJohn " + BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log("markHigherBMI " + markHigherBMI);

//Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher'
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jonasNew);

// console.log(`Just a legular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
// console.log('Sarah can start driving license ');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;

// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
// century = 21;
// }
// console.log(century);

// code challenge 2 using code challemge 1 to continue.
// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!");
// }
// else {
//     console.log("John's BMI is higher than Mark's!");
// }

// const markBMI = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
// console.log(markBMI);

//Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3); //10
// console.log('23' / '2'); //11.5

// let n = '1' + 1; //'11'
// n = n - 1;
// console.log(n); //10

//5 falsy values: 0, '', undefined, null ,NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); //true
// console.log(Boolean({})); //true
// console.log(Boolean('')); //false

// const money = 100;
// if(money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height = 0;
// if(height){
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// const age = '18';
// if(age === 18 ) console.log('You just became an adult :D (strict)');

// if(age == 18 ) console.log('You just became an adult :D (loose)');

// const favourite = Number (prompt("What's yout fav number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
// console.log('Cool ! 23 is an amazing number!');
// } else if (favourite === 7){
//     console.log('7 is also a cool number');
// } else if(favourite === 9) {
//     console.log('9 is also a cool number');
// }
// else {
//     console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log('why not 23');

// const hasDriverLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// // if(hasDriverLicense && hasGoodVision) {
// //     console.log('Sarah is able to ride');
// // } else {
// //     console.log('Someone else should ride...');
// // }

// const isTired = false; //C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to ride");
// } else {
//   console.log("Someone else should ride...");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110)/ 3;

// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//     console.log("Koalas win the trophy");
// }else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy");
// }

//BONUS 1
// const scoreDolphins = (67 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123)/ 3;

// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas >  scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy");
// }else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy");
// }

//BONUS 2
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50)/ 3;

// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas >  scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy");
// }else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Both win the trophy");
// } else {
//     console.log("No one wins thr trophy");
// }

// const day = "friday";

// switch (day) {
//   case "monday": //day ==='monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if(day === "monday"){
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// }else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend");
// } else {
//     console.log("Not a valid day!");
// }

// 3 + 4 //is expression because it produce the value
// 1991 //also expression too because itself will produce a value in js
// true && false && !false // is expression because it produce some boolean value

// //statement because It performs some actions, eventhough it doesn't prodecu the value but it create a string called, 23 is bigger
// if (23 > 10) {
//     const str = '23 is bigger'; //23 is bigger แค่ตรงนี้เท่านั้น เป็น expression
// }

// const me = 'Jonas'
// console.log(`I'm ${2037-1991} years old`);
// // statement เปรียบเสมือนประโยค เพราะมีการแอคชัน แต่ expression เปรียบเสมือนคำ ๆ นึงในประโยค

// const age = 23;
// // age >= 18 ? console.log("I like to drink wine") :
// // console.log("I like to drink water");

// const drink = age >= 18 ? 'wine': 'water';
// console.log(drink);

// let drink2;
// if(age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);

// // code challenge #4
// const tip = (bill / 100) * 15; //ข้อนี้ตอนแรกผิดที่วิธีการคิด %
// const totalValue = tip + bill;
// console.log(totalValue);
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value was ${
//     bill + tip
//   }`
// );

// KEY
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //ternary operator
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
