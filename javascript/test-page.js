// setting delay function
async function delay(delayInms) {
    return new Promise (resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    })
}

// Programme timer
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

// set timer to one minute
var fiveMinutes = 60 * 1,
display = document.querySelector('#time');

function countDown() {
    startTimer(fiveMinutes, display);
    setTimeout(stop, 62000);
};

function stop() {
    alert("time up");
    return;
}
  
  // Assigning var to question
  var qOne = document.getElementById("question1");
  var qTwo = document.getElementById("question2");
  var qThree = document.getElementById("question3");
  var qFour = document.getElementById("question4");
  var qFive = document.getElementById("question5");
  
  // setting Container of questions
  const questions = [qOne, qTwo, qThree, qFour, qFive];
  
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
      console.log(randomQuestions);
      return;
    }
}
  
  // variale of current displaying function
  var currentQ;
  
  //setting start button function
async function start() {
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
    var ind = randomQuestions.indexOf(currentQ);
    sliceArg1 = ind + 1;
    sliceArg2 = ind + 2;
    var nextTest = randomQuestions.slice(sliceArg1++, sliceArg2++);
    if(nextTest.length == 0){
      alert("Test complete please submit or click back to review");
      return;
    }
    console.log(currentQ);
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
}

