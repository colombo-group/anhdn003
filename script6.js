/**
 * Created by Love Barca on 5/25/2016.
 */
var x = 0;
var y = 0;
var tong = 0;
var hieu = 0;
var tich = 0;
var thuong = 0;
var baccao = 0;

function add() {
    x = document.getElementById("sothu1").value;
    x = parseFloat(x);
    y = document.getElementById("sothu2").value;
    y = parseFloat(y);
    tong = x + y;
    document.getElementById("ketqua").innerHTML = tong;
}
function  sub() {
    x = document.getElementById("sothu1").value;
    x = parseFloat(x);
    y = document.getElementById("sothu2").value;
    y = parseFloat(y);
    hieu = x - y;
    document.getElementById("ketqua").innerHTML = hieu;

}
function nhan() {
    x = document.getElementById("sothu1").value;
    x = parseFloat(x);
    y = document.getElementById("sothu2").value;
    y = parseFloat(y);
    tich = x * y;
    document.getElementById("ketqua").innerHTML = tich;
}
function  chia() {
    x = document.getElementById("sothu1").value;
    x = parseFloat(x);
    y = document.getElementById("sothu2").value;
    y = parseFloat(y);
    thuong = x/y;
    document.getElementById("ketqua").innerHTML = thuong;
}
function  mu() {

}