let calculation = '';
ShowOnScreen();
function updateCalculator(value){
    calculation += value;
}

function ShowOnScreen(){
    document.querySelector('.result').
    innerHTML = calculation;
}