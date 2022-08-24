
const min = 0;
const max = 3;

let player = 0;
let computer = 0;


//generate a random number between 0 and 2 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//let int = getRandomInt(max);

//makes the computer pick between rock paper or scissors using randomly generated #
function getComputerChoice(int) {
    let items = ['Rock', 'Paper', 'Scissors'];
    return items[int];
}

// let computerChoice = getComputerChoice(int);

// function that decides which user wins (computer or player)
function whoWins(computerChoice, playerChoice) {
    if(playerChoice == "Rock") {
        if(computerChoice == "Scissors") {
            console.log("Player wins. Rock beats scissors.");
            player ++;
            document.getElementById("userScore").innerHTML = 
            "USER: " + player;
        }

        else if(computerChoice == "Paper") {
            console.log("Computer wins. Paper beats rock.");
            computer ++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            console.log("Its a tie. You both chose rock. Yay.");
        }

        
    }

    if(playerChoice == "Paper"){
        if(computerChoice == "Rock") {
            console.log("Player wins. Paper beats rock.");
            player++;
            document.getElementById("userScore").innerHTML = 
            "USER: " +player;
        }

        else if(computerChoice == "Scissors") {
            console.log("Computer wins. Scissors beats Paper.");
            computer++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            console.log("It's a tie. You both chose Paper.");
        }
    }

    if(playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            console.log("Player wins. Scissors beats paper.");
            player++;
            document.getElementById("userScore").innerHTML = 
            "USER: " + player;
        }

        else if(computerChoice == "Rock") {
            console.log("Computer wins. Rock beats scissors.");
            computer++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            console.log("Tie");
        }
    }
}

function wonGame(player, computer) {
    if(player > computer) {
        console.log("Congrats! You won!");
    }

    else if(computer > player) {
        console.log("Damn, imagine losing to a computer. LOL");
    }

    else {
        console.log("There are no winners. You both lose.");
    }
}

// function getPlayerChoice() {

//     let playerChoice = window.prompt("Rock, Paper or Scissors?")

//     if(playerChoice.toLowerCase() === "rock") {
//         playerChoice = "Rock";
//     }

//     else if(playerChoice.toLowerCase() === "paper") {
//         playerChoice = "Paper"
//     }

//     else {
//         playerChoice = "Scissors"
//     }

//     return playerChoice;


// }


// GAME 

// for(let i = 0; i < 1; i++) {    

// for (let i = 0; i < 5; i++) {

//     let playerChoice = getPlayerChoice();
    
//     getRandomInt(max);
//     let int = getRandomInt(max);

//     getComputerChoice(int);
//     let computerChoice = getComputerChoice(int);

//     whoWins(computerChoice, playerChoice);


// }

// console.log(player);
// console.log(computer);

// wonGame(player, computer);

const btns = document.querySelectorAll('[value]');

btns.forEach(button => {
    button.addEventListener('click', e => {
        const selection = button.value;
        console.log(selection);
        playRound(selection);
    })
})



function playRound(selection) {
    let int = getRandomInt(max);
    let computerChoice = getComputerChoice(int);
    let playerChoice = selection;
    whoWins(computerChoice, playerChoice);
}

// playRound(selection);

// const sbtn = document.querySelector('sbutton');
// sbtn.addEventListener('click', playRound);







    
 