console.log("4 isOdd? " + !((4 % 2) == 0));
console.log("10 isEven? " + ((10 % 2) == 0));
console.log("5 isOdd? " + !((5 % 2) == 0));
console.log("7 isEven? " + ((7 % 2) == 0));

console.log("35 can be divided (without remainder) by 7 and 5? " + (35 % 5) == 0 && (35 % 7) == 0);
console.log("10 can be divided (without remainder) by 7 and 5? " + (5 % 5) == 0 && (5 % 7) == 0);
console.log("70 can be divided (without remainder) by 7 and 5? " + (70 % 5) == 0 && (70 % 7) == 0);
console.log("7 can be divided (without remainder) by 7 and 5? " + (7 % 5) == 0 && (7 % 7) == 0);

console.log("Rectangle 1: 5 x 4 = " + 5 * 4);
console.log("Rectangle 1: 3 x 8 = " + 3 * 8);
console.log("Rectangle 1: 2 x 6 = " + 2 * 6);
console.log("Rectangle 1: 'alto' x 4 = " + 'alto' * 4);

console.log("7 is the third digit(right to left) in 1732? : ");
console.log((1732 % 1000).toString()[0] == '7');
console.log("7 is the third digit(right to left) in 225711? : ");
console.log((225711 % 1000).toString()[0] == "7");
console.log("7 is the third digit(right to left) in 777? : ");
console.log((777 % 1000).toString()[0] == "7");
console.log("7 is the third digit(right to left) in 1543? : ");
console.log((1543 % 1000).toString()[0] == "7");
console.log("7 is the third digit(right to left) in 1? : " );
console.log((1 % 1000).toString()[0] == "7");


function isPrime(n) {

   // If n is less than 2 so it cannot be prime.
   if (n < 2) {return false}
  
   // Assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. 
   // If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
      	isPrime = false
      }
   }

  	return isPrime;

}

console.log("7 is prime? : " + isPrime(7)); 
console.log("15 is prime? : " + isPrime(15)); 
console.log("36 is prime? " + isPrime(36)); 
console.log("3 is prime? : " + isPrime(3)); 
