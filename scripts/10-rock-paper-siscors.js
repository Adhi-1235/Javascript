let score=JSON.parse(localStorage.getItem('score'))||{
    win:0,
    lose:0,
    Tie:0,
};

updateScore();





/*
if(!score){
score={
    win:0,
    lose:0,
    Tie:0
};*/


function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result='';
    if (playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result='lose';
        }
        else if(computerMove === 'paper'){
          result='win';
        }
        else if(computerMove ==='scissors'){
          result='Tie';
        }
    }

    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result='win';
        }
        else if(computerMove === 'paper'){
            result='Tie';
        }
        else if(computerMove ==='scissors'){
            result='lose';
        }
    }

    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result='Tie';
        }
        else if(computerMove === 'paper'){
            result='lose';
        }
        else if(computerMove ==='scissors'){
            result='win';
        }
    }

    if(result === 'win'){
        score.win += 1;
    }
    else if(result === 'lose'){
        score.lose += 1;
    }
    else if(result === 'Tie'){
        score.Tie +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML=`You ${result}`;

    document.querySelector('.js-move').innerHTML=` you
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    computer`;

    

    updateScore();

}

function updateScore(){
    document.querySelector('.js-score')
       .innerHTML= `Wins:${score.win},loss:${score.lose},Tie:${score.Tie}`;
};


function pickComputerMove() {
        const randomNumber=Math.random();
        let computerMove='';
        if(randomNumber >=0 && randomNumber < 1 / 3){
            computerMove='rock';   
        }
        else if(randomNumber >=1/3 && randomNumber <2/3){
            computerMove='paper';   
        }
        else if(randomNumber >=2/3 && randomNumber <1){
            computerMove='scissors';
        }
    return computerMove;
} 