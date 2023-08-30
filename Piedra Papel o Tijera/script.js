const playerNameInput = document.getElementById("playerName");

playerNameInput.addEventListener("blur", () => {
    if (playerNameInput.value.trim() === "") {
        alert("Debes ingresar tu nombre.");
        playerNameInput.focus();
    }
});

const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let pcScore = 0;

document.querySelectorAll(".options img").forEach(option => {
    option.addEventListener("click", () => {
        const playerChoice = option.id;
        const pcChoice = options[Math.floor(Math.random() * options.length)];
        
        // Aquí puedes llamar a una función para determinar el ganador y actualizar el marcador
    });
});

function determineWinner(playerChoice, pcChoice) {
    if (playerChoice === pcChoice) {
        showResult("Empate");
    } else if (
        (playerChoice === "rock" && pcChoice === "scissors") ||
        (playerChoice === "paper" && pcChoice === "rock") ||
        (playerChoice === "scissors" && pcChoice === "paper")
    ) {
        showResult("Ganaste");
        playerScore++;
    } else {
        showResult("PC Ganó");
        pcScore++;
    }
    
    updateScore();
    checkEndGame();
}

function showResult(resultText) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultText;
}

function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("pcScore").textContent = pcScore;
}

function checkEndGame() {
    if (playerScore === 3) {
        showResult("¡Ganaste el juego!");
        disableOptions();
    } else if (pcScore === 3) {
        showResult("PC ganó el juego.");
        disableOptions();
    }
}

function disableOptions() {
    document.querySelectorAll(".options img").forEach(option => {
        option.removeEventListener("click", clickHandler);
        option.style.cursor = "not-allowed";
    });
}

let totalAttempts = 0;

function clickHandler() {
    if (totalAttempts < 5) {
        totalAttempts++;
        const playerChoice = this.id;
        const pcChoice = options[Math.floor(Math.random() * options.length)];
        determineWinner(playerChoice, pcChoice);
    }
}
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    playerScore = 0;
    pcScore = 0;
    totalAttempts = 0;
    updateScore();
    enableOptions();
    clearResult();
});


const startButton = document.getElementById("start");

startButton.addEventListener("click", () => {
    startGame();
});

function startGame() {
    enableOptions();
    clearResult();
    playerScore = 0;
    pcScore = 0;
    totalAttempts = 0;
    updateScore();
    
    document.querySelectorAll(".options img").forEach(option => {
        option.addEventListener("click", clickHandler);
        option.style.cursor = "pointer";
    });
}

function enableOptions() {
    document.querySelectorAll(".options img").forEach(option => {
        option.addEventListener("click", clickHandler);
        option.style.cursor = "pointer";
    });
}

function clearResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
}