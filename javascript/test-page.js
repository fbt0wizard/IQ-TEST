const ranNums = [];

const answered = [];

const correct = [];

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
    randomNumber();
    var hot = document.getElementById("startPage");
    if (hot.style.display = "block") {
        $(hot).fadeOut();
        $("#question1").fadeIn(100);
        $("#backNext").fadeIn(100);
        $("#finish").fadeIn(100);
    };
    countDown();

    console.log(ranNums);
};

function randomNumber() {
        var nums = [1,2,3,4,5];
        i = nums.length,
        j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            ranNums.push(nums[j]);
            nums.splice(j,1);
        }
}