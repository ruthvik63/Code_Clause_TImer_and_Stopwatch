
let startBtnt = document.getElementById('start-t');
let stopBtnt = document.getElementById('stop-t');
let resetBtnt = document.getElementById('reset-t');

let hourt = 3;
let minutet = 20;
let secondt =0;
let countt = 100;

startBtnt.addEventListener('click', function () {
    timer = true;
    stopWatcht();
});
stopBtnt.addEventListener('click', function () {
    timer = false;
});
resetBtnt.addEventListener('click', function () {
    timer = false;
    hourt = 0;
    minutet = 0;
    secondt = 0;
    countt = 0;
    document.getElementById('hrt').innerHTML = "00";
    document.getElementById('mint').innerHTML = "00";
    document.getElementById('sect').innerHTML = "00";
    document.getElementById('countt').innerHTML = "00";
});
function stopWatcht() {
    if (timer) {
        countt--;
 
        if (countt == 0) {
            secondt--;
            countt = 100;
        }
 
        if (secondt == 0) {
            minutet--;
            secondt = 60;
        }
 
        if (minutet == 0) {
            hourt--;
            minutet = 59;
            secondt = 60;
        }
 
        let hrtString = hourt;
        let mintString = minutet;
        let sectString = secondt;
        let counttString = countt;
 
        if (hourt < 10) {
            hrtString = "0" + hrtString;
        }
 
        if (minutet < 10) {
            mintString = "0" + mintString;
        }
 
        if (secondt < 10) {
            sectString = "0" + sectString;
        }
 
        if (countt < 10) {
            counttString = "0" + counttString;
        }
 
        document.getElementById('hrt').innerHTML = hrtString;
        document.getElementById('mint').innerHTML = mintString;
        document.getElementById('sect').innerHTML = sectString;
        document.getElementById('countt').innerHTML = counttString;
        setTimeout(stopWatcht, 10);
    }
}












let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
stopBtn.addEventListener('click', function () {
    timer = false;
});
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}
///////

