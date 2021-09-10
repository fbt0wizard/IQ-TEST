// setting container for already answered question
const clickedQ = [];

// setting delay function
async function delay(delayInms) {
    return new Promise (resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    })
}

// Program timer
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

// set timer to 6 minute
var fiveMinutes = 60 * 6,
display = document.querySelector('#time');

function countDown() {
    startTimer(fiveMinutes, display);
    setTimeout(stop, 362000);
};

function stop() {
    alert("time up");
    return;
}

// Progress bar
var w = 0;
var i = 0;
function move() {
  let progress = document.getElementById('myProgress');
  if(progress.style.visibility = "hidden") {
      progress.style.visibility = "visible";
  }
  if(w < 100) {
    i = 1;
    var elem = document.getElementById('myBar');
    var width = w;
        var newWidth = width + 20;
        elem.style.width = newWidth + '%';
        elem.innerHTML = newWidth + '%';
        w = newWidth;
        i = 0;
    }
}
  
  // Assigning var to question
  var qOne = document.getElementById("question1");
  var qTwo = document.getElementById("question2");
  var qThree = document.getElementById("question3");
  var qFour = document.getElementById("question4");
  var qFive = document.getElementById("question5");
  var qSix = document.getElementById("question6");
  
  // setting Container of questions
  const questions = [qOne, qTwo, qThree, qFour, qFive, qSix];
  
  // generate 5 reandom questions
  const randomQuestions = [];
  
function getRandomQ() {
    if(randomQuestions.length < 5) {
      var result = questions[Math.floor(Math.random()*questions.length)];
      if(randomQuestions.includes(result)) {
        start();
      } else {
        randomQuestions.push(result);
        start();
      }    
    } else {
      return;
    }
}
  
  // variale of current displaying function
  var currentQ;
  
  //setting start button function
async function start() {
    uncheck();
    getRandomQ();
    var firstTest = randomQuestions.slice(0, 1);
    $("#startPage").hide();
    $("#waiting").show();
    await delay(1000);
    $("#waiting").hide();
    $(firstTest).show();
    $("#backNext").show();
    $("#finish").show();
    let time = document.getElementById('time');
    if(time.style.visibility = "hidden") {
        time.style.visibility = "visible";
    }
    
    countDown();
    reAssign();
}
  
  //setting next button function
  var sliceArg1;
  var sliceArg2;
async function next() {
    if(clickedQ.includes(currentQ) == false) {
      move();
    }
    var ind = randomQuestions.indexOf(currentQ);
    sliceArg1 = ind + 1;
    sliceArg2 = ind + 2;
    var nextTest = randomQuestions.slice(sliceArg1++, sliceArg2++);
    if(nextTest.length == 0){
      alreadyPicked();
      return;
    }
    alreadyPicked();
    $(currentQ).hide();
    $("#finish").hide();
    $("#waiting").show();
    await delay(1000);
    $("#waiting").hide();
    $(nextTest).show();
    $("#finish").show();
    reAssign();
}

async function navNext() {
  var ind = randomQuestions.indexOf(currentQ);
  sliceArg1 = ind + 1;
  sliceArg2 = ind + 2;
  var nextTest = randomQuestions.slice(sliceArg1++, sliceArg2++);
  if(nextTest.length == 0){
    return;
  }
  $(currentQ).hide();
  $("#finish").hide();
  $("#waiting").show();
  await delay(1000);
  $("#waiting").hide();
  $(nextTest).show();
  $("#finish").show();
  reAssign();
}
  
  // setting back button function
  var backSliceArg1;
  var backSliceArg2;
async function back() {
    var indBack = randomQuestions.indexOf(currentQ);
    backSliceArg1 = indBack - 1;
    backSliceArg2 = indBack;
    var newTest = randomQuestions.slice(backSliceArg1, backSliceArg2);
    if(newTest.length == 0){
      alert("This is the first question");
      return;
    }
    $(currentQ).hide();
    $("#finish").hide();
    $("#waiting").show();
    await delay(1000);
    $("#waiting").hide();
    $(newTest).show();
    $("#finish").show();
    reAssign();
}
  
  
  
  // converting currentQ back to non array and assigning it to the currentQ variable
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

    if($('#question6:visible').length != 0) {
      currentQ = qSix;
    }
}

// Uncheck all radio buttons 
function uncheck() {
  document.getElementById('q1A').checked = false;
  document.getElementById('q1B').checked = false;
  document.getElementById('q1C').checked = false;
  document.getElementById('q1D').checked = false;

  document.getElementById('optionA').checked = false;
  document.getElementById('optionB').checked = false;
  document.getElementById('optionC').checked = false;
  document.getElementById('optionD').checked = false;
  document.getElementById('optionE').checked = false;

  document.getElementById('q3A').checked = false;
  document.getElementById('q3B').checked = false;
  document.getElementById('q3C').checked = false;
  document.getElementById('q3D').checked = false;
  document.getElementById('q3E').checked = false;

  document.getElementById('q4A').checked = false;
  document.getElementById('q4B').checked = false;
  document.getElementById('q4C').checked = false;
  document.getElementById('q4D').checked = false;

  document.getElementById('q5A').checked = false;
  document.getElementById('q5B').checked = false;
  document.getElementById('q5C').checked = false;
  document.getElementById('q5D').checked = false;
  document.getElementById('q5E').checked = false;
  document.getElementById('q5F').checked = false;

  document.getElementById('q6A').checked = false;
  document.getElementById('q6B').checked = false;
  document.getElementById('q6C').checked = false;
  document.getElementById('q6D').checked = false;
  document.getElementById('q6E').checked = false;
}

// Check if answer is already picked
function alreadyPicked() {
  if(currentQ == qOne) {
    if(document.getElementById('q1A').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q1B').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q1C').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q1D').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
  }

  if(currentQ == qTwo) {
    if(document.getElementById('optionA').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('optionB').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('optionC').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('optionD').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('optionE').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
  }
  
  if(currentQ == qThree) {
    if(document.getElementById('q3A').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q3B').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q3C').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q3D').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q3E').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
  }

  if(currentQ == qFour) {
    if(document.getElementById('q4A').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q4B').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q4C').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q4D').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
  }

  if(currentQ == qFive) {
    if(document.getElementById('q5A').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q5B').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q5C').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q5D').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q5E').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q5F').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
  }

  if(currentQ == qSix) {
    if(document.getElementById('q6A').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q6B').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q6C').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q6D').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
    if(document.getElementById('q6E').checked == true) {
      if(clickedQ.includes(currentQ) == false) {
        clickedQ.push(currentQ);
      }
    }
  }
  
}

// create a variable for result
var ques1;
var ques2;
var ques3;
var ques4;
var ques5;
var ques6;

var finalReport;

// scoring the test
async function score() {
  // check score question 1
  var q1 = document.getElementById('q1A').checked;
  if(q1 == true) {
    ques1 = 32;
  } else {
    ques1 = 0;
  }

  // check score question 2
  var q2 = document.getElementById('optionB').checked;
  if(q2 == true) {
    ques2 = 32;
  }  else {
    ques2 = 0;
  }

  // check score question 3
  var q3 = document.getElementById('q3C').checked;
  if(q3 == true) {
    ques3 = 32;
  }  else {
    ques3 = 0;
  }

  // check score question 4
  var q4 = document.getElementById('q4B').checked;
  if(q4 == true) {
    ques4 = 32;
  }  else {
    ques4 = 0;
  }

  // check score question 5
  var q5 = document.getElementById('q5C').checked;
  if(q5 == true) {
    ques5 = 32;
  }  else {
    ques5 = 0;
  }

  // check score question 6
  var q6 = document.getElementById('q6D').checked;
  if(q6 == true) {
    ques6 = 32;
  }  else {
    ques6 = 0;
  }
  
  var finalScore = ques1 + ques2 + ques3 + ques4 + ques5 + ques6;
  finalReport = finalScore;

  document.getElementById("score").innerHTML = finalReport;

  $(currentQ).hide();
  $("#finish").hide();
  $("#backNext").hide();
  $("#time").hide();
  $("#myProgress").hide();
  $("#waiting2").show();
  await delay(5000);
  $("#waiting2").hide();
  $("#scorePage").show();
}




