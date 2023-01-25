// Declare function to pick a random computer play
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

//Define a function that takes both user play and random computer play, and determines the winner using if statements
function playRound(computerChoice, userChoice){
    if (computerChoice == userChoice){
        return "Tie!";
    }
    //Player Win Scenarios(3)
    else if (userChoice === "rock" && computerChoice === "scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if (userChoice === "paper" && computerChoice === "rock"){
        return "You Win! Paper beats Rock";
    }
    else if (userChoice === "scissors" && computerChoice === "paper"){
        return "You Win! Scissors beats Paper";
    }
    //Computer Win Scenarios
    else if (computerChoice === "rock" && userChoice === "scissors"){
        return "You Lose! Rock beats Scissors";
    }
    else if (computerChoice === "paper" && userChoice === "rock"){
        return "You Lose! Paper beats Rock";
    }
    else if (computerChoice === "scissors" && userChoice === "paper"){
        return "You Lose! Scissors beats Paper";
    }
    else {
        return "Invalid Play";
    }
}




//Display the winner onto the screen

//Define a game function that loops through the playRound function five times and keeps the score
function game(){
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let userChoice = prompt("What is your play? ").toLowerCase();
        let computerChoice = getComputerChoice().toLowerCase();
        let round = playRound(computerChoice, userChoice);
        console.log(round);
        //Check if the computer won or the user won and update the scores accordinglys
        if (round.substring(0, 7) === "You Win"){
            userScore++;
        }
        else if (round.substring(0, 8) === "You Lose"){
            computerScore ++;
        }
        console.log(computerScore);
        console.log(userScore);
        
    }
    if (userScore === computerScore){
        return "Tie";
    }
    else
    {
    console.log(`Overall Winner is ${userScore > computerScore ? "User": "Computer"}`);
    }
}

game();