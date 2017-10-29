var cMonth = new Date().getMonth()+1;
var cDay = new Date().getDay();
var cYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML=
"Copyright: " + cMonth + "-" + cDay + "-" + cYear;
