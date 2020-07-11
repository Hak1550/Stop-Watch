var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var stopBtn = document.getElementById('stop');
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
};

function start(){
    interval = setInterval(timer, 10);
    startBtn.setAttribute("disabled","disabled")
    stopBtn.removeAttribute("disabled")
    pauseBtn.removeAttribute("disabled")

}

function pause(){
    clearInterval(interval)
    
    pauseBtn.setAttribute("disabled","disabled")

    startBtn.removeAttribute("disabled")
    stopBtn.removeAttribute("disabled")

}

function stop(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    clearInterval(interval)
    // or we can do .... 
    // stop()

    startBtn.removeAttribute("disabled")
    pauseBtn.removeAttribute("disabled")


    stopBtn.setAttribute("disabled","disabled")

}
