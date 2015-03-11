//------------------------------------------------------------------------------------------------------
//Exercise 1

function lastDigit(number){

	var digit = number % 10;

	switch (digit) {
	    case 0:
	        name = "zero";
	        break;
	    case 1:
	        name = "one";
	        break;
	    case 2:
	        name = "two";
	        break;
	    case 3:
	        name = "three";
	        break;
	    case 4:
	        name = "four";
	        break;
	    case 5:
	        name = "five";
	        break;
	    case 6:
	        name = "six";
	        break;
	    case 7:
	        name = "seven";
	        break;
	    case 8:
	        name = "eight";
	        break;
	    case 9:
	        name = "nine";
	        break;
	   
	}

	return name;
}

number=1254;
console.log("The last digit of the number " + number + " is "+ lastDigit(number));

number=13;
console.log("The last digit of the number " + number + " is "+ lastDigit(number));

number=1;
console.log("The last digit of the number " + number + " is "+ lastDigit(number));


//------------------------------------------------------------------------------------------------------
//Exercise 2

function reverseNumber(number){
	
	var reversed = number.toString().split('').reverse().join('');
	return reversed;
}

number=1254;
console.log("The reverse of the number " + number + " is "+ reverseNumber(number));

number=13;
console.log("The reverse of the number " + number + " is "+ reverseNumber(number));

number=1;
console.log("The reverse of the number " + number + " is "+ reverseNumber(number));

//------------------------------------------------------------------------------------------------------
//Exercise 3

function ocurrencesSensitive(sentence, word, sensitive){
	if (sensitive){
		var substrings = sentence.split(word);
   		return substrings.length - 1;
	} else {
		var searchStr = sentence.toLowerCase();
		var substrings = searchStr.split(word);
   		return substrings.length - 1;
	}

	
}


var sentence= "Hello world, i am saying hello!";
var word= "hello";
console.log("The ocurrences (CASE SENSITIVE) of the word '" + word + "' in the sentence '"+ sentence +"'is: "+ ocurrencesSensitive(sentence, word, true));
console.log("The ocurrences (CASE INSENSITIVE) of the word '" + word + "' in the sentence '"+ sentence +"'is: "+ ocurrencesSensitive(sentence, word));

//------------------------------------------------------------------------------------------------------
//Exercise 4

function totalDivs(){
	var count = document.getElementsByTagName('div').length;
	return count;
	
}

console.log("The total of divs of the document are : " + totalDivs());


//------------------------------------------------------------------------------------------------------
//Exercise 5

function timesAppear(number, array){
	var result= 0;
	for (var i=0; i<array.length; i++){
		if (array[i] == number){
			result++;
		}
	}

	return result;
}

number = 2;
array = [2,1,1,2,3,3,2,2,2,1];
console.log("The number '" + number + "' appears '"+ timesAppear(number, array) +"' times in the array "+ array);

number = 3;
array = [2,1,1,2,3,3,2,2,2,1];
console.log("The number '" + number + "' appears '"+ timesAppear(number, array) +"' times in the array "+ array);

number = 0;
array = [2,1,1,2,3,3,2,2,2,1];
console.log("The number '" + number + "' appears '"+ timesAppear(number, array) +"' times in the array "+ array);


function checksTimesAppear(){
	console.log("Testing the function timesAppear(number, array)...");
	number = 3;
	array = [2,1,1,2,3,3,2,2,2,1];
	if (timesAppear(number, array)==2){
		console.log("The result value is equals to the expected value, timesAppear works propertly!")
	}
	console.log("Testing another example...");
	number = 8;
	array = [2,1,8,2,3,3,2,2,8,8];
	if (timesAppear(number, array)==3){
		console.log("The result value is equals to the expected value, timesAppear works propertly!")
	}


}

checksTimesAppear();

//------------------------------------------------------------------------------------------------------
//Exercise 5

function timesAppear(number, array){
	var result= 0;
	for (var i=0; i<array.length; i++){
		if (array[i] == number){
			result++;
		}
	}

	return result;
}

number = 2;
array = [2,1,1,2,3,3,2,2,2,1];
console.log("The number '" + number + "' appears '"+ timesAppear(number, array) +"' times in the array "+ array);

number = 3;
array = [2,1,1,2,3,3,2,2,2,1];
console.log("The number '" + number + "' appears '"+ timesAppear(number, array) +"' times in the array "+ array);

number = 0;
array = [2,1,1,2,3,3,2,2,2,1];
console.log("The number '" + number + "' appears '"+ timesAppear(number, array) +"' times in the array "+ array);


//------------------------------------------------------------------------------------------------------
//Exercise 6

function biggerNeighbours(position, array){
	var isBigger= false;
	if (position <0 || position > array.length-1 ){
		console.log ('The position entered is not in the range [0.. length-1]. Please enter a valid position!')
	}
	if (position == 0 ){
		if (array[position] > array[position+1]){
			isBigger=true;
		}
	} else {
		if (position == array.length){
			if (array[position] > array[position+1]){
				isBigger=true;
			}
		}
		else{
			if (array[position] > array[position-1] && array[position] > array[position+1]){
				isBigger=true;
			}
		}
	}
	
	return isBigger;
}

array = [2,0,1,0,3,3,2,2,2,1];
var position = 2; number = array[position];
console.log("The number '" + number + "' at the position '"+ position +"' is bigger than its neighbours? "+ biggerNeighbours(position, array));

array = [2,1,1,2,3,0,2,2,2,1];
position = 5; number = array[position];
console.log("The number '" + number + "' at the position '"+ position + "' is bigger than its neighbours? "+ biggerNeighbours(position, array));


//------------------------------------------------------------------------------------------------------
//Exercise 7

function firstBigNeighbour(array){
	var neig = -1;

	for (var i=0; i<array.length; i++){
		if (biggerNeighbours(i, array)){
			neig = i;
		}
	}

	return neig;

}

array = [0,0,1,0,3,3,2,2,2,1];
console.log("The first bigger neighbour in the array " + array + "is at position: " + firstBigNeighbour(array));

array = [1,1,1,2,3,0,2,2,2,1];
console.log("The first bigger neighbour in the array " + array + "is at position: " + firstBigNeighbour(array));
