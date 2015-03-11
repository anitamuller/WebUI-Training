//------------------------------------------------------------------------------------------------------
//Exercise 1

function reverse(string){
	return string.split('').reverse().join('');
}

var string = "web";
console.log("The string '" + string +"' reversed is > " + reverse(string));

string = "analaura";
console.log("The string '" + string +"' reversed is > " + reverse(string));


//------------------------------------------------------------------------------------------------------
//Exercise 2

function correctExpression(expression){
	var stack = []; //Arreglo que se va a usar en forma de pila para guardar los '()'


	for(var i =0;i<expression.length;i++){
	    if(expression[i] == '('){
	    	stack.push(expression[i]);
	    }
	    else if(expression[i] == ')'){
		    	if(stack.length==0 || !(stack[stack.length-1] == '(' && expression[i] == ')'))		    		
		           return false;
		        else
		           stack.pop();
		      }
	}
		   
	if(stack.length==0)
	    return true;
	else
        return false;
}

var expression = "((a+b)/5-d)";
console.log("The expression '" + expression +"' has balanced parentheses? " + correctExpression(expression));

expression = ")(a+b))";
console.log("The expression '" + expression +"' has balanced parentheses? " + correctExpression(expression));

//------------------------------------------------------------------------------------------------------
//Exercise 3

function timesContained(string, word){
	var searchStr = string.toLowerCase();
	var substrings = searchStr.split(word);
	return substrings.length - 1;
}

var string= "We all live in a yellow submarine Yellow submarine, yellow submarine We all live in a yellow submarine	Yellow submarine, yellow submarine.";
var word= "yellow";
console.log("The ocurrences of the word '" + word + "' is: "+ timesContained(string, word));

/* También podría haber sido resuelto usando expresiones regulares*/
function timesContained2(string, word) {

        string = string.split(" ");
        word = word.toLowerCase();
        var times = 0;

        for(var i = 0; i < string.length; i++) {
            if (string[i].length >= word.length) {
                    var aux =  string[i].toLowerCase();
                    var reg = new RegExp(word, "g"); //Se convierte la palabra en EXPREG
                    var cant = (aux.match(reg) || []).length;
                    times += cant;
                }
        }
        return times;
}

//------------------------------------------------------------------------------------------------------
//Exercise 4

function transformString(string){

	var newString = "";
	var i=0;

	while (i < string.length){
		
			

			if (string.indexOf("<upcase>", i) == i){
				i=i+8;
				
				while (string.charAt(i) != "<"){
					newString = newString + string.charAt(i).toUpperCase();
					i++;
					
				}
				if (string.indexOf("</upcase>", i) == i){
					i = i+9;
					
				}

			} else {
				if (string.indexOf("<lowcase>", i) == i){
					i = i+9;
					
					while (string.charAt(i) != "<"){
						newString = newString + string.charAt(i).toLowerCase();
						i++;
						

					}
					if (string.indexOf("</lowcase>", i) == i){
						i = i+10;
						
					}

				}
				else {
					if (string.indexOf("<mixcase>", i) == i){
						i = i+9;
						
						while (string.charAt(i) != "<"){
							var random = Math.round(Math.random());
							if (random) 
								newString = newString + string.charAt(i).toLowerCase();
							else
								newString = newString + string.charAt(i).toUpperCase(); 
							
							i++;
							
						}
						if (string.indexOf("</mixcase>", i) == i){
							i = i+10;
							
						}

					} else {
							if (string.indexOf("</upcase>", i) == i){
								i = i+9;
						
							} else{
									if (string.indexOf("</lowcase>", i) == i){
										i = i+10;
							
									} else {
										if (string.indexOf("</mixcase>", i) == i){
											i = i+10;
								
										}
										else {
											newString = newString + string.charAt(i);
											i++;
										}
									}
								}
							}
				}
			}
		

		
			

			
			
	}
	

	return newString;
}


var string = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";
console.log("Transforming the string '"+ string + "' to: " + transformString(string));

//Nested tags
var string = "We are <mixcase>living</mixcase> in a <upcase>yellow <mixcase>submarine</mixcase></upcase>.";
console.log("Transforming the string '"+ string + "' to: " + transformString(string));


//------------------------------------------------------------------------------------------------------
//Exercise 5

function replaceSpaces(string){
	
	return string.replace(new RegExp(" ", "g"), "&nbsp;");
	
}

var string = "Hi, I am testing the function that replace spaces .";
console.log("Replacing the spaces in the string '"+ string + "' -->: " + replaceSpaces(string));


