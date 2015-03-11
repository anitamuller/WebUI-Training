//Funcion responsable de crear el string peopleList que luego será asignado como innerHTML del div con 
//id "list-item"

function generateList (people, template) {
        
        var result = "<ul>";
        for (var person in people) {
                var temp = "<li>" + template + "</li>";
                for (var property in people[person]) {
                        var exp = new RegExp("-{" + property + "}-", "g");
                        temp = temp.replace(exp, people[person][property]);
                }
                result += temp;
        }
        return result + "</ul>";
}

var people = [{name: "Peter", age: 14}, {name: "Ana", age: 22 }];
var tmpl = document.getElementById("list-item").innerHTML;
var peopleList = generateList(people,tmpl);
document.getElementById("list-item").innerHTML = peopleList;


//Funcion que en lugar de generar el string para luego asignarlo al inngerHTML del div con id "list-item"
//se encarga de ir creando los elementos HTML en DOM. En primer lugar se crea el elemento ul, luego sus 
//hijos li y luego ese elemento ul pasa a ser hijo del div en cuestión.

function generateListDOM(people,tmpl){
	var result;
	var templatePerson = tmpl;
	if (people.length>0){
		var ul=document.createElement('ul');
	}
	for (var i=0; i<people.length; i++){
		var li=document.createElement('li');
		var name = people[i].name;
		result = templatePerson.replace(new RegExp("-{name}-"), name);
		var age = people[i].age;
		result = result.replace(new RegExp("-{age}-"), age);
		li.innerHTML= result;
		templatePerson = tmpl;
		ul.appendChild(li);
	}

	document.getElementById("list-item").innerHTML = ul.innerHTML ;

}
