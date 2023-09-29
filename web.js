//Current Date
var date = new Date();
var current_date = ('0'+ (date.getMonth() + 1)).slice(-2) + "/" + ('0' + date.getDate()).slice(-2) + "/" + date.getFullYear();
document.getElementById("Date").innerHTML = current_date;

