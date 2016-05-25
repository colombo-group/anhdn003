/**
 * Created by Love Barca on 5/24/2016.
 */
var minute = 0;
var second = 0;
var tictac = 0;
var interval;
function display() {
    str_min = minute;
    str_sec = second;
    str_tictac = tictac;
    if (minute < 10){
        str_min = "0" + minute;
    }
    if (second < 10) {
        str_sec = "0" + second;
    }
    document.getElementById("display").innerHTML = str_min + ":" + str_sec + "." + str_tictac;

}
function count() {
    tictac += 1;
    if (tictac > 9){
        second += 1;
    }
    if (second > 59){
        minute += 1;
    }
    tictac = tictac % 10;
    second = second % 60 ;
    display();
}
function start() {
    interval = setInterval(count, 100);
}
function stop() {
    clearInterval(interval);
}
function restart(){
    stop();
    tictac = 0;
    second = 0;
    minute = 0;
    display();
}

