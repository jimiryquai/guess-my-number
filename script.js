'use strict';

const getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const secretNumber = getRandomIntInclusive(1, 20);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // executed if player's hasn't entered a guess
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number';
        // executed when player guesses correctly
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = "30rem";
        document.body.style.backgroundColor = "green";
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // executed if player's guesses is too high 
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = "?";
        } else {
            document.querySelector('.message').textContent = 'Game Over!';
            document.querySelector('.score').textContent = 0;
        }
        // executed if player's guesses is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = "?";
        } else {
            document.querySelector('.message').textContent = 'Game Over!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = "#222";
});
