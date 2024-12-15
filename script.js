
// function that gets the computer choice
// doing this without using arrays
// generate random int values for choices (0,1,2) =>  (rock, paper, scissors)

function getComputerChoice() {
    random_int = Math.floor(Math.random() * 3);

    if (random_int == 0) {
        choice = "rock";
    } else if (random_int == 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice
}

// Use input to get human choice

function getHumanChoice() {
    choice = prompt("(Rock, paper, or scissors?")
    return choice.toLowerCase()
}

// Keep score

let humanScore = 0;
let computerScore = 0;

// logic to play a single round

function playRound(humanChoice, computerChoice) {
    
    result = "You chose " + humanChoice + " and the computer chose " + computerChoice


    // check for tie
    if (humanChoice == computerChoice) {
        console.log(result)
        console.log("It's a tie")
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            humanScore++;
            console.log(result);
            console.log("You win!");
        } else {
            console.log(result);
            console.log("You Lose!");
            computerScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            console.log(result);
            console.log("You win!");
        } else {
            computerScore++;
            console.log(result);
            console.log("You Lose!");
        }
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            humanScore++;
            console.log(result);
            console.log("You win!");
        } else {
            computerScore++;
            console.log(result);
            console.log("You Lose!");
        }
    }
    

} 

let round = 1;

while (round <=5) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    round++;
}


if (humanScore > computerScore) {
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
    console.log("You win the game!")

} else {
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
    console.log("You lose the game!")
}