let userScore = 0,
computerScore = 0,
totalRound = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_section = document.querySelector(".score_board");
const result_p = document.querySelector(".result p");
const rock_figure = document.getElementById("r");
const paper_figure = document.getElementById("p");
const scissors_figure = document.getElementById("s");
const finalResult = document.querySelector("game-finish");
const start_b = document.getElementById("start_button");

function computerOptions(){
    const computerSelection = Math.floor(Math.random() * 3);
    switch(computerSelection){
        case 0:
            return "r";
            break;
        case 1:
            return "p";
            break;
        case 2: 
            return "s"
    };
}

function convertToWord(letter){
    if(letter === "r"){
        return "Rock";
    }else if(letter === "p"){
        return "Paper";
    }else
        return "Scissors";
}
function playround(userChoice,computerChoice,outcome){
    let glowClass;
    
}
function win(userChoice, computerChoice){
    const smallUserWord = "User:".fontsize(3).sup();
    const smallComputerWord = "Computer:".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord} ${convertToWord(userChoice)}  beats ${smallComputerWord} ${convertToWord(computerChoice)}  . You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}


function lose(userChoice, computerChoice){
    const smallUserWord = "User:".fontsize(3).sup();
    const smallComputerWord = "Computer:".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord} ${convertToWord(userChoice)}  loses to ${smallComputerWord} ${convertToWord(computerChoice)}  . You lost... :(`; 
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "User:".fontsize(3).sup();
    const smallComputerWord = "Computer:".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord} ${convertToWord(userChoice)}  equals ${smallComputerWord} ${convertToWord(computerChoice)}  . It's a draw..`; 
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
    const computerChoice = computerOptions();
        if(userChoice === computerChoice){
            draw(userChoice, computerChoice);
        }else{
            switch(userChoice){
                case "r":
                    if(computerChoice === "p"){
                        lose(userChoice, computerChoice);
                    }else{
                        win(userChoice, computerChoice);
                    }
                    break;
                case "s":
                    if(computerChoice === "p"){
                        win(userChoice, computerChoice);
                    }else{
                        lose(userChoice, computerChoice);
                    }
                    break;
                case "p":
                    if(computerChoice === "s"){
                        lose(userChoice, computerChoice);
                    }else{
                        win(userChoice, computerChoice);
                    }
                }    
            }
            totalRound++;
            if(userScore===5 || computerScore===5){
                console.log(`you have played 5 rounds the score is User:${userScore}  Computer:${computerScore}`);
                finishGame(); 
            }
        }

function finishGame(){
    const playerWon=userScore>computerScore;
    const message=`The Game is Over...${playerWon?'You':'The Computer'} WON! \n ${playerWon?userScore:computerScore}/${playerWon?computerScore:userScore}`
    const massegeSpan=document.createElement('span');
    massegeSpan.innerText=message;
    document.querySelector("#game-finish").appendChild(massegeSpan);

}

function startButton(){
    userScore = 0;
    computerScore= 0;
    userScore_span.innerText = 0;
    computerScore_span.innerText = 0;
    result_p.innerText = 'First to 5 points wins!';  
    console.clear();
}

function destroy() {
    let olddata = document.getElementById("game-finish").lastChild;
    document.getElementById("game-finish").removeChild(olddata);
}

function stopFunction(e) {
        if(userScore === 5 || computerScore === 5){
            alert('The game has finished click okay to see your score!')
                e.preventDefault();
        } 
}

function playGame(){ 


    rock_figure.addEventListener('click', function() {
        game("r"); 
        stopFunction(event); 
        console.log("You clicked Rock"); 
    })   
    paper_figure.addEventListener('click', function() {
        game("p");
        stopFunction(event); 
        console.log("You clicked Paper");
    }) 
    
    scissors_figure.addEventListener('click', function() {
        game("s");
        stopFunction(event); 
        console.log("You clicked Scissors");
    }) 
    
    start_b.addEventListener('click', function() {
        startButton();
        destroy();
    })
    
}
playGame();  


     


    