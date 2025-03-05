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

    let body = document.querySelector("body")
    let humanScoreDiv = document.querySelector(".humanScore")
    let computerScoreDiv = document.querySelector(".computerScore")

    humanScoreDiv.textContent = "Your score: " + humanScore
    computerScoreDiv.textContent = "Computer's score: " + computerScore

    let winnerDisplay = document.createElement("div")
    if (humanScore == 5) {
        winnerDisplay.textContent = "You have won!"
        body.appendChild(winnerDisplay)
        body.removeChild(buttonRow)
    }
    if (computerScore == 5) {
        winnerDisplay.textContent = "The computer has won!"
        body.appendChild(winnerDisplay)
        body.removeChild(buttonRow)
    }
}
let humanScore = 0
let computerScore = 0

let buttonRow = document.querySelector(".buttonRow")
buttonRow.addEventListener('click', (event) => {
    switch (event.target.id) {
        case "rockBtn":
            playRound("rock", getComputerChoice())
            break;
        case "paperBtn":
            playRound("paper", getComputerChoice())
            break;
        case "scissorsBtn":
            playRound("scissors", getComputerChoice())
            break;
    }
})