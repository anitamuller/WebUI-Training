//Observación: Cómo se podría mejorar la expresión regular para que si el tag <a> tiene otros atributos u espacios
//entre otros casos posibles

function changeTag(url){
	
		var reg = /<a href="([^"]+)">([\s\S]*?)<\/a>/g;
        var result= url.replace(reg, '[URL=$1]$2[/URL]');
        return result;
}

var url = '<p>Please visit <a href="http://academy.telerik.com"> our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> todiscuss the courses.</p>';
console.log("Converting the url " + url + " in the object --> " + changeTag(url));


