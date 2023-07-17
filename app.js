let computerSelection;
let playerSelection;
let computerScore=0;
let playerScore=0;


const arr=["rock", "paper", "scissors"];
function computerChoice(){
    return arr[~~(Math.random()*arr.length)];
}

game();


function game(){
    while(playerScore < 5 && computerScore < 5){
    playerSelection = prompt("Rock, paper, or scissors?");
    computerSelection=computerChoice().toLowerCase();
    if(playerSelection == computerSelection){
        console.log("It's a tie");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection=="rock")        
        )
        {
            computerScore++;

        }else{
            playerScore++;
        }
    console.log(playerScore,computerScore);
    }
    if(playerScore > computerScore){
        console.log("Player wins!");
    }
    else if(playerScore < computerScore){
        console.log("Computer wins!");
    }
}