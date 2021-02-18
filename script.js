'use strict';

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const secretNumber = getRandomIntInclusive(1, 20);
let score = 20;
let highScore = 0;
let buttonCheck = document.querySelector('.check');
let buttonAgain = document.querySelector('.again');
let inputGuess = document.querySelector('.guess');

let setMessageText = (messageTxt) => document.querySelector('.message').textContent = messageTxt;
let setNumberText = (numberTxt) => document.querySelector('.number').textContent = numberTxt;
let setScoreText = (scoreTxt) => document.querySelector('.score').textContent = scoreTxt;
let setNumberWidth = (numberWidth) => document.querySelector('.number').style.width = numberWidth;
let setBgColor = (bgColor) => document.body.style.backgroundColor = bgColor;


buttonCheck.addEventListener('click', () => {
    let guess = Number(inputGuess.value);
    // executed if player's hasn't entered a guess
    if (!guess) {
        setMessageText('⛔ No Number');
        // executed when player guesses correctly
    } else if (guess === secretNumber) {
        setMessageText('🎉 Correct Number!');
        setNumberText(secretNumber);
        setNumberWidth("30rem");
        setBgColor("green");
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // executed when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            setMessageText(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            setScoreText(score);
            setNumberText("?");
        } else {
            setMessageText('Game Over!');
            setScoreText(0);
        }
    }
});

buttonAgain.addEventListener('click', () => {
    score = 20;
    setMessageText('Start guessing...');
    setScoreText(score);
    setNumberText('?');
    inputGuess.value = '';
    setBgColor("#222");
    setNumberWidth("15rem");
});
