// Global variables
var timeEl = document.getElementById("time");
var timerInterval;
var secondsLeft = 60;

var startContainer = document.getElementById('start');
var startButton = document.getElementById('start-button');

var questionsContainer = document.getElementById('questionsContainer');
var questionTitleEl = document.getElementById('questionTitle');

var initialsContainer = document.getElementById('initials');
var initalInputEl = document.getElementById('initial-input');
var submitButton = document.getElementById('submit');

var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var choice4 = document.getElementById("button4");
var questionIndex = 0;

var viewHighscores = document.getElementById("viewHighscores");
var goBackButton = document.getElementById("goBackButton")
var clearHighscoresButton = document.getElementById("clearHighscoresButton")

questionsContainer.style.display = "none";
initialsContainer.style.display = "none";



//Questions
var questions = [
    {
      question: "1. Commonly used data types DO NOT include:",
      choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
      answer: "3. Alerts"
    },
    {
      question: "2. String values must be enclosed within ______ when being assigned to variables.",
      choices: ["1. Commas","2. Curly Brackets","3. Quotes","4. Parentheses"],
      answer: "3. Quotes"
    },
    {
      question: "3. A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["1. Javascript","2. Terminal/Bash","3. For Loops","4. Console.log"],
      answer: "4. Console.log"
    },
    {
      question: "4. The condition in an if / else statement is enclosed within _______.",
      choices: ["1. Quotes","2. Curly Brackets","3. Parentheses","4. Square Brackets"],
      answer: "2. Curly Brackets"
    },
    {
      question: "5. Arrays in JavaScript can be used to store ____.",
      choices: ["1. Numbers and Strings","2. Other Arrays","3. Booleans","4. All of the Above"],
      answer: "4. All of the Above"
    }
];



// Function startQuiz for start button Event Listner
var startQuiz = function(){
    timer();
    startContainer.style.display = "none";
    questionsContainer.style.display = "block";
    nextQuestion();
}



// Timer function 
function timer(){
    timeEl.textContent = secondsLeft 
     timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft 

        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
         
        }
    
      }, 1000);
}

// create an event listener for the button click
var nextQuestion = function(){
    titleEl.textContent = questions[questionIndex].question;
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {
    
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        secondsLeft += 10;
        timeEl.textContent = secondsLeft;
    } else {
        // wrong answer, deduct 10 second from timer
        secondsLeft -= 10;
        timeEl.textContent = secondsLeft;
    }
    
    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        endGame();
    }
}
    
    
var chose1 = function(){
    checkAnswer(0);
}
var chose2 = function(){
    checkAnswer(1);
}
var chose3 = function(){
    checkAnswer(2);
}
var chose4 = function(){
    checkAnswer(3);
}
    
function endGame() {
    initialsContainer.style.display = "block";
    questionsContainer.style.display = "none";
    startContainer.style.display = "none";
    timeEl.style.display = "none";
    
    // show final score
    score.textContent = secondsLeft;
}
    
    
    
    
    
//All Event Listeners for Buttons

//Start Page Buttons
startButton.addEventListener('click', startQuiz)
viewHighscore.addEventListener('click',______)

//Quiz Page Buttons
choice1.addEventListener("click", chose1);
choice2.addEventListener("click", chose2);
choice3.addEventListener("click", chose3);
choice4.addEventListener("click", chose4);

//Submit Score Page Button
submitButton.addEventListener('click',_____)

//Highscores Page Button
goBackButton.addEventListener('click',______)
clearHighscoresButton.addEventListener('click',______)




