let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawMsg = document.querySelector(".Draw-msg");

let turn1 = true; //player 1, player 2
let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () => {
    turn1 = true;
    count = 0;
    enableBox();
    msgContainer.classList.add("hide");
    drawMsg.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if(turn1){
            //player 1 
            box.innerText = "X";
            box.style.color = "#073b4c";
            turn1=false;
        }
        else{
            box.innerText = "O";
            box.style.color = "#118ab2";
            turn1=true;
        }
        count++;
        console.log(count);
        box.disabled = true;
        checkWinner();
    });
});

const disableBox = () => {
    for(let i of boxes){
        i.disabled = true;
    }
};

const enableBox = () => {
    for(let i of boxes){
        i.disabled = false;
        i.innerText="";
    }
};

const draw = () => {
    console.log("Draw!!");
    drawMsg.classList.remove("hide");
    disableBox();
}

const showWinner = (Winner) => {
    if(Winner ==="X"){
        Winner = "Player 1";
    }
    else{
        Winner = "Player 2";
    }
    msg.innerText = `Congratulations , Winner is ${Winner}`;
    msg.style.color="#3a7ca5";
    confetti({
    particleCount: 3000,
    spread: 200,
    origin: { y: 1}
});
    msgContainer.classList.remove("hide");
    disableBox();

}


const checkWinner = () => {
    for (let i of winPattern){
        // storing in individual variables
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        
        // checking if no pattern box is empty
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos3 === pos1)
             {
            showWinner(pos1);
            return true;
             }
        }
    }
    if(count == 9)
    {
        draw();
    }
};

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);