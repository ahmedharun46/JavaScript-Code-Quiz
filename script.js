var StartBTN = document.querySelector(".Start-Button");
var QuizRules = document.querySelector(".Quiz-Info")
//yo
var timerClass = document.querySelector(".Timer")
var timerSec = document.querySelector(".Timer-Sec")
var timer;
var timerCount = 60
var TotalScore = 0
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
function endgame() {

    timerClass.remove()

}
function startTimer() {
    showQuiz()
    timer = setInterval(function () {
        timerCount--;
        timerSec.textContent = timerCount
        if (timerCount <= 0) {
            endgame()
        }
    }, 1000);

    QuizRules.remove()
}

function showQuiz() {
    var questionEl = document.querySelector(".questions");
    var ele = document.querySelector(".h5q")
    if (ele) ele.remove()
    var h5El = document.createElement("h5")
    h5El.textContent = questionsQuiz[questionCounter].question
    h5El.classList.add("h5q")

    questionEl.append(h5El)
    var answersEl = document.querySelector(".answers")
    var Answers1 = document.querySelectorAll(".A1")
    if (Answers1) {
        for (i = 0; i < Answers1.length; i++) {
            Answers1[i].remove()
        }
    }
    for (var i = 0; i < questionsQuiz[questionCounter].answers.length; i++) {
        var buttonEL = document.createElement("button")
        buttonEL.textContent = questionsQuiz[questionCounter].answers[i]
        buttonEL.classList.add("A1")
        buttonEL.addEventListener("click", CorrectAnswers)
        answersEl.append(buttonEL)
    }


}

StartBTN.addEventListener("click", startTimer)


function CorrectAnswers(event) {
    console.log("btn", event.target.textContent, questionCounter, questionsQuiz.length)

    var UserAnswer = event.target.textContent
    if (questionsQuiz[questionCounter].correct == UserAnswer) {
        document.getElementById("check").textContent === CorrectAnswers
        TotalScore += 5
    } else {
        if (questionsQuiz[questionCounter].correct !== UserAnswer) {
            document.getElementById("check").textContent !== CorrectAnswers
            timerCount-=10
        }

    }
    
    //Quiz is not finshed
    if(questionCounter <= questionsQuiz.length){
        questionCounter++
        console.log(questionCounter)
        showQuiz()    
    } 
    //Not finshed
    else {
        alert("Put a message here.")
        console.log(questionCounter)
        endgame()
    }
}