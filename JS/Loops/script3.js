//------------------------------------------------------------------------------------------------------
//Exercise 1

function printN(n){
        var text = "";
        for (i = 1; i <= n; i++) { 
       text += i ;
        }
        return text;
}

n=11;
console.log("Print the numbers 1 to " + n +": "+ printN(n));

//Sin definir una función podría lograrse lo mismo de la siguiente manera

n=6;
console.log("Print the numbers 1 to " + n +": ");

for (i = 1; i <= n; i++) { 
       console.log(i);
}

//------------------------------------------------------------------------------------------------------
//Exercise 2
//
//Duda: Números que no sean divisibles por 3 y 7 al mismo tiempo no? De forma que si se toma n=21, 21 como 
//es divisible por 3 y 7 no se imprime.

n=21;
console.log("Print the numbers 1 to " + n +" that are not divisible by 3 and 7 at the same time: ");

for (i = 1; i <= n; i++) { 
                if (!(i % 3 ==0 && i % 7 == 0)){
                        console.log(i);
                }
}


//------------------------------------------------------------------------------------------------------
//Exercise 3

var num;
var end=true;
var max = -Infinity;
var min= Infinity;


while (end){
        num = prompt("Ingrese un elemento para la secuencia (o 'e' para finalizar):", '');
        if (num == 'e') {
                end=false;
                
        } else{
                if (num>max){
                        max=num;
                } 
                if (num<min){
                        min=num;
                }
        }
}

console.log("El elemento mayor de la secuencia es: " + max + " y el menor es: " + min);

//------------------------------------------------------------------------------------------------------
//Exercise 4

var objects = [document, window, navigator];
var minProperty;
var maxProperty;

for (var i = 0;  i < objects.length; i++) {

        for (var w in objects[i]) {
                if ((w < minProperty) || (minProperty === undefined)) {
                        minProperty =  w;
                }
                if ((w > maxProperty) || (maxProperty === undefined)) {
                        maxProperty = w;
                }
        }
        console.log("The lexicographically smallest property in "+ objects[i] + " is: " + minProperty);
        console.log("The lexicographically largest property in " + objects[i] + " is: " + maxProperty);
        minProperty = maxProperty = undefined;
}

