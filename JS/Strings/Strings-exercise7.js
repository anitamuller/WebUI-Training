function convertUrlInObject (url){
	var aux = url.split("://");
	var protocol = aux[0];
	
	var aux2 = aux[1].split("/");
	var server = aux2[0];
	
	var resource = "/"+aux2[1]+"/";
	
	for (var i =2; i<aux2.length ; i++){
		if (i != aux2.length-1)
			resource = resource + aux2[i] + "/";
		else 
			resource = resource + aux2[i];
	}

	var result  = {protocol: protocol, server: server, resource: resource};
	
	console.log("Protocol:" + result.protocol);
	console.log("Server:" + result.server);
	console.log("Resource:" + result.resource);

	//Intenté imprimir directamente retornando el objeto pero tanto Chrome como Mozzila 
	//me devuelven  [object Object] y no el contenido del objeto result.
	//Me fijé si estaba actualizada tanto mi versión de Chrome y Mozilla y sí.
	//Es por esto que imprimí a mano cada propiedad de dicho objeto.


var url = "http://www.devbg.org/forum/index.php";
console.log("Converting the url " + url + " in the object --> " ) ; convertUrlInObject(url);


//Expected result: {protocol: "http", server: "www.devbg.org", resource: "/forum/index.php"}