let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const retry = document.querySelector("#retry");

const gencomChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawgame = () => {
    msg.innerText = "The game was a draw. Try again.";
    msg.style.backgroundColor = "black";
};

const showwinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost! ${compChoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "red";
    }
};

retry.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    msg.innerText = "Game reset. Choose your option.";
    msg.style.backgroundColor = "";
});

const playgame = (userchoice) => {
    const compChoice = gencomChoice();

    if (userchoice === compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
