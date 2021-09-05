const ranNums = [];

const answered = [];

const correct = [];

var randomArray = [];

// Assigning numbers to question

var qOne = document.getElementById("question1");
var qTwo = document.getElementById("question2");
var qThree = document.getElementById("question3");
var qFour = document.getElementById("question4");
var qFive = document.getElementById("question5");

const questions = [qOne, qTwo, qThree, qFour, qFive];

// count down time
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

var fiveMinutes = 60 * 1,
display = document.querySelector('#time');

function countDown() {
    startTimer(fiveMinutes, display);
    console.log(fiveMinutes);
    setTimeout(stop, 62000);
};

function stop() {
    alert("time up");
}

function start() {
    var result = questions[Math.floor(Math.random()*questions.length)];
    randomArray.push(result);
    answered.push(result);
    var hot = document.getElementById("startPage");
    if (hot.style.display = "block") {
        $(hot).fadeOut();
        $(result).fadeIn();
        $("#backNext").fadeIn();
        $("#finish").fadeIn();
    };
    countDown();
};

function next() {
    console.log(answered.length);
    if(answered.length == 5) {
        alert("Test Completed");
        return;
    }
    var result = questions[Math.floor(Math.random()*questions.length)];
    if(answered.includes(result)) {
        next();
        return;
    }
    if(answered.length == 1) {
        var oneQ = answered.slice(-1);
        $(oneQ).fadeOut();
        $(result).fadeIn();
    }
    if(answered.length > 1) {
    var lastQ = answered.slice(-1);
    $(lastQ).fadeOut();
    $(result).fadeIn();
    }
    answered.push(result);

}


// function nextQ() {
//     var result = questions[Math.floor(Math.random()*questions.length)];

//     if(randomArray.includes(randomGen)) {
//         nextQ();
//     } else {
//        randomArray.push(randomGen);
//     }
// }