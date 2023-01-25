// Global variables
var timerEl = document.getElementById("timer");
var totalPoints = 0;
var timer;
var timerCount;

var timeEl = document.getElementById("time");
var startContainer = document.getElementById('start');
var startButton = document.getElementById('start-button');
var questionsContainer = document.getElementById('questions');
var titleEl = document.getElementById('title');
var buttonsEl = document.getElementById('buttons');
var initialsContainer = document.getElementById('initials');
var initalInputEl = document.getElementById('initial-input');
var submitButton = document.getElementById('submit');
var timerInterval;
var secondsLeft = 60;
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var choice4 = document.getElementById("button4");
var questionIndex = 0;
​
questionsContainer.style.display = "none";
initialsContainer.style.display = "none";
​


//Questions
var questions = [
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green"],
        answer: "Red"
    },
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green"],
        answer: "Red"
    },
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green"],
        answer: "Red"
    },
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green"],
        answer: "Red"
    },
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green"],
        answer: "Red"
    },
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green"],
        answer: "Red"
    }
];

// Function getQuestionsfor Start Quiz Button w Event Listner
var startQuiz = function(){
    timerCount = 90;
}



// The setTimer function starts
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
  }, 1000);
}







// Send eventlistner to first function
// hide intro(setAttribute), unhide questions (removeAttribute method)
    //function within function 1
    //Show array of choices with for loop 
    //
