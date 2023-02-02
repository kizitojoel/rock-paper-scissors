// Declare function to pick a random computer play
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

//Define a function that takes both user play and random computer play, and determines the winner using if statements
function playRound(){
    let computerChoice = getComputerChoice().toLowerCase();
    let userChoice = this.textContent.toLowerCase();

    const body = document.querySelector('body');
    //Clear any previous answer if any exists
    const previousAnswer = document.querySelector('.answer');
    if (previousAnswer)
    {
        body.removeChild(previousAnswer);
    }
    //Get the current scores from the document
    let userScore = parseInt(document.getElementById("user-score").textContent);
    let computerScore = parseInt(document.getElementById("computer-score").textContent);

    //Create the div for the answer
    const roundDiv = document.createElement('div');
    roundDiv.setAttribute('class', "answer added-div");

    //Checks who won and updates the scores accordingly
    
    
    if (computerChoice == userChoice){
        roundDiv.textContent = "Tie!";
    }
    //Player Win Scenarios(3)
    else if (userChoice === "rock" && computerChoice === "scissors"){
        roundDiv.textContent = "You Win! Rock beats Scissors";
        userScore += 1;
    }
    else if (userChoice === "paper" && computerChoice === "rock"){
        roundDiv.textContent = "You Win! Paper beats Rock";
        userScore += 1;
    }
    else if (userChoice === "scissors" && computerChoice === "paper"){
        roundDiv.textContent = "You Win! Scissors beats Paper";
        userScore += 1;
    }
    //Computer Win Scenarios
    else if (computerChoice === "rock" && userChoice === "scissors"){
        roundDiv.textContent = "You Lose! Rock beats Scissors";
        computerScore += 1;
    }
    else if (computerChoice === "paper" && userChoice === "rock"){
        roundDiv.textContent = "You Lose! Paper beats Rock";
        computerScore += 1;
    }
    else if (computerChoice === "scissors" && userChoice === "paper"){
        roundDiv.textContent = "You Lose! Scissors beats Paper";
        computerScore += 1;
    }
    else {
        roundDiv.textContent = "Invalid Play";
        computerScore += 1;
    }

    //Rewrite the scores in the scores divs
    document.getElementById("user-score").textContent = userScore.toString();
    document.getElementById("computer-score").textContent = computerScore.toString();
    
    body.appendChild(roundDiv);

    //If any of the scores is 5, run the pick winner function and display the winner on the screen
    if (userScore === 5 || computerScore === 5)
    {
        pickWinner(computerScore, userScore);
        buttons = document.querySelectorAll(".button");
        buttons.forEach(button => button.removeEventListener('click', playRound));
        
    }
}

//Define a game function that loops through the playRound function five times and keeps the score
function game(){

    //Add event listener to my buttons that call play round using the value of a button
    buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.addEventListener('click', round = playRound));

}

function pickWinner(computerScore, playerScore){
    const body = document.querySelector("body");
    const winnerDiv = document.createElement('div');
    winnerDiv.setAttribute('class', 'added-div');
    winnerDiv.textContent = `Overall Winner is ${playerScore > computerScore ? "User": "Computer"}`;

    //Clear any previous answer if any exists
    const previousAnswer = document.querySelector('.answer');
    if (previousAnswer)
    {
        body.removeChild(previousAnswer);
    }

    //Display the winner on the screen
    body.appendChild(winnerDiv);

}

game();