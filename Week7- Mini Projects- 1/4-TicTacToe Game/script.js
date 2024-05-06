const playerInfo = document.querySelector(".game-info");
const gameBox = document.querySelector(".tic-tac-toe");
const boxes = document.querySelectorAll(".box");
const button = document.querySelector(".btn");

// initialization
let currPlayer;
let tickCount = 0; /* count of boxes ticked */
const arrBoxes = ["","","","","","","","",""];
const winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

setNewGame();
// Seeting New Game Board
function setNewGame() {
    // default current player
    currPlayer = "X";

    // set curr player in UI
    playerInfo.innerText = `Current Player - ${currPlayer}`;

    // clear boxes in UI
    boxes.forEach((box) => {
        box.innerText = "";
        // remove winning background
        box.classList.remove("win");
        // enable cursor
        box.style.pointerEvents = "auto";
    })

    // clear arrBoxes
    arrBoxes.forEach((box, index) => {
        arrBoxes[index] = "";
    })

    tickCount = 0;
    button.classList.remove("active");
}

// Game Board--->>>
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        // check empty cell
        if(arrBoxes[index] === "") {
            tickCount++;
            arrBoxes[index] = currPlayer;
            box.innerText = currPlayer;
            box.style.pointerEvents = "none";

            // player wins?
            let winner = checkPlayerWin();
            if(!winner) {
                switchPlayer();
            }

            // Match Tied
            if(tickCount >= 9) {
                playerInfo.innerText = "Game Tied !";
                activeBtn();
            }
        }
    })
})

function checkPlayerWin() {
    let winnerFound = false;
    winPositions.forEach((winArr, index) => {
        // not empty
        if(arrBoxes[winArr[0]] !== "" && arrBoxes[winArr[1]] !== "" && arrBoxes[winArr[2]] !== "") {
            if(arrBoxes[winArr[0]] === arrBoxes[winArr[1]] && arrBoxes[winArr[1]] === arrBoxes[winArr[2]]) {
                // winner found
                boxes[winArr[0]].classList.add("win");
                boxes[winArr[1]].classList.add("win");
                boxes[winArr[2]].classList.add("win");

                // winner in UI
                playerInfo.innerText = `Winner Player - ${currPlayer}`;

                // disable cursor
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                // active button for new game
                activeBtn();

                tickCount = 0;
                winnerFound = true;
                return winnerFound;
            }
        }
    })
    return winnerFound;
}

function switchPlayer() {
    if(currPlayer === "X") {
        currPlayer = "O";
    }
    else {
        currPlayer = "X";
    }
    playerInfo.innerText = `Current Player - ${currPlayer}`;
}

// Setting NewGame Button
function activeBtn() {
    button.classList.add("active");
}

button.addEventListener("click", () => {
    setNewGame();
})