//------------------------------------------------------------------------------------------------------
//Exercise 1

var1 = 100; 
var2 = 15;

//var1 = 1; 
//var2 = 15;

if (var1 > var2){
   aux = var2;
   var2 = var1;
   var1 = aux;
}


console.log("var1: 100 is greater than var2: 15? "  + var1 > var2 + "Now, var1: " + var1 + " and var2: " + var2);


//------------------------------------------------------------------------------------------------------
//Exercise 2
/* Write a script that shows the sign (+ or -) of the product
of three real numbers without calculating it. Use a
sequence of if statements.*/
num1= -1;
num2= -2;
num3= 4

function sign(num1, num2, num3){
	if (num1<0){
		if (num2<0){
			if (num3<0){
				return "-";
			}
			else{
				return "+";
			}
		} else{
			if (num3<0){
				return "+";
			}
			else{
				return "-";
			}
		}
	}
	else{
		if (num2<0){
			if (num3<0){
				return "+";
			}
			else{
				return "-";
			}
		} else{
			if (num3<0){
				return "-";
			}
			else{
				return "+";
			}
		}
	}
}

console.log("The product (" + num1 + ")*(" + num2 + ")*(" + num3  + ") is: " + sign(num1,num2,num3));

num1= -1;
num2= -2;
num3= -4

console.log("The product (" + num1 + ")*(" + num2 + ")*(" + num3  + ") is: " + sign(num1,num2,num3));

num1= 1;
num2= 2;
num3= -4

console.log("The product (" + num1 + ")*(" + num2 + ")*(" + num3  + ") is: " + sign(num1,num2,num3));



//------------------------------------------------------------------------------------------------------
//Exercise 3

function biggest(val1, val2, val3){
	if (val1 >= val2 && val1 >= val3){
		return val1;
	} else{
		if (val2 >= val1 && val2 >= val3){
			return val2;
		} else{
			return val3;
		}

	}
}

val1= 5; val2=10; val3=0;
console.log("The biggest number between " + val1 + ", " + val2 + " and " + val3  + " is: " + biggest(val1,val2,val3));

val1= 85; val2=10; val3=0;
console.log("The biggest number between " + val1 + ", " + val2 + " and " + val3  + " is: " + biggest(val1,val2,val3));

val1= 7; val2=10; val3=30;
console.log("The biggest number between " + val1 + ", " + val2 + " and " + val3  + " is: " + biggest(val1,val2,val3));


//------------------------------------------------------------------------------------------------------
//Exercise 4

function descendingOrder(n1, n2, n3){
	var order = [];
	var big = biggest(n1, n2, n3);
	
	order.push(big);

	if (n1 == big){
		if (n2>n3){
			order.push(n2);
			order.push(n3);
		}
		else{
			order.push(n3);
			order.push(n2);
		}
	} else {
		if (n2 == big){
			if (n1>n3){
				order.push(n1);
				order.push(n3);
			}
			else{
				order.push(n3);
				order.push(n1);
			}
		}
		else{
			if (n1>n2){
				order.push(n1);
				order.push(n2);
			} else{
				order.push(n2);
				order.push(n1);
			}
		}
	}
	return order;
}

n1= 5; n2=10; n3=0;
console.log("Sorting in descending order the numbers: " + n1 + ", " + n2 + " and " + n3  + " -->: " + descendingOrder(n1, n2, n3));

n1= 7; n2=3; n3=0;
console.log("Sorting in descending order the numbers: " + n1 + ", " + n2 + " and " + n3  + " -->: " + descendingOrder(n1, n2, n3));

n1= 1; n2=3; n3=2;
console.log("Sorting in descending order the numbers: " + n1 + ", " + n2 + " and " + n3  + " -->: " + descendingOrder(n1, n2, n3));

//------------------------------------------------------------------------------------------------------
//Exercise 5

function nameDigit(digit){
	var name;

	switch (digit) {
	    case 0:
	        name = "Zero";
	        break;
	    case 1:
	        name = "One";
	        break;
	    case 2:
	        name = "Two";
	        break;
	    case 3:
	        name = "Three";
	        break;
	    case 4:
	        name = "Four";
	        break;
	    case 5:
	        name = "Five";
	        break;
	    case 6:
	        name = "Six";
	        break;
	    case 7:
	        name = "Seven";
	        break;
	    case 8:
	        name = "Eight";
	        break;
	    case 9:
	        name = "Nine";
	        break;
	    default:
	    	name = "It's no a digit!!";		
	}

	return name;

}

digit = 1;
console.log("Name of the digit : " + digit + " -->: " + nameDigit(digit));
digit = 7;
console.log("Name of the digit : " + digit + " -->: " + nameDigit(digit));
digit = 5;
console.log("Name of the digit : " + digit + " -->: " + nameDigit(digit));
digit = 0;
console.log("Name of the digit : " + digit + " -->: " + nameDigit(digit));
digit = "a";
console.log("Name of the digit : " + digit + " -->: " + nameDigit(digit));

//------------------------------------------------------------------------------------------------------
//Exercise 6
function biggestOf5(val1, val2, val3, val4, val5){
	if (val1 >= val2 && val1 >= val3 && val1 >= val4 && val1 >= val5){
		return val1;
	} else{
		if (val2 >= val1 && val2 >= val3 && val2 >= val4 && val2 >= val5){
			return val2;
		} else{
			if (val3 >= val1 && val3 >= val2 && val3 >= val4 && val3 >= val5){
				return val3;
			}
			else {
				if (val4 >= val1 && val4 >= val2 && val4 >= val3 && val4 >= val5){
					return val4;
				}
				else return val5;
			}
		}

	}
}

val1= 5; val2=10; val3=0; val4=100; val5=101;
console.log("The biggest number between the next 5 > " + val1 + "," + val2 + "," + val3 + "," + val4 + "," + val5 + " is: " + biggestOf5(val1, val2, val3, val4, val5));

val1= 0; val2=1; val3=5; val4=4; val5=4;
console.log("The biggest number between the next 5 > " + val1 + "," + val2 + "," + val3 + "," + val4 + "," + val5 + " is: " + biggestOf5(val1, val2, val3, val4, val5));

val1= 1; val2=7; val3=8; val4=3; val5=2;
console.log("The biggest number between the next 5 > " + val1 + "," + val2 + "," + val3 + "," + val4 + "," + val5 + " is: " + biggestOf5(val1, val2, val3, val4, val5));


//------------------------------------------------------------------------------------------------------
//Exercise 7

function numberToText(number){

	if (number < 0 || number>999){
		completeName = "You must enter a number in the range [0..999]. Please, try again!"
	}

	else {
		var completeName = "";
		var hundred = number / 100 | 0;
		var ten = number % 100 / 10 | 0
		var unit = number % 10;

		switch (hundred) {
			case 0:
				name = "";
				break;
			case 1:
				if (ten==0 && unit==0){
					name = "One hundred";
				} else{
					name = "One hundred and ";
				}
				break;
			case 2:
				if (ten==0 && unit==0){
					name = "Two hundred";
				} else {
					name = "Two hundred and ";
				}
				break;
			case 3:
				if (ten==0 && unit==0){
					name = "Three hundred";
				} else {
					name = "Three hundred and ";
				}
				break;
			case 4:
				if (ten==0 && unit==0){
					name = "Four hundred";
				} else{
					name = "Four hundred and ";
				}
				break;
			case 5:
				if (ten==0 && unit==0){
					name = "Five hundred";
				} else{
					name = "Five hundred and ";
				}
				break;
			case 6:
				if (ten==0 && unit==0){
					name = "Six hundred";
				} else {
					name = "Six hundred and ";
				}
				break;
			case 7:
				if (ten==0 && unit==0){
					name = "Seven hundred";
				} else{
					name = "Seven hundred and ";
				}
				break;
			case 8:
				if (ten==0 && unit==0){
					name = "Eight hundred";
				} else{
					name = "Eight hundred and ";
				}
				break;
			case 9:
				if (ten==0 && unit==0){
					name = "Nine hundred";
				} else {
					name = "Nine hundred and ";
				}
				break;
		}

		completeName = completeName + name;

		switch (ten) {
			case 0:
				nameTen = "";
				break;
			case 1:
				switch (unit) {
					case 0:
						nameTen = "ten";
						break;
					case 1:
						nameTen = "eleven";
						break;
					case 2:
						nameTen = "twelve";
						break;
					case 3:
						nameTen = "thirteen";
						break;
					case 4:
						nameTen = "fourteen";
						break;
					case 5:
						nameTen = "fifteen";
						break;
					case 6:
						nameTen = "sixteen";
						break;
					case 7:
						nameTen = "seventeen";
						break;
					case 8:
						nameTen = "eighteen";
						break;
					case 9:
						nameTen = "nineteen";
						break;
				}
				break;
			case 2:
				nameTen = "twenty ";
				break;
			case 3:
				nameTen = "thirty ";
				break;
			case 4:
				nameTen = "fourty ";
				break;
			case 5:
				nameTen = "fifty ";
				break;
			case 6:
				nameTen = "sixty ";
				break;
			case 7:
				nameTen = "seventy ";
				break;
			case 8:
				nameTen = "eighty ";
				break;
			case 9:
				nameTen = "ninety ";
				break;
		}
		completeName = completeName + nameTen;
		
		if (number<10 || number>19){
			switch (unit) {
				case 0: {
							if (number == 0) { 
								nameUnit= "zero";
							} else {nameUnit= "";}
							break;
						}
				case 1:
					nameUnit = "one";
					break;
				case 2:
					nameUnit = "two";
					break;
				case 3:
					nameUnit = "three";
					break;
				case 4:
					nameUnit = "four";
					break;
				case 5:
					nameUnit = "five";
					break;
				case 6:
					nameUnit = "six";
					break;
				case 7:
					nameUnit = "seven";
					break;
				case 8:
					nameUnit = "eight";
					break;
				case 9:
					nameUnit = "nine";
					break;
			}

			completeName = completeName + nameUnit;
		}
		}
		

		return completeName;
	
}
number= 600;
console.log("Number to Text [" + number +"] --> " + numberToText(number));

number= 11;
console.log("Number to Text [" + number +"] --> " + numberToText(number));

number= 564;
console.log("Number to Text [" + number +"] --> " + numberToText(number));

number= 0;
console.log("Number to Text [" + number +"] --> " + numberToText(number));

number= 23;
console.log("Number to Text [" + number +"] --> " + numberToText(number));

number= 148;
console.log("Number to Text [" + number +"] --> " + numberToText(number));



