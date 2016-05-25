/**
 * Created by Love Barca on 5/25/2016.
 */
var month_name = new Array("January", "February","March","April","May","June","July","August","September","October","November","December");
var day_name = new Array("Su", "M", "Tu","W","Th","F","Sa");
var month_day = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var today = new Date();
var text = "";
var thisDay = today.getDay();
console.log(thisDay);
var thisMonth = today.getMonth();
console.log(thisMonth);
var thisYear = today.getFullYear();
console.log(thisYear);
var thisDate = today.getDate();
console.log(thisDate);
if (thisYear%4 == 0) month_day[1]++;
text += '<table border="2px">';
text += '<tr><th style="text-align: center;" colspan="7">'+month_name[thisMonth]+ " "+ thisYear+ '</th></tr>';
text += '<tr><td>'+"Sunday"+'</td>' +'<td>'+"Monday"+'</td>'+'<td>'+"Tuesday"+'</td>'+'<td>'+"Wednesday"+'</td>'+'<td>'+"Thursday"+'</td>'+'<td>'+"Friday"+'</td>'+'<td>'+"Saturday"+'</td>';
    '</tr>';
var sohang = month_day[thisMonth];
    sohang = parseInt(sohang/7)+1;
console.log(sohang);
for ( i = 0; i<sohang ; i++) {
    text += '<tr>';
    for (j = 1; j < 8; j++) {
        if (7 * i + j <= month_day[thisMonth]) {
            if (7 * i + j == thisDate) {
                text += '<td style = "color:red;">' + (7 * i + j) + '</td>';
            }
            else {
                text += '<td>' + (7 * i + j) + '</td>';
            }

        }

    }
    text += '</tr>';
}
text +=   '</table>';
document.getElementById("display").innerHTML = text;
