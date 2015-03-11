//------------------------------------------------------------------------------------------------------
//Exercise 3

var user = prompt("Enter your name please:", "");

window.onbeforeunload = function() {
    return "Goodbye " + user;
   
}