let pressedArray = [];
let correctArray = [];

let isPlaying = true;
let position;
let score = 0;

const green_bt  = document.getElementById("green_bt");
const yellow_bt = document.getElementById("yellow_bt");
const red_bt    = document.getElementById("red_bt");
const blue_bt   = document.getElementById("blue_bt");

const confettiContainer = document.getElementsByClassName("js-container");

const scoreText = document.getElementById("score-text");
const gameoverScreen = document.getElementById("game-over-screen");
const gameoverScoreText = document.getElementById("score-final-text");
const newGameSound = new Audio('./sound/newgame.mp3');
const gameoverSound = new Audio('./sound/gameover.mp3');
const ponSound = [
    new Audio('./sound/pon1.mp3'),
    new Audio('./sound/pon2.mp3'),
    new Audio('./sound/pon3.mp3'),
    new Audio('./sound/pon4.mp3'),
];
const winSound = new Audio('./sound/win.mp3');
const wrongSound = new Audio('./sound/wrong.mp3');

// Green = 0; #26bd50
//Yellow = 1; #f4eb0f
// Red = 2; #dd3620
//Blue = 3; #4757ec


const pressButton = async (button) => {
    
    pressedArray.push(button);
    console.log(button, "pressed");
    
    for (sound of ponSound) { sound.pause(); sound.currentTime = 0;}
    ponSound[button].play();
    turnOnButton(button);
    
    await judgePress(button);
    await sleep(500);
    turnOffButton(button);
    
    
}

const newElement = ()=> {
    let newNumber = Math.floor(Math.random() * 4);
    correctArray.push(newNumber);
    console.log(correctArray);
}

const judgePress = async (number) => {
    if (correctArray[position] == number) {
        score += 500;
        scoreText.textContent = score;
        position++;
    } else {
        await gameOver();
    }
    if (position >= correctArray.length) playNextRound();
}

const turnOnButton = (number) => {
    switch(number) {

        case 0:
            green_bt.style.backgroundColor = "#50fa35";
            green_bt.style.boxShadow = "0 0 1.5rem 0.2rem #50fa35cc";
            break;

        case 1:
            yellow_bt.style.backgroundColor = "#fafe58";
            yellow_bt.style.boxShadow = "0 0 1.5rem 0.2rem #fafe58cc";
            break;

        case 2:
            red_bt.style.backgroundColor = "#ff7347";
            red_bt.style.boxShadow = "0 0 1.5rem 0.2rem #ff7347cc";
            break;

        case 3:
            blue_bt.style.backgroundColor = "#6edeed";
            blue_bt.style.boxShadow = "0 0 1.5rem 0.2rem #6edeedcc";
            break;
    }
}
const turnOffButton = (number) => {
    switch(number) {
        case 0:
            green_bt.style.backgroundColor = "#26bd50";
            green_bt.style.boxShadow = "";
            break;

        case 1:
            yellow_bt.style.backgroundColor = "#f4eb0f";
            yellow_bt.style.boxShadow = "";
            break;

        case 2:
            red_bt.style.backgroundColor = "#dd3620";
            red_bt.style.boxShadow = "";
            break;

        case 3:
            blue_bt.style.backgroundColor = "#4757ec";
            blue_bt.style.boxShadow = "";
            break;
    }
}

const playButtons = async () => {
    await sleep(1000);
    position = 0;
    for (button of correctArray) {
        
        turnOnButton(button);
        for (sound of ponSound) { sound.pause(); sound.currentTime = 0;}
        ponSound[button].play();
        await sleep(400);
        turnOffButton(button);

    }
}

const gameOver = async () => {
    gameoverScoreText.textContent = `Your score: ${score}`;

    await sleep(300);
    gameoverSound.play();
    gameoverScreen.style.display = "flex";
    gameoverScreen.style.animation = "gameover 300ms forwards";
    await sleep(500);
    
    gameoverScoreText.style.animation = "gameover 300ms forwards";
}

const playNextRound = async () => {
    //Win Logic
    winSound.play();
    confettiContainer[1].style.display = "block";
    confettiContainer[1].style.animation = "confetti-fadeout 3s forwards";

    newElement();
    await playButtons();
    confettiContainer[1].style.display = "none";
    
}

const Start = async () => {
    //Reset Routine
    
    correctArray = [0,1];
    score = 0;
    scoreText.textContent = score;
    confettiContainer[1].style.display = "none";

    gameoverScreen.style.display = "none";
    newGameSound.play();
    newElement();
    await playButtons();
    
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}