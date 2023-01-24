// Declare function to pick a random computer play
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

//Define a function that takes both user play and random computer play, and determines the winner using if statements
function getWinner(computerChoice, userChoice){
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
}

//Display the winner onto the screen

//Define a game function that loops through the playRound function five times and keeps the score