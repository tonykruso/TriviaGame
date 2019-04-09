

//initiate the game
function initiate(){
    
}

//onkey up functions
var correctAnswers=0;
var incorrectAnswers=0;

var playerKey = document.getElementById("answer");
 document.onkeyup=function(event){
     var e = event.key;
       playerKey.value = e;
 };


//15 sec timer
var t = 15;
var intervalId;

function countDown(){
    if (!intervalId){
        intervalId = setInterval(decrement, 1000);
    }
}

//timer countdown
function decrement(){
    t--;
    $('#countdown').fadeOut(300, function () {
        $('#countdown').text(t);
        $('#countdown').show();  
    });

    //when timer runs out:
    if(t===0){
        reset();
    }    
}

countDown();

//QUestions, ANswers and Correct Answers numbers

var questions = [
    {
        quest: "1. Who directed 'E.T. the Extra-Terrestrial' (1982)?",
        answ: { 0: "Steven Spielberg", 1: "Quentin Tarantino", 2: "George Lucas"},
        cora: 1
    },
    {
        quest: "2. Who starred in the film 1973 movie 'Enter The Dragon'",
        answ: { 0: "Jackie Chan", 1: "Jet Li", 2: "Bruce Lee"},
        cora: 3
    },
    {
        quest: "3. In the movie 'Spaceballs', what are the Spaceballs attempting to steal from Planet Druidia?",
        answ: { 0: "The Schwartz", 1: "Yogurt", 2: "Air"},
        cora: 3
    },
    {
        quest: "4. Which of these movies did Jeff Bridges not star in?",
        answ: { 0: "Tron: Legacy", 1: "The Hateful Eight", 2: "True Grit"},
        cora: 2
    },
    {
        quest: "5. Who starred as Bruce Wayne and Batman in the Tim Burton's 1989 'Batman'",
        answ: { 0: "Michael Keaton", 1: "Val Kilmer", 2: "George Clooney"},
        cora: 1
    },
    {
        quest: "6. What is the highest grossing film of all time (without accounting for inflation)?",
        answ: { 0: "Titanic", 1: "Avengers: Infinity War", 2: "Avatar"},
        cora: 3
    },
    {
        quest: "7. What was the title of the first James Bond movie, released in 1962?",
        answ: { 0: "Goldfinger", 1: "Dr. No", 2: "Thunderball"},
        cora: 2
    },
    {
        quest: "8. Which of these actors is NOT a part of the cast for the 1972 movie 'The Godfather'",
        answ: { 0: "Peter O'Toole", 1: "Robert Duvall", 2: "Al Pacino"},
        cora: 1
    },
    {
        quest: "9. The 2002 film '28 Days Later' is mainly set in which European country?",
        answ: { 0: "United Kingdom", 1: "USA", 2: "France"},
        cora: 1
    },
    {
        quest: "10. What is the 2nd Rule of Fight Club?",
        answ: { 0: "Don't Hit Below the Belt!", 1: "Don't Talk about Fight Club", 2: "No Steal Toed Boots Allowed"},
        cora: 2
    }
] ; 

var lastQuestion = questions[questions.length - 1];
var questionObject = questions.length;
console.log("number of questions..." + questionObject);
console.log(lastQuestion);


z=0;

//game questions function
var gq = function(){
    if(z < questionObject){
        $("#game-question").text(questions[z].quest);
    }
    else {
        $("#countdown").text("");
        clearInterval(intervalId);
        setTimeout(function() { flip(); }, 300);
        $("#so").on("click", function(){
            window.location.reload(false);
        })
    }
}

gq();

function clearList(){
    $("#answers").empty();
    playerKey.value="";
}

//show correct answers/get answers
y=0;

var guess = function(){
    clearList();
    var size = Object.keys(questions[y].answ).length;
    for(i = 0; i < size; i++) {
        $("#answers").append("<li>" + questions[y].answ[i] + "</li>");
    }
}

guess();

function resetClock(){
    clearInterval(intervalId);
    intervalId=null;
    t=15;
    countDown();
}
//announce if answer was correct or not with correct answers when incorrect
function checkAnswer(){
    if (playerKey.value == questions[y].cora){
        correctAnswers++;
        $("#solution").text("Correct!");
         setTimeout(function(){
             $("#solution").text("");
         }, 5000);
    }
    else{
        incorrectAnswers++;
        $("#solution").html("Incorrect! <br> The correct answer is: " + questions[y].cora);
        setTimeout(function(){
            $("#solution").text("");
        }, 5000);
    }
    

}

//reset after questions are answered
$("#result").on("click", function(){
    checkAnswer();
    z++;
    gq();
    y++;
    guess();
    resetClock();
})

//for when timer runs out
function reset(){
    checkAnswer();
    z++;
    gq();
    y++;
    guess();
    resetClock();
}

//score displayed
function flip(){
    $('.screen-1', '.screen-2').toggle();
    $("#correct").text("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
}







