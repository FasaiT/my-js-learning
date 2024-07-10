// // ------------------- Values and Variables -------------------
// let country = "Thailand";
// let continent = "Asia";
// let population = 66;

// console.log(country);
// console.log(continent);
// console.log(population);

// // ------------------- Data Types -------------------
// let isIsland = false;
// let language = "";
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// ------------------- let, const and var -------------------
// language = "Thai";
// isIsland = true;
// const country = "Thailand";
// const continent = "Asia";
// const population = 66;
// const isIsland = false;

// // ------------------- Basic Operators -------------------
// let population = 66;
// console.log(population / 2);

// population++;
// console.log(population);

// console.log(population > 6);
// console.log(population < 33);

// let country = "Thailand";
// let continent = "Asia";
// let language = "Thai";

// let description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language +
//   ".";
// console.log(description);

// // ------------------- Strings and Template Literals -------------------
// let newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(newDescription);

// // ------------------- Taking Decisions: if / else Statements -------------------
// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }

// // ------------------- Type Conversion and Coercion -------------------
// //left to right
// console.log("9" - "5"); // -> 4
// console.log("19" - "13" + "17"); //617 delete before String
// console.log("19" - "13" + 17); // -> 23
// console.log("123" < 57); // -> false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// // ------------------- Equality Operators: == vs. === -------------------
// // const numNeighbours = prompt(
// //   "How many neighbour countries does your contry have?"
// // );
// // console.log(typeof numNeighbours); //get 'string' type from user, that's why it was log to 'No borders' because we use === in if-block

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your contry have?")
// );
// //Number use to convert string from user to number
// if (numNeighbours === 1) {
//   console.log(`Only ${numNeighbours} border!`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border!`);
// } else {
//   console.log(`No borders`);
// }

// // ------------------- Logical Operators -------------------
// const country = "Thailand";
// const language = "english";
// const population = 66;
// const isIsland = false;

// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// ------------------- The switch Statement -------------------
// let language = "";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log(`MOST number of native speakers!`);
//     break;
//   case "spanish":
//     console.log(`2nd place in number of native speakers`);
//     break;
//   case "english":
//     console.log(`3rd place`);
//     break;
//   case "hindi":
//     console.log(`Number 4`);
//     break;
//   case "arabic":
//     console.log(`5th most spoken language`);
//     break;
//   default:
//     console.log(`Great language too :D`);
// }

// ------------------- The Conditional (Ternary) Operator -------------------
// const country = "Thailand";
// const population = 66;

// console.log(
//   population > 33
//     ? `${country}'s population is above average`
//     : `${country}'s population is below average`
// );

//KEY
// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );
