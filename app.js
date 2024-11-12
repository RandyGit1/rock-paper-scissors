
// function getHumanChoice(){
//     choice = prompt("Enter your attack (rock, paper, or scissors)");
//     choice = choice.trim().toLowerCase();
//     return choice;
// }


function getComputerChoice(){
    random = Math.floor(Math.random() * 3) + 1;
    if (random === 1){
        return "rock";
    }
    if (random === 2){
        return "paper";
    }
    else return "scissors";
}




function playRound(user, ai){
    winner = 0; //user = 1, computer = 2;
    if (user === "rock" && ai === "scissors"){
        winner = 1;
    }
    else if (ai === "rock" && user === "scissors"){
        winner = 2;
    }
    else if (user === "paper" && ai === "rock"){
        winner = 1;
    }
    else if (ai === "paper" && user === "rock"){
        winner = 2;
    }
    else if (user === "scissors" && ai === "paper"){
        winner = 1;
    }
    else if (ai === "scissors" && user === "paper"){
        winner = 2;
    }

    if (winner === 1){
        message.textContent = `You Win! ${user} beats ${ai}`;
        userScore.textContent = parseInt(userScore.textContent) + 1;

    }
    else if (winner === 2){
        message.textContent = `You Lose! ${ai} beats ${user}`;
        aiScore.textContent = parseInt(aiScore.textContent) + 1;
    }
    else {
        message.textContent = `Tie. ${user} matches ${ai}`;
    }
}

const attacks = document.querySelector(".attacks");

attacks.addEventListener("click", playRoundButton);

function playRoundButton(e){
    const button = e.target;
    let attack;
    if (button.className === 'rock'){
        attack = "rock";
    }
    else if (button.className === 'paper') {
        attack = 'paper';
    }
    else {
        attack = 'scissors';
    }
    playRound(attack, getComputerChoice());
}

const userScore = document.querySelector(".user");
const aiScore = document.querySelector(".ai");
const message = document.querySelector(".message");
const reset = document.querySelector(".reset");


reset.addEventListener("click", () => {
    userScore.textContent = 0;
    aiScore.textContent = 0;
})



// function playGame(rounds){

//     if (rounds % 2 === 0){
//         rounds += 1;
//     }
//     humanScore = computerScore = 0;

//     for (let i = 1; i <= rounds; i++){
//         console.log(`Round ${i}\n`);
//         ai = getComputerChoice();

//         do{
//             user = getHumanChoice();
//             if (user !== "rock" && user !== "paper" && user !== "scissors"){
//                 alert("Invalid attack. Try again");
//             }
//         }
//         while (user !== "rock" && user !== "paper" && user !== "scissors");

//         winner = playRound(user, ai);
//         if (winner === 1){
//             humanScore += 1;
//         }
//         else if (winner === 2){
//             computerScore += 1;
//         }
//         else {
//             i -= 1;
//         }
//     }

//     if (humanScore > computerScore){
//         console.log("WINNER");
//     }
//     else {
//         console.log("LOSER!");
//     }

// }

