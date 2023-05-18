'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '';
let target = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// console.log(document.querySelector('.number'));

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      '⚠️ please enter one number!';
    return;
  }
  guess = Number(guess);
  // When the guess is right
  if (guess === target) {
    document.querySelector('.message').textContent = '🎉 Correct value!';
    document.querySelector('.number').textContent = target;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When the guess is too high
  else if (guess > target) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too large!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  // When the guess is too low
  else {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too small!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose the game!';
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
