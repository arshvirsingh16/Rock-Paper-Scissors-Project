
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
            document.getElementById("Output").innerHTML =
            "Player wins. Rock beats scissors.";
            player ++;
            document.getElementById("userScore").innerHTML = 
            "USER: " + player;
        }

        else if(computerChoice == "Paper") {
            document.getElementById("Output").innerHTML =
            "Computer wins. Paper beats rock.";
            computer ++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            document.getElementById("Output").innerHTML =
            "Its a tie. You both chose rock. Yay.";
        }

        
    }

    if(playerChoice == "Paper"){
        if(computerChoice == "Rock") {
            document.getElementById("Output").innerHTML =
            "Player wins. Paper beats rock.";
            player++;
            document.getElementById("userScore").innerHTML = 
            "USER: " +player;
        }

        else if(computerChoice == "Scissors") {
            document.getElementById("Output").innerHTML =
            "Computer wins. Scissors beats Paper.";
            computer++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            document.getElementById("Output").innerHTML =
            "It's a tie. You both chose Paper.";
        }
    }

    if(playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            document.getElementById("Output").innerHTML =
            "Player wins. Scissors beats paper.";

            player++;
            document.getElementById("userScore").innerHTML = 
            "USER: " + player;
        }

        else if(computerChoice == "Rock") {
            document.getElementById("Output").innerHTML =
            "Computer wins. Rock beats scissors.";
            computer++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            document.getElementById("Output").innerHTML =
            "Tie";
        }
    }
}
 
function wonGame(player, computer) {
    if(player > computer) {
        document.getElementById("Output").innerHTML =
        "Congrats! You won!";
    }

    else if(computer > player) {
        document.getElementById("Output").innerHTML =
        "Damn, imagine losing to a computer. LOL";
    }

    else {
        document.getElementById("Output").innerHTML =
        "There are no winners. You both lose.";
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
    button.addEventListener('click', () => {
        const selection = button.value;
        
        playRound(selection);
    })
});

function reset() {
    
    wonGame(player, computer);
    player = 0;
    computer = 0;
    document.getElementById("userScore").innerHTML = 
        "USER: " + player;
    document.getElementById("compScore").innerHTML = 
        "COMP: " + computer;
}

function playRound(selection) {
    let int = getRandomInt(max);
    let computerChoice = getComputerChoice(int);
    let playerChoice = selection;
    whoWins(computerChoice, playerChoice);
    // if(player >= 5 || computer >= 5){
    //     btns.forEach(button => {
    //         button.removeEventListener('click', () => {
                
    //         })
    //     });
        
    //     setTimeout(reset, 5000);
    //     btns.forEach(button => {
    //         button.addEventListener('click', () => {
    //             const selection = button.value;
                
    //             playRound(selection);
    //         })
    //     });
    // }

}








    
 