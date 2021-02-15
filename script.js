'use strict';

const getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const secretNumber = getRandomIntInclusive(1, 20);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent ='🎉 Correct Number!';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High!';
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low!';
    }
})