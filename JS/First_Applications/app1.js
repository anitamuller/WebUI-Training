//------------------------------------------------------------------------------------------------------
//Exercise 1
function manipulateRows(){
	var table = document.getElementById('tabla'); 
    var rows = table.getElementsByTagName('tr');   

    rows[0].style.backgroundColor = "rgb(73, 112, 169)"; 

    for(i = 1; i < rows.length; i++){ 
      if(i % 2 == 0){ 
        rows[i].style.background = "rgb(247, 247, 247)"; 
      }else{ 
        rows[i].style.background= "rgb(227, 240, 248)";
      }
      }    
}

function manipulateRows2(id) {

        var trs = document.getElementById(id).getElementsByTagName("tr");
        var colors = ["rgb(247, 247, 247)", "rgb(227, 240, 248)"]
        for (var i = 1; i < trs.length; i++) {
                trs[i].style["background"] = colors[i%2]; //en lugar de %2 podria ser de array.length para una lista de colores de una cantidad arbitraria
        }

}

manipulateRows();
//manipulateRows2("tabla");


