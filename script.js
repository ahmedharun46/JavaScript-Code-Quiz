var startBtn = document.querySelector(".start-button");
var endGameBtn = document.querySelector(".End-Game-Button");
var quizRules = document.querySelector(".Quiz-Info")
var timerClass = document.querySelector(".Timer")
var timerSec = document.querySelector(".Timer-Sec")
var timerCount = 60
var totalScore = 0
var questionCounter = 0
var questionsQuiz = [{
    question: "What operator is used to access arrays (1)",
    answers: ["Brackets", "Quotations", "Parentheses", "Period"],
    correct: "Brackets"
},
{
    question: "What is my name (2)",
    answers: ["Brackets", "Quotations", "Parentheses", "Period"],
    correct: "Brackets"
},
{
    question: "What operator is used to access arrays (3)",
    answers: ["Brackets", "Quotations", "Parentheses", "Period"],
    correct: "Brackets"
},
{
    question: "What operator is used to access arrays (4)",
    answers: ["Brackets", "Quotations", "Parentheses", "Period"],
    correct: "Brackets"
}]
var results = []

timerSec.textContent = timerCount
startBtn.addEventListener("click", startTimer)

//Function to start timer
function startTimer() {
    quizRules.style.display = 'none'
    showQuiz()
    setInterval(function () {
        timerCount--;
        timerSec.textContent = timerCount
        if (timerCount === 0) {
            endgame()
        }
    }, 1000);
}

//Function for Quiz Questions and Answers Buttons
function showQuiz() {
    var startButtonNotVisible = document.getElementById('start-button').style.display
    if (startButtonNotVisible === 'none') {
        console.log("here")
        document.querySelector('.high-scores').style.display = 'none'
        document.querySelector('.all-done').style.display = 'none'
        document.querySelector('.start-button').style.display = 'block'
        quizRules.style.display = 'block'
    }
    // var highScoresSection = document.getElementById('high-scores')
    // if (highScoresSection) {
    //     highScoresSection.style.display = 'none'
    // }
    var questionEl = document.querySelector(".questions");
    var ele = document.querySelector(".h5q")
    if (ele) ele.remove()
    var h5El = document.createElement("h5")
    if (questionCounter < questionsQuiz.length) h5El.textContent = questionsQuiz[questionCounter].question
    h5El.classList.add("h5q")

    questionEl.append(h5El)
    var answersEl = document.querySelector(".answers")
    var Answers1 = document.querySelectorAll(".A1")
    if (Answers1) {
        for (i = 0; i < Answers1.length; i++) {
            Answers1[i].remove()
        }
    }
    for (var i = 0; i < questionsQuiz.length; i++) {
        var buttonEL = document.createElement("button")
        if (questionCounter < questionsQuiz.length) buttonEL.textContent = questionsQuiz[questionCounter].answers[i]
        buttonEL.classList.add("A1")
        buttonEL.addEventListener("click", correctAnswers)
        answersEl.append(buttonEL)
    }

    if (questionCounter === questionsQuiz.length) {
        endgame()
    }
}

function endgame() {
    timerClass.remove()
    document.getElementById('questions').style.display = 'none'
    document.getElementById('answers').style.display = 'none'
    document.getElementById('start-button').style.display = 'none'
    document.getElementById('all-done').style.display = 'block'
    // startBtn.textContent = 'All Done'
    // startBtn.classList.remove("start-button")
    // startBtn.classList.add('All-Done')

    resultsView()
}

//Function for selecting answers and removing time for wrong answers 
function correctAnswers(e) {
    var userAnswer = e.target.textContent
    var correctAnswer = questionsQuiz[questionCounter].correct
    // userAnswer === correctAnswer ? totalScore += 5 : timerCount -=10 <-- ternary operator aka fancy if statement
    if (userAnswer === correctAnswer) {
        totalScore += 5
    } else {
        timerCount -= 10 
    }

    //Quiz is not finshed
    if (questionCounter < questionsQuiz.length) {
        questionCounter++
        showQuiz()
    }
}

function resultsView() {
    var initials
    var contentSection = document.getElementById('content')
    
    var totalScoreDiv = document.createElement('div')
    totalScoreDiv.setAttribute("id", "total-score");
    totalScoreDiv.textContent = `Your final score is ${totalScore}.`
    contentSection.appendChild(totalScoreDiv)
    
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("id", "intials");
    textBox.setAttribute("placeholder", "enter your initials");
    contentSection.appendChild(textBox)
    
    var submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit-button");
    contentSection.appendChild(submitBtn)

    textBox.addEventListener('change', (e) => {
        initials += e.target.value
    }) // figure why this isnt saving
    results.push({initials, totalScore})
    submitBtn.addEventListener('click', highScores)
}


function highScores() {
    document.getElementById('all-done').style.display = 'none'
    var highScoresView = document.createElement('section')
    highScoresView.setAttribute('id', 'high-scores')
    document.getElementById('content').style.display = 'none'
    document.body.appendChild(highScoresView)


    var scoresList = document.createElement('ol')
    results.map(score => {
        var eachScore = document.createElement('li')
        eachScore.textContent = `${score.initials} ${score.totalScore}`
        scoresList.appendChild(eachScore)

    })
    highScoresView.appendChild(scoresList)
    
    var restartButton = document.createElement('button')
    restartButton.setAttribute("id", "restart-button");
    restartButton.textContent = "Restart"
    highScoresView.appendChild(restartButton)

    restartButton.addEventListener('click', startTimer)
}

// we need to add quiz rules
// add the timer back
// add the start button back