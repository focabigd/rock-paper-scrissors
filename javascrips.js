function getComputerChoice() {
    let randomNumber=Math.floor(Math.random()*3)+1;
    if(randomNumber==1) {
        return "Rock";
    } 
    else if(randomNumber==2) {
        return "Paper";
    } 
    else if(randomNumber==3) {
        return "Scrissors";
    }
}
function getHumanChoice() {
    let choice=prompt("Rock/Paper/Scrissors");
    if(choice=='Rock')  {
        return "Rock";
    }
    else if(choice=='Paper') {
        return "Paper";
    } 
    else if(choice=='Scrissors') {
        return "Scrissors";
    }
}
let humanScore=0;
let computerScore=0;
function playRound() {
    let cc=getComputerChoice();
    let hc=getHumanChoice();
    if(cc==hc)  {
        console.log(cc+" is equal to "+hc+".Nobody wins")
    }
    else if(cc=='Rock' && hc=='Paper') {
        console.log(hc+" beats "+cc+".You win");
        humanScore++;
    }
    else if(cc=='Rock' && hc=='Scrissors') {
        console.log(cc+" beats "+hc+".You lose");
        computerScore++;
    }
    else if(cc=='Paper' && hc=='Scrissors') {
        console.log(hc+" beats "+cc+".You win");
        humanScore++;
    }
    else if(cc=='Paper' && hc=='Rock') {
        console.log(cc+" beats "+hc+".You lose");
        computerScore++;
    }
    else if(cc=='Scrissors' && hc=='Paper') {
        console.log(cc+" beats "+hc+".You lose");
        computerScore++;
    }
    else if(cc=='Scrissors' && hc=='Rock') {
        console.log(hc+" beats "+cc+".You win");
        humanScore++;
    }
}
function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if(humanScore>computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}
playGame();