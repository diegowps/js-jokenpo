/**
 * 
 * Jokenpo
 * @author Diego
 * @link https://github.com/diegowps/js-jokenpo.git
 * @version 1.0
 * 
 */



const choices = ['Pedra', 'Papel', 'Tesoura'];
let userScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playGame('Pedra'));
document.getElementById('paper').addEventListener('click', () => playGame('Papel'));
document.getElementById('scissors').addEventListener('click', () => playGame('Tesoura'));

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Empate';
    } else if (
        (userChoice === 'Pedra' && computerChoice === 'Tesoura') ||
        (userChoice === 'Papel' && computerChoice === 'Pedra') ||
        (userChoice === 'Tesoura' && computerChoice === 'Papel')
    ) {
        userScore++;
        return 'Você venceu!';
    } else {
        computerScore++;
        return 'Você perdeu!';
    }
}

function displayResult(userChoice, computerChoice, result) {
    document.getElementById('message').textContent = `Você escolheu ${userChoice}, o computador escolheu ${computerChoice}. ${result}`;
    document.getElementById('score').textContent = `Placar: Você ${userScore} - ${computerScore} Computador`;
}
