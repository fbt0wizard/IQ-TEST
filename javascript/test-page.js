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
}

var fiveMinutes = 60 * 1,
display = document.querySelector('#time');

window.onload = function () {

    startTimer(fiveMinutes, display);
    console.log(fiveMinutes);
    setTimeout(stop, 62000);

};

function stop() {
    alert("time up");
}
