var StartBTN = document.querySelector(".Start-Button");
//Need a timer element 
var timerSec = document.querySelector(".Timer-Sec")
var timer;
var timerCount= 60
var questionCounter= 0
var questionsQuiz = [{
    question: "What operator is used to access arrays ",
    answers: [ "Brackets", "Quotations", "Parentheses", "Period"],
    correct: "Brackets"
}, {}, {}, {}]
function endgame(){

}
function startTimer(){
    showQuiz()
timer=setInterval(function(){
timerCount--;
timerSec.textContent=timerCount
if (timerCount===0){
    endgame()
}
}, 1000);

}

function showQuiz(){
    var questionEl = document.querySelector(".questions");
    var h5El = document.createElement("h5") 
    h5El.textContent= questionsQuiz[questionCounter].question
    questionEl.append(h5El)
    var answersEl = document.querySelector(".answers")
    for(var i = 0; i < questionsQuiz[questionCounter].answers.length;i++){
        var buttonEL= document.createElement("button")
        buttonEL.textContent=questionsQuiz[questionCounter].answers [i]
        answersEl.append(buttonEL)
    }
}

StartBTN.addEventListener("click", startTimer)
