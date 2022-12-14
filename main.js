
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
            "The computer chose scissors.  Rock beats scissors, so you win!";
            player ++;
            document.getElementById("userScore").innerHTML = 
            "USER: "  + player;
        }

        else if(computerChoice == "Paper") {
            document.getElementById("Output").innerHTML =
            "The computer chose paper. Paper beats rock, you lose this one.";
            computer ++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            document.getElementById("Output").innerHTML =
            "The computer chose rock and you did too. Tie!";
        }

        
    }

    if(playerChoice == "Paper"){
        if(computerChoice == "Rock") {
            document.getElementById("Output").innerHTML =
            "The computer chose rock. Paper beats rock so you win!.";
            player++;
            document.getElementById("userScore").innerHTML = 
            "USER: " +player;
        }

        else if(computerChoice == "Scissors") {
            document.getElementById("Output").innerHTML =
            "The computer chose scissors. Scissors beats paper, so unfortunately you lost this one.";
            computer++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            document.getElementById("Output").innerHTML =
            "The computer chose paper and so did you. Tie!";
        }
    }

    if(playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            document.getElementById("Output").innerHTML =
            "The computer chose paper. Scissors beats paper so you win!.";

            player++;
            document.getElementById("userScore").innerHTML = 
            "USER: " + player;
        }

        else if(computerChoice == "Rock") {
            document.getElementById("Output").innerHTML =
            "The computer chose rock. Rock beats scissors, tough loss.";
            computer++;
            document.getElementById("compScore").innerHTML = 
            "COMP: " + computer;
        }

        else {
            document.getElementById("Output").innerHTML =
            "The computer chose scissors and so did you. Tie!";
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
        "They say there are no winners or losers. However, in this game you both lose.";
    }
}

//This will start the round
const btns = document.querySelectorAll('[value]');
btns.forEach(button => {
    button.addEventListener('click', () => {
        const selection = button.value;
        console.log(button.id);
        if(player <5 && computer<5){
            playRound(selection);
            setTimeout(() => {
                if(player == 5 || computer == 5) {
                    wonGame(player, computer);
                    setTimeout(reset, 2000);   
                }
            },1000)
            
        }
    })
});


const btnr = document.querySelector("#reset");
btnr.addEventListener('click', reset);

function reset() {
    
    player = 0;
    computer = 0;
    document.getElementById("userScore").innerHTML = 
        "USER: " + player;
    document.getElementById("compScore").innerHTML = 
        "COMP: " + computer;
    
    document.getElementById("Output").innerHTML = 
    "The game has restarted. Choose rock, paper, or scissors to start again!"
}

function playRound(selection) {
        let int = getRandomInt(max);
        let computerChoice = getComputerChoice(int);
        let playerChoice = selection;
        whoWins(computerChoice, playerChoice);
    
    
    
    // if(player >= 5 || computer >= 5){
    //     btns.forEach(button => {
    //         button.removeEventListener('click', () => { 
    //         });
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
