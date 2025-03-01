function randomInt(max) {
    return Math.floor(Math.random() * max) + 1
}

function getComputerChoice() {
    switch (randomInt(3)) {
        case 1:
            computerChoice = "rock"
            break
        case 2:
            computerChoice = "paper"
            break
        case 3:
            computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your RPS selection").toLowerCase()
    if (['rock', 'paper', 'scissors'].includes(humanChoice)) {
        return humanChoice
    } else {
        console.log("bad input")
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "rock") {
                    console.log("Tie")
                } else if (computerChoice == "paper") {
                    console.log("You lose")
                    computerScore += 1
                } else {
                    console.log("You win")
                    humanScore += 1
                }
                break
            case "paper":
                if (computerChoice == "rock") {
                    console.log("You win")
                    humanScore += 1
                } else if (computerChoice == "paper") {
                    console.log("Tie")
                } else {
                    console.log("You lose")
                    computerScore += 1
                }
                break
            case "paper":
                if (computerChoice == "rock") {
                    console.log("You win")
                    humanScore += 1
                } else if (computerChoice == "paper") {
                    console.log("Tie")
                } else {
                    console.log("You lose")
                    computerScore += 1
                }
                break
            case "scissors":
                if (computerChoice == "rock") {
                    console.log("You lose")
                    computerScore += 1
                } else if (computerChoice == "paper") {
                    console.log("You win")
                    humanScore += 1
                } else {
                    console.log("Tie")
                }

        }
    }

    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Game over")
    console.log("human score ", humanScore)
    console.log("computer score", computerScore)
}

playGame()