function stringFormat(str) {
    for (var i = 0; i < arguments.length; i++) {
                var regex = "\\{"+(i)+"\\}";
                str = str.replace(new RegExp(regex, "g"), arguments[i+1]);
    }

    return str;
}


var format = "{0}, {1}, {0} text {2}";
var str = stringFormat(format,1,"Pesho","Gosho");
console.log("The function stringFormat returns: " + str);