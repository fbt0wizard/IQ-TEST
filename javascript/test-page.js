const ranNums = [];

const answered = [];

const correct = [];

var randomArray = [];

async function delay(delayInms) {
    return new Promise (resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    })
}

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

async function start() {
    var result = questions[Math.floor(Math.random()*questions.length)];
    randomArray.push(result);
    answered.push(result);
    var hot = document.getElementById("startPage");
    if (hot.style.display = "block") {
        $(hot).hide();
        $("#waiting").show();
        await delay(1000);
        $("#waiting").hide();
        $(result).show();
        $("#backNext").show();
        $("#finish").show();
    };
    countDown();
};

async function next() {
    if(answered.length == 5) {
        alert("Test Completed, Result Is Prosessing");
        return;
    }
    if (answered.length == 1) {
        var oneQ = answered.slice(-1);
        $(oneQ).hide();
        $("#finish").hide();
        $("#waiting").show();
    }

    if(answered.length > 1) {
        var lastQ = answered.slice(-1);
        $(lastQ).hide();
        $("#finish").hide();
        $("#waiting").show();
    }
    console.log(answered.length);

    var result = questions[Math.floor(Math.random()*questions.length)];
    if(answered.includes(result)) {
        next();
        return;
    }
    if (answered.length == 1) {
        await delay(1000);
        $("#waiting").hide();
        $(result).show();
        $("#finish").show();
    }
    if(answered.length > 1) {
    await delay(1000);
    $("#waiting").hide();
    $(result).show();
    $("#finish").show();
    }
    answered.push(result);

    console.log(answered);
}

async function back() {
    
}
