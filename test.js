var currentQ;

const answered = [];

const back = [];

const checker = [];

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
    setTimeout(stop, 62000);
};

function stop() {
    alert("time up");
}

async function start() {
    currentQ = "";
    var result = questions[Math.floor(Math.random()*questions.length)];
    answered.push(result);
    back.push(result);
    currentQ = result;
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
  checker.push(currentQ);
  if(answered.length == 5) {
    alert("Clicked Submit");
    return;
    }
      currentQ= "";
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
    back.push(result);
    currentQ = result;
}

var fArg = -2;

var sArg = -1;

async function navBack() {
  var aList = answered.length;
  var currentPage = answered.indexOf(currentQ);

  if(aList > currentPage) {
    var pPage = answered.slice(fArg--, sArg--);
    if(pPage.length == 0) {
      alert("back complete");
      return;
    }
    $(currentQ).hide();
    $("#finish").hide();
    $("#waiting").show();
    await delay(1000);
    $("#waiting").hide();
    $(pPage).show();
    $("#finish").show();
  }
  currentQ= "";
  reAssign();
  counter = answered.indexOf(currentQ) + 1;
}

var nextA1;
var nextA2;
var nAns;
var counter = 1;

async function navNext() {
  let up = answered.length;
  let down = answered.indexOf(currentQ) +1;

  if(up == down) {
    next();
    return;
  }
  if(counter == nAns) {
    next();
    return;
  }
  console.log(answered.includes(currentQ));
  console.log(currentQ);
  console.log(answered);
  if (answered.includes(currentQ)) {
    fArg = -2;

    sArg = -1;
    nAns = answered.length;
    // reAssign();
    let ind = answered.indexOf(currentQ) + 1;
    if(ind < answered.length) {
      nextA1 = ind;
      nextA2 = ind + 1;
      var nPage = answered.slice(nextA1++, nextA2++);
      if(nPage.length == 0) {
        return;
      }
      $(currentQ).hide();
      $("#finish").hide();
      $("#waiting").show();
      await delay(1000);
      $("#waiting").hide();
      $(nPage).show();
      $("#finish").show();
      counter++;
    }
    currentQ= "";
    reAssign();
    return;

  }
  next();
};


function reAssign() {
  if($('#question1:visible').length != 0) {
    currentQ = qOne;
  }

  if($('#question2:visible').length != 0) {
    currentQ = qTwo;
  }

  if($('#question3:visible').length != 0) {
    currentQ = qThree;
  }

  if($('#question4:visible').length != 0) {
    currentQ = qFour;
  }

  if($('#question5:visible').length != 0) {
    currentQ = qFive;
  }
}