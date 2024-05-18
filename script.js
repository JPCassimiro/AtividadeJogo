let pressedArray = [];
let correctArray = [];

const green_bt  = document.getElementById("green_bt");
const yellow_bt = document.getElementById("yellow_bt");
const red_bt    = document.getElementById("red_bt");
const blue_bt   = document.getElementById("blue_bt");

const buttonSound = new Audio('./sound/button.mp3');
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
    
    turnOnButton(button);
    await sleep(1000);
    turnOffButton(button);
    //button.style.backgroundColor = "#ff0000";
    //judgePress();
}

const newElement = ()=> {
    let newNumber = Math.floor(Math.random() * 4);
    console.log(newNumber);
}

const judgePress = () => {
    for (let i = 0; i < correctArray; i++) {
        if (correctArray[i] == pressedArray[i]) {
            console.log("Acerto");
        } else {
            gameOver();
        }
    }
}

const turnOnButton = (number) => {
    switch(number) {

        case 0:
            green_bt.style.backgroundColor = "#50fa35";
            break;

        case 1:
            yellow_bt.style.backgroundColor = "#fafe58";
            break;

        case 2:
            red_bt.style.backgroundColor = "#ff7347";
            break;

        case 3:
            blue_bt.style.backgroundColor = "#6edeed";
            break;
    }
}

const turnOffButton = (number) => {
    switch(number) {
        case 0:
            green_bt.style.backgroundColor = "#26bd50";
            break;

        case 1:
            yellow_bt.style.backgroundColor = "#f4eb0f";
            break;

        case 2:
            red_bt.style.backgroundColor = "#dd3620";
            break;

        case 3:
            blue_bt.style.backgroundColor = "#4757ec";
            break;
    }
}

const playButtons = async () => {
    for (element of correctArray) {
        let button = getButton(element);
        let color = parseInt(button.style.backgroundColor);
        let newColor = (color + parseInt('#000000')).toString(16);
        await sleep(1000);

    }
}

const gameOver = () => {
    console.log("Game Over");
}

const Start = () => {
    newElement();
    //buttonSound.play();
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}