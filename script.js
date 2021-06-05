var randomNumber = getRandomNumber();
console.log(`the random generated number is ${randomNumber}`)
window.onload = function()
{
    document.getElementById("number-submit").addEventListener("click",playGame);
    document.getElementById("restart-game").addEventListener("click",resetGame);
    getRandomNumber();
}


function playGame()
{
    var numberGuess = document.getElementById("number-guess").value;
    console.log(`the user guessed number is ${numberGuess}`);
    displayResult(numberGuess);
    getHistory(numberGuess);
    displayHistory();
}
function resetGame()
{
    randomNumber = getRandomNumber();
    document.getElementById("result").innerHTML = " ";
    gusesses = [];
    displayHistory()
}
function displayResult(numberGuess)
{
    if(numberGuess > randomNumber)
    {
        showNumberAbove();
    }
    else if(numberGuess < randomNumber)
    {
        showNumberBelow();
    }
    else
    {
        showYouWon();
    }
}

function getRandomNumber()
{
    var num1  = Math.floor(Math.random() * 101);
    return num1;
}

function showYouWon()
{
    let text = "Awesome job you have  guessed the right number";
    let dialog;
    dialog = "<div class ='alert alert-success' role = 'alert'>";
    dialog += text;
    dialog += "</div>";
    document.getElementById("result").innerHTML = dialog;
}
function showNumberAbove()
{
    let text = "Your Guess is too high"
    let dialog;
    dialog = "<div class ='alert alert-warning' role = 'alert'>";
    dialog += text;
    dialog += "</div>";
    document.getElementById("result").innerHTML = dialog;
}
function showNumberBelow()
{
    let text = "Your Guess is too low";
    let dialog;
    dialog = "<div class ='alert alert-warning' role = 'alert'>";
    dialog += text;
    dialog += "</div>";
    document.getElementById("result").innerHTML = dialog;
}
let gusesses =[];

function getHistory(guess)
{
    gusesses.push(guess);
    console.log(gusesses);
}
function displayHistory()
{
    let history;
    history = "<ul class= 'list-group'>";
    for(let i=0;i<gusesses.length;i++)
    {
        history += "<li class = 'list-group-item'>" + 
        `You have guessed  ${gusesses[i]}` + "</li>";
    }
    history += "</ul>"
    document.getElementById("history").innerHTML = history;
}