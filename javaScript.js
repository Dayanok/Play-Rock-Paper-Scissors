let userScore = 0,
computerScore = 0,
<<<<<<< Updated upstream
totalRound = 0;
const userScore_span = document.getElementById("user_score"),
computerScore_span = document.getElementById("computer_score"),
scoreBoard_section = document.querySelector(".score_board"),
result_p = document.querySelector(".result p"),
rock_figure = document.getElementById("r"),
paper_figure = document.getElementById("p"),
scissors_figure = document.getElementById("s"),
finalResult = document.querySelector("game-finish"),
start_b = document.getElementById("start_button");
=======
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
 
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
function convertToWord(letter){
    if(letter === "r"){
        return "Rock";
    }else if(letter === "p"){
        return "Paper";
    }else
        return "Scissors";
}

function win(userChoice, computerChoice){
=======
function playround(userChoice,computerChoice,outcome){
    let glowClass;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            totalRound++;
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

=======
    gameOn=false;
>>>>>>> Stashed changes
}

function startButton(){
    userScore = 0;
    computerScore= 0;
    userScore_span.innerText = 0;
    computerScore_span.innerText = 0;
    result_p.innerText = 'First to 5 points wins!';  
<<<<<<< Updated upstream
    console.clear();
}

function destroy() {
    let olddata = document.getElementById("game-finish").lastChild;
    document.getElementById("game-finish").removeChild(olddata);
}
=======
    document.querySelector('#game-finish').innerHTML='';
    console.clear();
    gameOn=true;
}


>>>>>>> Stashed changes

function stopFunction(e) {
        if(userScore === 5 || computerScore === 5){
            alert('The game has finished click okay to see your score!')
                e.preventDefault();
        } 
}

function playGame(){ 
    rock_figure.addEventListener('click', function() {
<<<<<<< Updated upstream
        game("r"); 
        stopFunction(event); 
        console.log("You clicked Rock"); 
    })   
    paper_figure.addEventListener('click', function() {
        game("p");
        stopFunction(event); 
        console.log("You clicked Paper");
=======
        game(ROCK);  
    }) 

    paper_figure.addEventListener('click', function() {
        game(PAPER);
>>>>>>> Stashed changes
    }) 
    
    scissors_figure.addEventListener('click', function() {
<<<<<<< Updated upstream
        game("s");
        stopFunction(event); 
        console.log("You clicked Scissors");
=======
        game(SCISSORS);
>>>>>>> Stashed changes
    }) 
    
    start_b.addEventListener('click', function() {
        startButton();
        destroy();
    })
    
}
playGame();  


     


    