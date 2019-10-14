var userChoice, computerChoice, rocknum = 0.3, papernum = 0.6, scissorsnum = 1;
window.alert("Welcome! Let's play Rock-Paper-Scissors");
userChoice = window.prompt("you want rock or paper or scissors?");
userChoice = userChoice.toLowerCase();
computerChoice = Math.random();
if (computerChoice <= rocknum) {            //computer's choice is rock for this block
    if (userChoice === "rock") {
        window.alert("Tie beacuse computer chose rock");
    } else if (userChoice === "paper") {
        window.alert("you win because computer chose rock and paper covers rock");
    } else if (userChoice === "scissors") {
        window.alert("you lose because computer chose rock and rock destroys scissors");
    } else {
        window.alert("Enter valid input");
    }
} else if (computerChoice > rocknum && computerChoice <= papernum) {        //computer's choice is paper for this block
    if (userChoice === "rock") {
        window.alert("you lose because computer chose paper and paper covers rock");
    } else if (userChoice === "paper") {
        window.alert("Tie because computer chose paper");
    } else if (userChoice === "scissors") {
        window.alert("you win because computer chose paper and scissors cut paper");
    } else {
        window.alert("Enter valid input");
    }
} else if (computerChoice > papernum && computerChoice <= scissorsnum) {     //computer's choice is scissors for this block
    if (userChoice === "rock") {
        window.alert("you win becuase computer chose scissors and rock destroy scissors");
    } else if (userChoice === "paper") {
        window.alert("you lose because computer chose scissors and scissors cut paper" );
    } else if (userChoice === "scissors") {
        window.alert("tie because computer chose scissors");
    } else {
        window.alert("Enter valid input");
    }
}

