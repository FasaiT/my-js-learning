'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; //คัดทศนิยมออกให้เหลือเป็นแต่จำนวนเต็ม จริง ๆ แล้วจะได้จำนวนเต็มเป็น 1-19 ดังนั้นเราเลยต้อง + 1 เข้าไปด้วยเพื่อให้ได้เลข 20
let score = 20; // use let because we will do something with that value
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //ถ้า score มากกว่า high score ให้ค่าของ highscore เป็น score (บันทึกค่า highscore ใหม่)
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--; // score = score -1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--; // score = score -1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  // if (score > 1) {
  //   document.querySelector('.message').textContent = 'Too low!';
  //   score--; // score = score -1;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = 'You lost the game!';
  //   document.querySelector('.score').textContent = 0;
  // }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //By my own
  // const intialScore = document.querySelector('.score');
  // document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  // document.querySelector('.guess').value = '';
  // intialScore.textContent = 20;
  // document.querySelector('.number').style.width = '15rem';
  // document.querySelector('body').style.backgroundColor = '#222';

  //KEY
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

// -ในบทนี้เรียนเกี่ยวกับการเลือกคลาสที่เป็นเป้าหมายเพื่อเราจะทำอะไรสักอย่างกับคลาสนั้น (ฺBasic DOM)
// -วิธีคิด logic เรื่องของการสุ่มเลข การรับค่าจากinput การบันทึกhigh score การลด score ลงเมื่อตอบผิด
// -เรียนการใส่ฟังก์ชัน และอีเว้นท์ให้กับปุ่มเมื่อมีการคลิก
// -มีการใช้ property ในการจัดการกับ CSS โดยใช้ js DOM
// -การทำ refactor ในจุดที่ใช้โค้ดซ้ำ ๆ กับ รวมถึงการส้รางฟังก์ชันของโค้ดบรรทัดที่มีการนำไปใช้ซ้ำกัน เพื่อให้มีประสิทธิภาพในการประมวลผลการทำงานมากขึ้น
