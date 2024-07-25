let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-button");
let newGame_btn = document.querySelector("#newGame-button");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn_O = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn_O = true;
    enableBoxes();
    msg_container.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn_O) {
            box.innerText = "O";
            turn_O = false;
        }
        else{
            box.innerText = "X";
            turn_O = true;
        }

        box.disabled = true;

        checkWinner();
    });
});


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `🎉Congratulations Our Winner is  ${winner}🎉`;
    msg_container.classList.remove("hide");
    disableBoxes();
};
