function isOdd(num) { 
	return !isEven(num);
}

function isEven(num){
	return (num % 2) == 0 ;
}

function divideBy5(num){
	return (num % 5) == 0 ;
}

function divideBy5and7(num){
	return (num % 5) == 0 && (num % 7) == 0 ;
}

function area(heigth, width){
	if (typeof(heigth)=="number" && isFinite(heigth) && (typeof(width)=="number" && isFinite(width))){
		return heigth * width;
	}
	else {
		return "Rectangle´s heigth and width must be numbers to calculate the area";
	}
}

function thirdDigit(num){
	if (typeof(num)=="number" && isFinite(num)){
		var stringNum = num + "";
		var digit = stringNum.charAt((stringNum.length)-3);

		if (digit == "7"){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return "The parameter is not a number!";
	}

	
}

function isPrime(n) {

   // If n is less than 2 so it cannot be prime.
   if (n < 2) {return false}
  
   // Assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
      	isPrime = false
      }
   }

  	return isPrime;

}

console.log("4 isOdd? " + isOdd(4));
console.log("10 isEven? " + isEven(10));
console.log("5 isOdd? " + isOdd(5));
console.log("7 isEven? " + isEven(7));

console.log("35 can be divided (without remainder) by 7 and 5? " + divideBy5and7(35));
console.log("10 can be divided (without remainder) by 7 and 5? " + divideBy5and7(10));
console.log("70 can be divided (without remainder) by 7 and 5? " + divideBy5and7(70));
console.log("7 can be divided (without remainder) by 7 and 5? " + divideBy5and7(7));

console.log("Rectangle 1: 5 x 4 = " + area(5,4));
console.log("Rectangle 1: 3 x 8 = " + area(3,8));
console.log("Rectangle 1: 2 x 6 = " + area(2,6));
console.log("Rectangle 1: 'alto' x 4 = " + area("alto",4));

console.log("7 is the third digit(right to left) in 1732? : " + thirdDigit(1732));
console.log("7 is the third digit(right to left) in 225711? : " + thirdDigit(225711));
console.log("7 is the third digit(right to left) in 777? : " + thirdDigit(777));
console.log("7 is the third digit(right to left) in 1543? : " + thirdDigit(1543));
console.log("7 is the third digit(right to left) in 1? : " + thirdDigit(1));