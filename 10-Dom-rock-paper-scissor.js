let score = JSON.parse(localStorage.getItem('score'))
||
{
    wins : 0,
    losses : 0,
    ties : 0,
}

function resetButton(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.score').innerText = 'Wins : 0,Losser : 0 , Ties : 0';
    document.querySelector('.chose').innerHTML = ''
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1 /3 ){
        computerMove = 'rock';
    }else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3)
    {
        computerMove = 'paper';
    }else if(randomNumber >= 2 / 3 && randomNumber < 1)
    {
        computerMove = 'scissors';
    }

    console.log(computerMove);

    return computerMove;

}


function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissors')
    {
        
        if(computerMove === 'rock'){
            result = 'You loss';
        }else if( computerMove 
        === 'paper'){
            result = 'You win';
        }else if(computerMove === 'scissors')
        {
            result = 'Tie';
        }

        if(result === 'You win'){
            score.wins += 1;
        }else if(result === 'You loss'){
            score.losses += 1;
        }else if(result === 'Tie'){
            score.ties += 1;
        }
        
    }else if(playerMove === 'paper')
    {
        
        if(computerMove === 'rock'){
                result = 'You win';
            }else if( computerMove === 'paper'){
                result = 'Tie';
            }else if(computerMove === 'scissors')
            {
                result = 'You loss';
            }

        if(result === 'You win'){
            score.wins += 1;
            }else if(result === 'You loss'){
                score.losses += 1;
            }else if(result === 'Tie'){
                score.ties += 1;
            }

    }else if(playerMove === 'rock'){
        
        if(computerMove === 'rock'){
            result = 'Tie';
            }else if( computerMove === 'paper'){
                result = 'You loss';
            }else if(computerMove === 'scissors')
            {
                result = 'You win';
            }


        if(result === 'You win'){
                score.wins += 1;
            }else if(result === 'You loss'){
                score.losses += 1;
            }else if(result === 'Tie'){
                score.ties += 1;
            }
    }

    document.querySelector('.result').innerText = result;

    document.querySelector('.chose').innerHTML = `You
     <img src="./images/${playerMove}-emoji.png" class="move-icon"> - Computer <img src="./images/${computerMove}-emoji.png" class="move-icon">`;

    document.querySelector('.score').innerText = `Wins : ${score.wins}, Losses : ${score.losses}, Ties: ${score.ties}`;
    localStorage.setItem('score', JSON.stringify(score));

    console.log(score);

    // alert(`You picked ${playerMove}.Computer picked ${computerMove}. ${result}
    // wins: ${score.wins} losses: ${score.losses} Ties : ${score . ties}` );

    console.log(`score  ${score}`);  


}