var messi = document.getElementById("messi"),
    messi_2 = document.getElementById("messi_2"),
    contador = 0;


    function cambio(){
    	if(contador == 0){
    	   card.classList.add("super");
    	   contador = 1	
    	}else{
    		card.classList.remove("super");
    		contador = 0;
    	}
    }



    messi.addEventListener("click",cambio)