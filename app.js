const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const div = document.createElement('div');
const choices = ["Rock", "Paper", "Scissors"];
// something to keep track of winner and loser
let playerWins = 0;
let computerWins = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        determineWinner(button.textContent, computerInput());
    });
});

function computerInput() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function determineWinner(playerInput, compInput) {
    if (playerInput === compInput) {
        div.textContent = `Tie Game!`;
        div.setAttribute('class', 'white');
        container.appendChild(div);
    } else if 
    ((playerInput === 'Rock' && compInput === 'Scissors') 
    || (playerInput === 'Paper' && compInput === 'Rock') 
    || (playerInput === 'Scissors' && compInput === 'Paper')) {
        div.textContent = `You Win! ${playerInput} beats ${compInput}`;
        div.setAttribute('class', 'green');
        container.appendChild(div);
        playerWins++
    } else {
        div.textContent = `You Lost. ${compInput} beats ${playerInput}`;
        div.setAttribute('class', 'red');
        container.appendChild(div);
        computerWins++
    }

    handleWinner();
}

function handleWinner() {
    if (playerWins === 5) {
        div.setAttribute('class', 'yellow');
        div.textContent = `Score ${playerWins} - ${computerWins}! Player WON!`;
    }
    if (computerWins === 5) {
        div.setAttribute('class', 'red');
        div.textContent = `Score ${computerWins} - ${playerWins}! Player LOST!`;
    }
}
