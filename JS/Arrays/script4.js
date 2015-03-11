//------------------------------------------------------------------------------------------------------
//Exercise 1

var array = new Array(20);
for (var i = 0; i < array.length; i++) { 
       array[i] = i *5;
       console.log("array[" + i + "] =" + array[i]);
}


//------------------------------------------------------------------------------------------------------
//Exercise 2
//Observación: Incluí el script dentro de una funcion para poder probarlo con distintas instancias

function compareChains(chain1, chain2){
	var length1 = chain1.length;
	var length2 = chain2.length;
	var minLength;

	if (length1 < length2) {
		minLength = length1;
	} else minLength= length2;

	
	for (var i=0 ; i<minLength; i++){
		if (chain1[i] < chain2[i]){
			return chain1;
		}
		else {
			if (chain2[i] < chain1[i]){
				return chain2;
			}
		}
	}

	return chain1;

}

var chain1 = ["a", "n", "a", "l", "a", "u"];
var chain2 = ["h", "e", "l", "l", "o"];
console.log("Comparing the chains " + chain1 +" - " + chain2 + " the lower is: " + compareChains(chain1, chain2));

var chain1 = ["e", "l", "e", "m", "e", "n", "t"];
var chain2 = ["e", "l", "e", "p", "h", "a", "n", "t"];
console.log("Comparing the chains " + chain1 +" - " + chain2 + " the lower is: " + compareChains(chain1, chain2));

var chain1 = ["u", "i"];
var chain2 = ["z", "o", "o"];
console.log("Comparing the chains " + chain1 +" - " + chain2 + " the lower is: " + compareChains(chain1, chain2));

//------------------------------------------------------------------------------------------------------
//Exercise 3
//Incluí el script en una función para poder probar el algoritmo con distintas instancias
//

function maxSequence(array){
	var max = 0; // Numero maximo de elementos iguales en la secuencia
	var elemMaxSeq;
	var cantActual = 0; //cantidad de elementos de la secuencia actual
	var elem; //elemento actual del arreglo

	if (array.length == 0){
		console.log ('The sequence has no elements!')
	} else{
		elem = array[0];
		cantActual++;
		for (var i = 1; i <= array.length; i++) {
		    if (array[i] != elem) {
		        if (cantActual >= max) { //Si la secuencia encontrada es mayor a la maxima almacenada
		  	        max = cantActual;
		            elemMaxSeq = elem;
		        }

		        cantActual = 1;
		  	
		  	} else {
		    	    cantActual++;
		        }
		        
		    elem = array[i]; //Actualizo el valor del elemento actual para la proxima iteración
		}

		for (var cant=0; cant<max; cant++){
			console.log(elemMaxSeq);
		}
		}
	}



var chain = [2,1,1,2,3,3,2,2,2,1];
console.log("The maximun sequence of equals numbers in " + chain +" is: ");
maxSequence(chain);

var chain = [3,3,3,3,4,3,1,2,2,1];
console.log("The maximun sequence of equals numbers in " + chain +" is: ");
maxSequence(chain);


//------------------------------------------------------------------------------------------------------
//Exercise 4
//Incluí el script en una función para poder probar el algoritmo con distintas instancias
//


function maxSequenceIncreasing(sequence){
	var max = []; //Maximal sequence
	var actual = []; //Actual sequence.


	if (array.length == 0){
		console.log ('The sequence has no elements!')
	} else{
		actual.push(sequence[0]);
		max = actual;


		for (var i = 1; i <= sequence.length; i++) {
	        if (sequence[i] > actual[actual.length - 1]) {
	                actual.push(sequence[i]);
	        } else if (actual.length > max.length) {
	                max = actual.slice(0); 
	                actual = []; //Reseteo la secuencia creciente actual
	        } else {
	                actual = [sequence[i]];
	        }
	}
	console.log(max);
	}
}

var chain = [1,2,3,4,1,3,5,3,2,1];
console.log("The maximun sequence of equals numbers in " + chain +" is: " );
maxSequenceIncreasing(chain);

var chain = [1,2,3,4,3,1,2,2,1];
console.log("The maximun sequence of equals numbers in " + chain +" is: " );
maxSequenceIncreasing(chain);

var chain = [1,2,3,1,3,5,6,7,8];
console.log("The maximun sequence of equals numbers in " + chain +" is: " );
maxSequenceIncreasing(chain);


//------------------------------------------------------------------------------------------------------
//Exercise 5
//

function selectionSort(array){
	var sorted = [];
	var min = Infinity;

	while (array.length>0) {
        for (var i = 0; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
        }

        var indexMin= array.indexOf(min);
        array.splice(indexMin, 1); //Se elimina el elemento menor del arreglo
        sorted.push(min);
        min = Infinity; //Nuevamente se reestablece el valor de min, para encontrar el nuevo mínimo elemento
	}

	array = sorted;
	return array;
	
}

var array= [1,6,8,9,7,1,0,5,6];
console.log("Ordering the array : " + array + " --> " +selectionSort(array));

var array= [8,6,8,0,0,1,0,2,3];
console.log("Ordering the array : " + array + " --> " +selectionSort(array));


//------------------------------------------------------------------------------------------------------
//Exercise 6
//

function frequentNumber(array){
	var frequence = new Array();
	var max= -Infinity;
	var times;

	for (var i = 0; i < array.length; i++) {
		if (!frequence[array[i]]){
			frequence[array[i]] = 1;
		} else{
			frequence[array[i]]++; 
		}
        
    }

    for (var val in frequence){
    	if (frequence[val]>max){
    		max=val;
    		times=frequence[val];
    	}
    }

    console.log("Most Frecuent Number" + max.valueOf());
    console.log("Times:" + times);
	
}

var array= [1,6,8,9,7,1,0,5,6,2];
console.log("The most frequent number in the array: " + array + " --> " );
frequentNumber(array);

var array= [8,6,8,0,8,1,0,2,3,5];
console.log("The most frequent number in the array: "  + array + " --> " );
frequentNumber(array);
