//  Here i have defined variables for rock, paper, and scissors to retrieve data from each choice pulled from their respective id tag.
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')


/* Ive created buttons for "RPS" in the html file. Now I need to visually display each option when user clicks the button
   and also display a randomly generated value for the computer's choice. */

//when the users clicks the button, display the value of the button id from html page. 

const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    
}))   



