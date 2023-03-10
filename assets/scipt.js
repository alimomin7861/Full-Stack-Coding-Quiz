// Global variables
var timerEl = document.getElementById("timer");
var timeEl = document.getElementById("time");
var timerInterval;
var secondsLeft = 0;

var startContainer = document.getElementById('start');
var startButton = document.getElementById('start-button');

var questionsContainer = document.getElementById('questions');
var questionTitleEl = document.getElementById('questionTitle');

var initialsContainer = document.getElementById('initials');
var initalInputEl = document.getElementById('initial-input');
var submitButton = document.getElementById('submit');

var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var choice4 = document.getElementById("button4");
var questionIndex = 0;

var highscoresContainer = document.getElementById("highscores")
var viewHighscores = document.getElementById("viewHighscores");
var goBackButton = document.getElementById("goBackButton")
var clearHighscoresButton = document.getElementById("clearHighscoresButton")
var allScoresList = document.getElementById("allScoresList");

questionsContainer.style.display = "none";
initialsContainer.style.display = "none";
highscoresContainer.style.display = "none";
timerEl.style.display = "none";



//Questions
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
      answer: "3. Alerts"
    },
    {
      question: "String values must be enclosed within ______ when being assigned to variables.",
      choices: ["1. Commas","2. Curly Brackets","3. Quotes","4. Parentheses"],
      answer: "3. Quotes"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["1. Javascript","2. Terminal/Bash","3. For Loops","4. Console.log"],
      answer: "4. Console.log"
    },
    {
      question: "The condition in an if / else statement is enclosed within _______.",
      choices: ["1. Quotes","2. Curly Brackets","3. Parentheses","4. Square Brackets"],
      answer: "2. Curly Brackets"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: ["1. Numbers and Strings","2. Other Arrays","3. Booleans","4. All of the Above"],
      answer: "4. All of the Above"
    }
];

// Timer function 
function timer(){
    timeEl.textContent = secondsLeft 
     timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft 

        if(secondsLeft <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          endQuiz();
        }
    
      }, 1000);
}

// Function startQuiz for start button Event Listner
var startQuiz = function(){
    secondsLeft = 60;
    timer();
    startContainer.style.display = "none";
    viewHighscores.style.display = "none";
    timerEl.style.display = "block";
    questionsContainer.style.display = "block";
    nextQuestion();
}


var nextQuestion = function(){
    questionTitleEl.textContent = questions[questionIndex].question;
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];

}
    
function checkAnswer(answer) {
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer -> nothing happens to timer
        timeEl.textContent = secondsLeft;
    } else {
        // wrong answer -> deduct 10 seconds from timer
        secondsLeft -= 10;
        timeEl.textContent = secondsLeft;
    }
    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex === questions.length ) {  // || secondsLeft === 0)
        // if there are no more questions or if the time runs out, end Quiz
        endQuiz();
    } else {
        // otherwise go to the next function
        nextQuestion();
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


function endQuiz() {
    initialsContainer.style.display = "block";
    questionsContainer.style.display = "none";
    startContainer.style.display = "none";
    timerEl.style.display = "none";
    
    //show score
    score.textContent = secondsLeft;
    clearInterval(timerInterval);
}

//storeScore function to put score into local storage
function storeScore (event){
    event.preventDefault();
    //store user initials input to variable initials
    var initials = initalInputEl.value;
    //store user score (secondsLeft) to variable score
    var score = secondsLeft;
    //create array to hold highscores
    var scoresArray;
    //create highscores array, but if it already exists within our local storage we will simply set the variable to it
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    //create object to hold user scores & initials
    var newScore = {
        scores: score,
        initials: initalInputEl.value,
    };
    //push 
    highscores.push(newScore);
    //set new array to local storage
    window.localStorage.setItem("highscores", JSON.stringify(highscores));


    //Go to current highscores once initials are submitted
    displayHighscores();
}

//displayHighscores function to show highscores
function displayHighscores (){
    startContainer.style.display = "none";
    timerEl.style.display = "none";
    questionsContainer.style.display = "none";
    initialsContainer.style.display = "none";
    highscoresContainer.style.display = "block";

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    for (var i = 0; i < highscores.length; i++) {
        var eachNewHighScore = document.createElement("li");
        eachNewHighScore.innerHTML = highscores[i].initials + ": " + highscores[i].scores;
        allScoresList.appendChild(eachNewHighScore);
    }
}





//All Event Listeners for Buttons

//Start Page Buttons
startButton.addEventListener('click', startQuiz)
viewHighscores.addEventListener('click', displayHighscores)

//Quiz Page Buttons
choice1.addEventListener("click", chose1);
choice2.addEventListener("click", chose2);
choice3.addEventListener("click", chose3);
choice4.addEventListener("click", chose4);


//Submit Score Page Button
submitButton.addEventListener('click',function(event){ 
    storeScore(event);
});

//Highscores Page Buttons
goBackButton.addEventListener('click',function(){
    highscoresContainer.style.display = "none";
    startContainer.style.display = "block";
    viewHighscores.style.display = "block";
    location.reload();
});

clearHighscoresButton.addEventListener('click',function(){
    window.localStorage.removeItem("highscores");
    allScoresList.innerHTML = "";
});




