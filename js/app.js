
const tooltipInfo = document.querySelector('#showTool');
const toolTip = document.querySelector('.tooltip');
const humanScore = document.querySelector('#humanScore');
const computerScore = document.querySelector('#computerScore');
const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const announcer = document.querySelector('#announce');

toolTip.addEventListener('mouseover', () => {
    tooltipInfo.classList.remove('tooltiphide');
    tooltipInfo.classList.add('tooltipshow');
});


toolTip.addEventListener('mouseout', () => {
    tooltipInfo.classList.remove('tooltipshow');
    tooltipInfo.classList.add('tooltiphide');
});

humanScore.innerText = 0;

computerScore.innerText = 0;

const HideAnnouncer = () => {
    announcer.classList.remove('show');
    announcer.classList.add('hide');
}



const play = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const pChoice = playerChoice.innerText = choices[Math.floor(Math.random() * choices.length)];
    const cChoice = computerChoice.innerText = choices[Math.floor(Math.random() * choices.length)];

    announcer.classList.add("show");
    announcer.classList.remove("hide");

    // if statement for rock
    if (pChoice == choices[0] && cChoice == choices[2]) {
        humanScore.innerText++;
        announcer.innerText = "The Human Wins!";
        setTimeout(HideAnnouncer, 2000);
    } else if (pChoice == choices[0] && cChoice == choices[1]) {
        computerScore.innerText++;
        setTimeout(HideAnnouncer, 2000);
        announcer.innerText = "The AI Wins!";
    } else if (pChoice == choices[0] && cChoice == choices[0]) {
        announcer.innerText = "Tie, Keep Battling!";
        setTimeout(HideAnnouncer, 2000);
    }

    // if statement for paper
    if (pChoice == choices[1] && cChoice == choices[0]) {
        humanScore.innerText++;
        announcer.innerText = "The Human Wins!";
        setTimeout(HideAnnouncer, 2000);
    } else if (pChoice == choices[1] && cChoice == choices[2]) {
        computerScore.innerText++;
        announcer.innerText = "The AI Wins!";
        setTimeout(HideAnnouncer, 2000);
    } else if (pChoice == choices[1] && cChoice == choices[1]) {
        announcer.innerText = "It's A Tie! But You've Got Him On The Fence!";
        setTimeout(HideAnnouncer, 2000);
    }

    // if statement for scissors
    if (pChoice == choices[2] && cChoice == choices[1]) {
        humanScore.innerText++;
        announcer.innerText = "The Human Wins!";
        setTimeout(HideAnnouncer, 2000);
    } else if (pChoice == choices[2] && cChoice == choices[0]) {
        computerScore.innerText++;
        announcer.innerText = "The AI Wins!";
        setTimeout(HideAnnouncer, 2000);
    } else if (pChoice == choices[2] && cChoice == choices[2]) {
        announcer.innerText = "Close Call! Odds Are Hopefully With You!";
        setTimeout(HideAnnouncer, 2000);
    }

    // end game
    if (humanScore.innerText == 10) {
        announcer.innerText = "Player Wins! Great Battle";
        setTimeout(reset, 3000);
    } else if (computerScore.innerText == 10) {
        announcer.innerText = "Computer Wins This Time! Better Luck Next Time..";
        setTimeout(reset, 3000);
    }

}

const reset = () => {
    announcer.classList.add("show");
    announcer.classList.remove("hide");
    humanScore.innerText = 0;
    computerScore.innerText = 0;
    playerChoice.innerHTML = '&infin;';
    computerChoice.innerHTML = '&infin;';
    announcer.innerText = "Game Reset! Get Ready To Battle!";
}
