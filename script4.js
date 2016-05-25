/**
 * Created by Love Barca on 5/24/2016.
 */
var myArray = new Array();
myArray[0] = "Anh ";
myArray[1] = "Phap";
myArray[2] = "Duc ";
myArray[3] = "Nga";
myArray[4] = "Nhat";
str = '<ul>';
for (i in myArray) {
    str += '<li>' + myArray[i] + " : " + '<input type ="text" id=" i " value="">' + '</li>';
}
str += '</ul>';
document.getElementById("input").innerHTML = str;

function display() {
    var inputs = new Array();
    for (i in myArray){
        console.log(i);
        console.log(document.getElementById("i").value);
    }



}