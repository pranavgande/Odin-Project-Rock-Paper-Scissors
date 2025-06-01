console.log("Hello World");

let playerscore = 0;
let computerscore = 0;
const winningscore = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    if (playerscore >= winningscore || computerscore >= winningscore) return;

    const computerChoice = getComputerChoice();
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        playerscore++;
        resultText = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerscore++;
        resultText = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    }

    console.log(resultText);
    console.log(`Score => You: ${playerscore}, Computer: ${computerscore}`);

    // Win check
    if (playerscore === winningscore) {
        console.log("🎉 YOU WON THE GAME!");
    } else if (computerscore === winningscore) {
        console.log("💻 COMPUTER WON THE GAME!");
    }
}

const buttons = document.querySelectorAll(".signbutton");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.getAttribute("data-sign");
        playRound(humanChoice);
    });
});
