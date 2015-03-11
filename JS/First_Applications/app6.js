
function scroll() {
    var div = document.getElementById("smallestDiv");
    var limit = -document.getElementById("biggerDiv").clientWidth/3;
    var margin;
    var goRight= true;

    setInterval(function(){

    	if (document.getElementById("biggerDiv").style.marginLeft == ""){
    		document.getElementById("biggerDiv").style.marginLeft = "1px" ;

    	} else {
            margin =parseInt(document.getElementById("biggerDiv").style.marginLeft);
            
            if (margin>limit && goRight){
                margin =parseInt(document.getElementById("biggerDiv").style.marginLeft) -2 ;
                document.getElementById("biggerDiv").style.marginLeft = margin + "px" ;
            } else{
                goRight=false;
                margin =parseInt(document.getElementById("biggerDiv").style.marginLeft) +2 ;
                document.getElementById("biggerDiv").style.marginLeft = margin + "px" ;

                if (margin == 1)
                    goRight = true; //En caso de que ya haya retornado hasta el origen, 
                                    //se pone en true el flag goRight para volver a empezar

            }
    		

    	}

    },200);
}

scroll();