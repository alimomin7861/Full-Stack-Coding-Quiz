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


questionsContainer.style.display = "none";
initialsContainer.style.display = "none";



//Questions
var questions = [
    {
      question: "1. What does HTML stand for",
      choices: ["1. Hello Thanks Michelle Love", "2. Hyper Text Markup Language", "3. High Top Moose Limo", "4. Hippo Top Mountain Lion"],
      answer: "2. Hyper Text Markup Language"
    },
    {
      question: "2. What is your favorite color?",
      choices: ["1. Red","2. Blue","3. Green","4. Yellow"],
      answer: "1. Red"
    },
    {
      question: "3. What is your favorite color?",
      choices: ["1. Red","2. Blue","3. Green","4. Yellow"],
      answer: "2. Blue"
    },
    {
      question: "4. What does HTML stand for",
      choices: ["1. Hello Thanks Michelle Love","2. Hyper Text Markup Language","3. High Top Moose Limo","4. Hippo Top Mountain Lion"],
      answer: "3. High Top Moose Limo"
    }
];



// Function startQuiz for start button Event Listner
var startQuiz = function(){
    timer();
    startContainer.style.display = "none";
    questionsContainer.style.display = "block";
    nextQuestion();
  }



// timer function 
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






// Send eventlistner to first function
// hide intro(setAttribute), unhide questions (removeAttribute method)
    //function within function 1
    //Show array of choices with for loop 
    //
