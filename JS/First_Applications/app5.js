    function crearTooltips(e){
          var elem = e.toElement;
          if(elem.getAttribute('tooltip-on')  === 'false') {

            elem.setAttribute('tooltip-on', 'true');
            var rect = elem.getBoundingClientRect();          
            var tipId = Math.random().toString(4);
            elem.setAttribute('tooltip-id', tipId);
            var div = document.createElement("div");
            div.setAttribute('id', tipId);
            div.innerHTML = elem.getAttribute('tooltip');
            div.style.top = rect.bottom+ 10 + 'px';
            div.style.left = (rect.left-200) + 'px';
            div.setAttribute('class','tooltip-box');
            document.body.appendChild(div);
    
          } else {
    
            elem.setAttribute('tooltip-on', 'false');
            var tip = document.getElementById(elem.getAttribute('tooltip-id'));
            tip.parentNode.removeChild(tip);
            
            
          }
    }
    function habilitarTooltips(){
        var products = document.getElementsByClassName('item');
        for(var i = 0; i < products.length; i++) { 
            products[i].addEventListener("mouseover", crearTooltips, false);
    
        }
    }
    window.onload = function(){
        habilitarTooltips();
    }


