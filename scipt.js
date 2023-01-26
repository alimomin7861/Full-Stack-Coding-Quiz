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
        gameOver();
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
    
    function gameOver() {
      initialsContainer.style.display = "block";
      questionsContainer.style.display = "none";
      startContainer.style.display = "none";
      timeEl.style.display = "none";
    
      // show final score
      finalScore.textContent = secondsLeft;
    }
    
    
    
    
    
    
    startButton.addEventListener('click', startQuiz)
    choice1.addEventListener("click", chose1);
    choice2.addEventListener("click", chose2);
    choice3.addEventListener("click", chose3);
    choice4.addEventListener("click", chose4);

