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
            box.style.color = "black";
            turn_O = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#ff0000";
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

const  checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}


newGame_btn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);



modeBtn.addEventListener("click", () =>{
    if (currMode === "light") {
        currMode = "dark";
      document.querySelector("body").style.color = "white";
      document.querySelector("#msg").style.color = "white";
      document.querySelector("body").style.backgroundColor = "#e67300";
    } 
    else {
        currMode ="light";
        document.querySelector("body").style.color = "black";
        document.querySelector("#msg").style.color = "black";
        document.querySelector("body").style.backgroundColor = "#ffcc80";
    }

    console.log(currMode);
});