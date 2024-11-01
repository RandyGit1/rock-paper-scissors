
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

function getHumanChoice(){
    choice = prompt("Enter your attack (rock, paper, or scissors)");
    choice = choice.trim().toLowerCase();
    return choice;
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
        console.log(`You Win! ${user} beats ${ai}`);
    }
    else if (winner === 2){
        console.log(`You Lose! ${ai} beats ${user}`);
    }
    else {
        console.log(`Tie. ${user} matches ${ai}`);
    }

    return winner;
}

function playGame(rounds){

    if (rounds % 2 === 0){
        rounds += 1;
    }
    humanScore = computerScore = 0;

    for (let i = 1; i <= rounds; i++){
        console.log(`Round ${i}\n`);
        ai = getComputerChoice();

        do{
            user = getHumanChoice();
            if (user !== "rock" && user !== "paper" && user !== "scissors"){
                alert("Invalid attack. Try again");
            }
        }
        while (user !== "rock" && user !== "paper" && user !== "scissors");

        winner = playRound(user, ai);
        if (winner === 1){
            humanScore += 1;
        }
        else if (winner === 2){
            computerScore += 1;
        }
        else {
            i -= 1;
        }
    }

    if (humanScore > computerScore){
        console.log("WINNER");
    }
    else {
        console.log("LOSER!");
    }

}

playGame(5);
