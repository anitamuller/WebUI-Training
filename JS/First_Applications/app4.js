var colors = ["tomato", "pink", "aquamarine", "coral", "dodgerblue", "greenyellow", "royalblue"];
var heights = ["100px", "50px", "120px", "95px", "40px" ];
var widths = ["100px", "150px", "280px", "350px", "70px", "130px", "300px" ];
var locations = ["50px", "100px", "200px", "300px", "400px" ];
var texts = ["Hello", "JS", "Exercises", "Testing", "Web", "UI"]; 


for (var i=0; i<20 ; i++){
	var div = document.createElement("div");
	div.id = 'divRandom';
	div.style.position = "relative";

	div.style.width = widths[i%widths.length];
	div.style.height = heights[i%heights.length];
	div.style.background = colors[i%colors.length];
	div.style.left = locations[i%locations.length];
	div.style.right = locations[i%locations.length];
	div.style.top = locations[i%locations.length];
	
	div.innerHTML = texts[i%texts.length];

	var element = document.getElementById("content");
	element.appendChild(div);
	
}

