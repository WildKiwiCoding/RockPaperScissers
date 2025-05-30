document.getElementById("play-button").addEventListener("click", function() {
    document.getElementById("game-container").classList.remove("hidden");
    this.style.display = "none"; 
});

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result;
    
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById("result").textContent = `You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`;
}