//set up sound effects 
class AudioController {
    constructor() {
        this.bgMusic = new Audio('https://raw.githubusercontent.com/KaroGhulyan/karg.github.io/master/Games/main.flac');
        this.flipSound = new Audio('https://raw.githubusercontent.com/KaroGhulyan/karg.github.io/master/Games/flip.wav');
        this.matchSound = new Audio('https://raw.githubusercontent.com/KaroGhulyan/karg.github.io/master/Games/fire.wav');
        this.wrong = new Audio('https://raw.githubusercontent.com/KaroGhulyan/karg.github.io/master/Games/boom.wav');
        this.gameover = new Audio('https://raw.githubusercontent.com/KaroGhulyan/karg.github.io/master/Games/dracaris.wav');

    }
    startMusic() {
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    wrongCard() {
        this.wrong.play();
    }
    yuoLose() {
        this.bgMusic.volume = 0.1;
        this.gameover.volume = 1;
        this.gameover.play();
    }

}
const audioController = new AudioController();

const cards = document.querySelectorAll('.card');
const Count = document.querySelectorAll('.count');
const timer = document.querySelectorAll('.time');
const YouWin = document.querySelectorAll('.victory-blog');
const GameOver = document.querySelectorAll('.game-over');
const click = document.querySelectorAll('.overlay-text');
const restart = document.querySelectorAll('.button');
const restart1 = document.querySelectorAll('.button1');
// set up the game parameters
let flipedCard = false;
let firstCard;
let secondCard;
let lockCard = false;
let count = 0;
let victoryCount = 0;
let totalScore = 0;
let timeRemaining = 70;

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', startGame)
} else {
    startGame();
}
//start Game Functiom
function startGame() {
    clickStart();
    shuffleCards();
    flipCards();
}
function flipCard() {

    if (lockCard) return;

    audioController.flip();

    this.classList.add('flip');

    if (!flipedCard) {
        //first click
        flipedCard = true;
        firstCard = this; //firstCard Click
    } else {
        //second click
        flipedCard = false;
        secondCard = this;//SecondCard Click
        checkingCards();
        count++;
        Count.forEach(element => element.innerHTML = count); //FlipsCount
    }
}
//checking the cards 
function checkingCards() {
    lockCard = true;
    let firstHouse = firstCard.dataset.housename;
    let secondHouse = secondCard.dataset.housename;
    if (firstHouse === secondHouse && firstCard.id !== secondCard.id) {
        victoryCount += 2;
        setTimeout(() => {
            lockCard = false;
            audioController.match();
            firstCard.classList.add('hide');  //hide FirstCard
            secondCard.classList.add('hide'); //hide SecondCard
        }, 500);
    } else {
        lockCard = true;
        hideCards();
    }
    setTimeout(() => {
        Victory();
    }, 1500);
}
//flip back cards
function hideCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        audioController.wrongCard();
        lockCard = false;
    }, 1000);
}
//Win Game Function
function Victory() {
    if (cards.length === victoryCount) {
        YouWin.forEach(element => element.classList.add('visible'));
        clearInterval(time);
    }
    restart.forEach(element => element.addEventListener('click', restartGame));
}
//Reload Game
function restartGame() {
    location.reload();
}
//shuffle the Cards
function shuffleCards() {
    cards.forEach(card => {
        let randomCard = Math.floor(Math.random() * 12);
        card.style.order = randomCard;
    })
};
//Click to start game function
function clickStart() {
    return click.forEach(element => element.addEventListener('click', () => {
        element.classList.remove('visible');
        audioController.match();
        audioController.startMusic();
        Timer();
    }));
}
//add EventListener Click to cards
function flipCards() {
    return cards.forEach(card => card.addEventListener('click', flipCard))
}
//Timer countdown  Function
function Timer() {
    time = setInterval(() => {
        timeRemaining--;
        timer.forEach(element => element.innerHTML = timeRemaining)
        if (timeRemaining === 0) { //if timer === 0 game over
            gameOver(time);
        }
    }, 1000)
}
//GameOver function
function gameOver(time) {
    clearInterval(time);
    GameOver.forEach(element => element.classList.add('visible'));
    audioController.yuoLose();
    setTimeout(() => {
        audioController.match();
    }, 1300);
    restart1.forEach(element => element.addEventListener('click', restartGame));
}





