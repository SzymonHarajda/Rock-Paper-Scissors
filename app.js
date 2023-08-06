let computerSelection;
let playerSelection;
let computerScore=0;
let playerScore=0;

const buttons = document.querySelectorAll(".button");
const score = document.querySelector(".score-label");
let winner = document.querySelector(".winner");

buttons.forEach((button)=> {
    button.addEventListener('click', ()=>{
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();
        console.log(playerSelection);
        game();

    });
});


const arr=["rock", "paper", "scissors"];
function computerChoice(){
    return arr[~~(Math.random()*arr.length)];
}

//game();


function game(){
   
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerChoice().toLowerCase();
    if(playerSelection == computerSelection){
        console.log("It's a tie");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection=="rock")        
        )
        {
            computerScore++;
            keepComputerScore();
            keepPlayerScore();

        }else{
            playerScore++;
            keepPlayerScore();
            keepComputerScore();
        }
    console.log(playerScore,computerScore);
    if(playerScore==5 && computerScore<playerScore){
        playerWin()
    console.log("Player wins!");
    resetGame();}
    else if (computerScore==5 && computerScore>playerScore){
    console.log("Computer wins!");
    computerWin()
    resetGame();}
    }
function keepPlayerScore(){
let playerScoreBox = document.querySelector("#player");
playerScoreBox.textContent = playerScore; 
}
function keepComputerScore(){
let computerScoreBox = document.querySelector("#computer");
computerScoreBox.textContent = computerScore;
}
function resetGame(){
    playerScore =0;
    computerScore=0;
   
}
function playerWin(){
    winner.textContent = "Player wins!"
}
function computerWin(){
    winner.textContent = "Computer wins!"

}
