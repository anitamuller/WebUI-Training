function extractPalindromes(text){
	var lowertext = text.toLowerCase();
	var words= lowertext.split(" ");
	var result = "";
	for (var i = 0; i<words.length ; i++){
		var reverseWord = words[i].split("").reverse().join("");
		if (words[i] != reverseWord){
			result = result+ " "+ words[i];
		}
	}
	return result;
}

var text = "Hi, mi name is Ana and I live in Neuquen with 5 friends. Lol."
console.log("The original text: " +text);
console.log("The text without palindromes :" + extractPalindromes(text));
