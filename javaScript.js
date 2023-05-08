let userScore = 0,
computerScore = 0,
totalRound = 0,
gameOn=true;
const ROCK='rock',
PAPER='paper',
SCISSORS='scissors',
userScore_span = document.getElementById("user_score"),
 computerScore_span = document.getElementById("computer_score"),
 scoreBoard_section = document.querySelector(".score_board"),
 result_p = document.querySelector(".result p"),
 rock_figure = document.getElementById(ROCK),
 paper_figure = document.getElementById(PAPER),
 scissors_figure = document.getElementById(SCISSORS),
 start_b = document.getElementById("start_button");
 


function computerOptions(){
    const computerSelection = Math.floor(Math.random() * 3);
    switch(computerSelection){
        case 0:
            return ROCK;
            break;
        case 1:
            return PAPER;
            break;
        case 2: 
            return SCISSORS;
    };
}


function playround(userChoice,computerChoice,outcome){
    let glowClass;
    const smallUserWord = "User:".fontsize(3).sup();
    const smallComputerWord = "Computer:".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    if(outcome==='win'){
        userScore++;
        userScore_span.innerHTML = userScore;
        glowClass='green-glow';
        result_p.innerHTML = `${smallUserWord} ${(userChoice)}  beats ${smallComputerWord} ${(computerChoice)}  . You win!`;
    }else if(outcome==='lose'){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        glowClass='red-glow';
        result_p.innerHTML = `${smallUserWord} ${(userChoice)}  loses to ${smallComputerWord} ${(computerChoice)}  . You lost... :(`; 
    }else{
        glowClass='gray-glow';
        result_p.innerHTML = `${smallUserWord} ${(userChoice)}  equals ${smallComputerWord} ${(computerChoice)}  . It's a draw..`; 
    }
    userChoice_div.classList.add(glowClass);
    setTimeout(() => userChoice_div.classList.remove(glowClass), 300);
}


function game(userChoice){
    if(gameOn){
        const computerChoice = computerOptions();
        if(userChoice === computerChoice){
            playround(userChoice, computerChoice,'draw');
        }else{
            switch(userChoice){
                case ROCK:
                    if(computerChoice === PAPER){
                        playround(userChoice, computerChoice,'lose');
                    }else{
                        playround(userChoice, computerChoice,'win');
                    }
                    break;
                case SCISSORS:
                    if(computerChoice === PAPER){
                        playround(userChoice, computerChoice,'win');
                    }else{
                        playround(userChoice, computerChoice,'lose');
                    }
                    break;
                case PAPER:
                    if(computerChoice === SCISSORS){
                        playround(userChoice, computerChoice,'lose');
                    }else{
                        playround(userChoice, computerChoice,'win');
                    }
                }    
            }
            if(userScore===5 || computerScore===5){
                console.log(`you have played 5 rounds the score is User:${userScore}  Computer:${computerScore}`);
                finishGame(); 
            }
    }
  
}

function finishGame(){
    const playerWon=userScore>computerScore;
    const message=`The Game is Over...${playerWon?'You':'The Computer'} WON! \n ${playerWon?userScore:computerScore}/${playerWon?computerScore:userScore}`
    const massegeSpan=document.createElement('span');
    massegeSpan.innerText=message;
    document.querySelector("#game-finish").appendChild(massegeSpan);
    gameOn=false;
}

function startButton(){
    userScore = 0;
    computerScore= 0;
    userScore_span.innerText = 0;
    computerScore_span.innerText = 0;
    result_p.innerText = 'First to 5 points wins!';  
    document.querySelector('#game-finish').innerHTML='';
    console.clear();
    gameOn=true;
}




function playGame(){ 
    rock_figure.addEventListener('click', function() {

        game(ROCK);  
    }) 

    paper_figure.addEventListener('click', function() {
        game(PAPER);
    }) 
    
    scissors_figure.addEventListener('click', function() {
        game(SCISSORS);
    }) 
    
    start_b.addEventListener('click', function() {
        startButton();
    })
    
}
playGame();  


     


    
