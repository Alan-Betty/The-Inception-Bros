let score = JSON.parse(localStorage.getItem('score'))

if(score === null){
    score = {
        wins: 0,
        lose: 0,
        tie: 0,
    }
}

updateScoreElement();

function pickComputerMove(){
    const random_number = Math.random();
    let computer_guess = '';
    if(random_number >=0 && random_number < 1/3){
        computer_guess = 'rock';
    }else if(random_number >= 1/3 && random_number < 2/3){
        computer_guess='paper';
    }else if(random_number >= 2/3 && random_number < 1){
        computer_guess='paper';
    }

    return computer_guess;
}


function result(move){
    const computer_guess = pickComputerMove();
    let result = '';
    if (move === 'rock'){
        if (computer_guess === 'rock'){
            result = 'Its a Tie'
        }else if(computer_guess === 'paper'){
            result = 'You Lose'
        }else if(computer_guess === 'scissors'){
            result = 'Its a Win'
        }
    }else if(move === 'paper'){
        if (computer_guess === 'rock'){
            result = 'You Win'
        }else if(computer_guess === 'paper'){
            result = 'Its a Tie'
        }else if(computer_guess === 'scissors'){
            result = 'You Lose'
        }
    }else if(move === 'scissors'){
        if (computer_guess === 'rock'){
            result = 'You Lose'
        }else if(computer_guess === 'paper'){
            result = 'You Win'
        }else if(computer_guess === 'scissors'){
            result = 'Its a Tie'
        }
    }

    if (result === 'You Win'){
        score.wins += 1;
    }else if (result === 'You Lose'){
        score.lose += 1;
    }else if(result === 'Its a Tie'){
        score.tie += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-move')
        .innerHTML = `You played ${move}. Computer played ${computer_guess}`;
    document.querySelector('.js-result')
        .innerHTML = result;
}

function updateScoreElement() {
    document.querySelector('.js-score')
     .innerHTML = `wins:${score.wins}, loses:${score.lose}, ties:${score.tie}`;
}