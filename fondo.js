var messi = document.getElementById("messi"),
    caja = document.getElementById("caja"),
    valor = 0;


    function cambio()
    { if(valor == 0){
      	  caja.classList.add("fondo");
      	   valor = 1
           }else{
                caja.classList.remove("fondo");
                valor = 0;
           }

    }






    messi.addEventListener("click",cambio)