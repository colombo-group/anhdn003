/**
 * Created by Love Barca on 5/24/2016.
 */
var sohang = 0;


function display(){
    var i,j,k;
    var text = "";
    sohang = document.getElementById("input").value;
    sohang = parseFloat(sohang);
    if (sohang < 0) {
        document.write("Bạn đã nhập số hàng không thỏa mãn, xin mời nhập lại");
    }
   for (i = 1; i<=sohang; i++){
       for (j = i; j > 0; j -- ){
           k = j%10;
           text += k + ' ';
       }
       text += '</br>';
   }
    document.getElementById("demo").innerHTML = text;

}