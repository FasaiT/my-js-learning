'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //ใส่แค่ชื่อเข้าไปเฉย ๆ ส่งผลให้การทำงานมันเร็วกว่าการใช้แบบอันด้านบน แต่โดยหลักการการทำงานมันก็เหมือน ๆ กัน
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//เรามีการประกาศตัวแปรไว้ด้านนอกสุดแล้ว โดยใช้ let เวลาที่มีการนำตัวแปรไปใช้ไว้ในฟังก์ชันใด (ในที่นี้คือ init) เราก็ไม่จำเป็นต้องใช้คำเพื่อประกาศตัวแปรอีก แต่เขียนชื่อตัวแปรลงไปได้เลย เพราะว่า เราจะกำหนดค่าให้มันใหม่ (reassign)
let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function () {
  //init stand for initial
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; //to signify that players still playing or not

  //set scores to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //เราต้องลบคลาส active ออกจาก player1El แต่กับผู้เล่นคนแรกเป็น 0 (player0El) เพราะเขาเป็นคนเริ่มเกมคนแรก เลยไม่ต้อง remove
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //reassign and check wether right now it is player 0. If yes, result will be 1
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    //each time that we roll the dice, that's why we don't use this variable as a global we want to generate a new number.
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //ระบุชื่อรูปภาพและเลขที่กำกับในไฟล์ของรูปภาพ
    console.log(dice);

    //3.Check for rolled 1; if true,
    if (dice !== 1) {
      // Add dice to the current score
      //currentScore = currentScore + dice;
      currentScore += dice;
      //บรรทัดล่างนีเหมือนเป็นการรับค่าไอดีตัวที่มันแอคทีฟอยู่โดยอัตโนมัติ โดยการเลือก ${activePlayer} ว่าเป็นผู้เล่นคนไหนที่แอคทีฟอยู่
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; //CHANGE LATER
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    console.log(scores[activePlayer]);
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //   scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      //Hide dice
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch to the next player
      switchPlayer();
    }
  }
});

//CHALENGE: Add function to the button when click NEW HAME btn
// btnNew.addEventListener('click', function () {
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   player0El.classList.add('player--active');
// });

//KEY CHALLENGE
btnNew.addEventListener('click', init);

// - เรียนรู้การเข้าถึง ID .getElementById('ชื่อไอดี')
// - การใช้ method toggle() เพื่อเพิ่มหรือลบคลาส ในกรณีที่มีคลาสนั้น ก็จะลบออก ถ้าไม่มีคลาสก็จะทำการเพิ่มคลาสนั้นเข้าไป
// - การประกาศตัวแปรและการ reassign ค่า ไม่เหมือนกัน

const a = [1, 2, 3, 4, 5];
const slicedArray = a.slice(2, 4);
console.log(slicedArray);
