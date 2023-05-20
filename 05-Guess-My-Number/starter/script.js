'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '';
let target = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// console.log(document.querySelector('.number'));
const changeMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  // When there is no input
  if (!guess) {
    changeMessage('⚠️ please enter one number!');
    // document.querySelector('.message').textContent =
    //   '⚠️ please enter one number!';
    return;
  }
  guess = Number(guess);
  // When the guess is right
  if (guess === target) {
    document.querySelector('.message').textContent = '🎉 Correct value!';
    document.querySelector('.number').textContent = target;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When the guess is wrong
  else {
    if (score > 1) {
      changeMessage(guess > target ? '📈 Too large!' : '📉 Too small!');
      //document.querySelector('.message').textContent = '📈 Too large!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      changeMessage('💥 You lose the game!');
      //document.querySelector('.message').textContent = '💥 You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  target = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  changeMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
