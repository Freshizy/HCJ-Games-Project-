//  Here i have defined variables for rock, paper, and scissors to retrieve data from each choice pulled from their respective id tag.
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')


/* Ive created buttons for "RPS" in the html file. Now I need to visually display each option when user clicks the button
   and also display a randomly generated value for the computer's choice. */

//when the users clicks the button, display the value of the button id from html page. 

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result 

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    // when user clicks on either option the game will also generate the computers choice
    generateComputerChoice()
    getResult()
}))   

// here is the function defined for the computer's choice.
function generateComputerChoice() {

    /* here we can generate a random number from 0-1 * 3(<-- number of buttons)... for readability i added 1
     so than later when defining what each number represents its easier to work between 1 2 or 3 */

    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    // there is a quick way to write the code below 


    if (randomNumber === 1){
        computerChoice = 'Rock'
    }
    if (randomNumber === 2){
        computerChoice = 'Paper'
    }
    if (randomNumber === 3){
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// function below is the result of both ... who wins ? ( also there is a quicker way to write this code)
function getResult (){
    if(computerChoice === userChoice){
        result = 'It is a Draw!';
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Win!';
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissor'){
        result = 'You Lost!';
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissor'){
        result = 'You Win!';
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You Lose!';
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Win!';
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'You Lose!';
    }
    resultDisplay.innerHTML = result
}




