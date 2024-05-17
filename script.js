let pressedArray = [];
let correctArray = [];

const green_bt  = document.getElementById("green_bt");
const yellow_bt = document.getElementById("yellow_bt");
const red_bt    = document.getElementById("red_bt");
const blue_bt   = document.getElementById("blue_bt");

// Green = 0; #26bd50
//Yellow = 1; #f4eb0f
// Red = 2; #dd3620
//Blue = 3; #4757ec


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

const playButtons = async () => {
    for (element of correctArray) {
        
        switch(element) {
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
        await sleep(1000);

    }
}

const gameOver = () => {
    console.log("Game Over");
}

const Start = () => {
    newElement();
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}