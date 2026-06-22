let userScore = 0;
let botScore = 0;

const user_score = document.querySelector("#user-score");
const bot_score = document.querySelector("#bot-score");


let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");


// bot choice
const botChoice = () =>{
    const options = ["rock", "paper","scissors"];
    const bot = Math.floor(Math.random() * 3);
    return options[bot];
}

// user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const UserChoice = choice.getAttribute("id");
        console.log("choice was clicked",UserChoice);
        playGame(UserChoice);
    })
})

// playing the game
const playGame = (UserChoice) => {
    console.log("user choice is ", UserChoice);
    // computer choice
    const compChoice = botChoice();
    console.log("Bot choice is ", compChoice);

    if(UserChoice === compChoice){
        //draw game
        draw();
    }
    else{
        let userWins = true;
        if(UserChoice === "rock"){
            userWins = compChoice === "paper" ? false : true;
        }
        else if(UserChoice === "paper"){
            userWins = compChoice === "scissors" ? false : true;
        }
        else{
            userWins = compChoice === "rock" ? false :true;
        }
        showWinner(userWins,UserChoice,compChoice);
    }
}

const draw = () =>{
    console.log("Game was Drawn");
        msg.innerText = "Game Drawn. Play Again!!";
        msg.style.backgroundColor = "#e2ad3d";
        msg.style.color = "black";
}

const showWinner = (userWins,UserChoice,compChoice) => {
    if(userWins){
        userScore++;
        user_score.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! Your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#247052";
        msg.style.color = "black";
    }
    else {   
        botScore++;
        bot_score.innerText = botScore;
        console.log("Bot win");
        msg.innerText = `You lose! Your ${compChoice} lost ${UserChoice}`;
        msg.style.backgroundColor = "#C84444";
        msg.style.color = "black";
    }
}