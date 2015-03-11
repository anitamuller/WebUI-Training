//------------------------------------------------------------------------------------------------------
//Exercise 2

function firstAndlastName(){
	var first = document.getElementById("firstName").value;
	var last = document.getElementById("lastName").value;

	var currentDate = new Date();
	var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

	var completeText = first + " " + last + ". The current time is: " + currentTime;
	var div = document.getElementById("showText");
	div.innerHTML = div.innerHTML + completeText;
	
}

