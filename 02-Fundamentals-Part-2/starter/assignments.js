// ------------------- Functions -------------------
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const describeThailand = describeCountry("Thailand", 66, "Bangkok");
const describeGermany = describeCountry("Germany", 83, "Berlin");
const describeFinland = describeCountry("Finland", 6, "Helsinki");

console.log(describeThailand);
console.log(describeGermany);
console.log(describeFinland);

// ------------------- Function Declarations vs. Expressions -------------------
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const poplThailand1 = percentageOfWorld1(66);
const poplGermany1 = percentageOfWorld1(83);
const poplFinland1 = percentageOfWorld1(6);

const poplThailand2 = percentageOfWorld2(66);
const poplGermany2 = percentageOfWorld2(83);
const poplFinland2 = percentageOfWorld2(6);

console.log(poplThailand1, poplGermany1, poplFinland1);
console.log(poplThailand2, poplGermany2, poplFinland2);

// ------------------- Arrow Functions -------------------
//ref from w3 school
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};
const poplThailand3 = percentageOfWorld3(66);
const poplGermany3 = percentageOfWorld3(83);
const poplFinland3 = percentageOfWorld3(6);

console.log(poplThailand3, poplGermany3, poplFinland3);

// KEY
// const percentageOfWorld3 = population => (population / 7900) * 100;
// const percPortugal3 = percentageOfWorld3(10);
// const percChina3 = percentageOfWorld3(1441);
// const percUSA3 = percentageOfWorld3(332);

// console.log(percPortugal3, percChina3, percUSA3);

// ------------------- Functions Calling Other Functions -------------------
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
}
const descPoplThailand = describePopulation("Thailand", 66);
const descPoplGermany = describePopulation("Germany", 83);
const descPoplFinland = describePopulation("Finland", 6);
// const descPoplChina = describePopulation("China", 1441);

console.log(descPoplThailand);
console.log(descPoplGermany);
console.log(descPoplFinland);
// console.log(descPoplChina);

// ------------------- Introduction to Arrays -------------------
// let populations = [66, 10, 1441, 332];
// console.log(populations.length === 4);

// let percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// ------------------- ***Basic Array Operations (Methods)*** -------------------
let neighbours = ["Myanmar", "Laos", "Malaysia"];
neighbours.push("Utopia");
neighbours.pop("Utopia");
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central european country :D`);
}

neighbours[neighbours.indexOf("Laos")] = `Lao People's Democratic Republic`;
console.log(neighbours);

// ------------------- ***Introduction to Objects*** -------------------
const myCountry = {
  country: "Thailand",
  capital: "Bangkok",
  language: "Thai",
  population: 66,
  neighbours: ["Myanmar", "Laos", "Malaysia"],
};
console.log(myCountry);

// ------------------- ***Dot vs. Bracket Notation*** -------------------
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

//รูปแบบของการใช้งาน . dot notation & [ ] Bracket Notation แตกต่างกันตรงที่
//dot notation จะไม่สามารถเอาชื่อตัวแปรมาอ้างอิง เพื่อเข้าถึงvalue ข้างในโดยตรงได้ ถ้าจะเข้าถึง ต้องเอา key ที่มีอยู่เท่านั้น ถึงจะได้ valueข้างในออกมา
//Bracket Notation เหมือนเป็นการเข้าถึง index ของแอรเรย์ตัวนั้น ๆ โดยตรง โดยที่ค่าในรูปแบบนี้ เอาชื่อตัวแปรมาใช้ได้ เอาอะไรมาใช้ก็แต่ต้องอยู่ในรูปแบบของสตริงเท่านั้น ถึงจะเข้าถึง value ข้างในได้

// ------------------- ***Object Methods*** -------------------
const myCountryObjMet = {
  country: "Thailand",
  capital: "Bangkok",
  language: "Thai",
  population: 66,
  neighbours: ["Myanmar", "Laos", "Malaysia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // KEY Even simpler version
    //this.isIsland = !Boolean(this.neighbours.length);
  },
};
myCountryObjMet.describe();
myCountryObjMet.checkIsland();

console.log(myCountryObjMet);

// ------------------- Iteration: The for Loop -------------------
// for (i = 0; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }
//KEY
// for (let voter = 1; voter <= 50; voter++)
//   console.log(`Voter number ${voter} is currently voting`);

// ------------------- ***Looping Arrays, Breaking and Continuing*** -------------------
// bring back the populations array from a (KEY) previous assignment.
const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  //use push() to add new elements to the new array called 'percentages2' after condition in for loop is true.
  percentages2.push(perc);
}
console.log(percentages2);

// ------------------- ***Looping Backwards and Loops in Loops*** -------------------
//Nested loop
// More information: https://businessdaduk.com/2023/06/14/javascript-loops-looping-backwards-loops-in-loops/

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// ------------------- The while Loop -------------------
const populations3 = [10, 1441, 332, 83];
const percentages3 = [];
let a = 0;
while (a < populations3.length) {
  const perc_ = percentageOfWorld1(populations3[a]);
  percentages3.push(perc_);
  a++;
}
console.log(percentages3);

//for loop ใช้ในกรณีที่เรารู้จำนวนรอบที่แท้จริง
//while loop ใช้ในกรณีที่เรื่อย ๆ เราไม่รู้จำนวนรอบที่แท้จริง
// https://www.matterdevs.com/java-programming-lang-series-loop/
