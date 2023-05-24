let subir = document.getElementsByClassName("subir");
let bajar = document.getElementsByClassName("bajar");
let lista = document.getElementsByTagName("li");

for (let i = 0; i < lista.length; i++) {
    subir[i].addEventListener("click" , function() {
        if (i>0 ) {
            lista[i].className = "";
            lista[i-1].className = "visible";
        }
    });
    bajar[i].addEventListener("click",function(){
        if (i<subir.length-1 ){
            lista[i].className = "";
            lista[i+1].className = "visible";
        }
    });
}