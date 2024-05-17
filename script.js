let pressedArray = [];
let correctArray = [];

const green_bt  = getElementById("green_bt");
const yellow_bt = getElementById("yellow_bt");
const red_bt    = getElementById("red_bt");
const blue_bt   = getElementById("blue_bt");

// Green = 0; Yellow = 1;
// Red = 2; Blue = 3;

const pressButton = (color) => {
    pressedArray.push(color);
    judgePress();
}

const newElement = ()=> {
    let newNumber = Math.floor(Math.random() * 4);
    newElement.push();
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

const gameOver = () => {
    console.log("Game Over");
}

const Start = () => {
    newElement();
}