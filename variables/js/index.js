const estilo = document.getElementById("hojaestilo");
const hojanueva = "temaClaro.css";
const btn = document.getElementById("btn");
const p = document.getElementsByTagName("p");
function cambiarhoja(){
    let text = estilo.href;
    text = text.split("/");
    text[text.length-1] = hojanueva;
    text = text.join("/");
    estilo.href = text;
}


    console.log(p);    


btn.addEventListener("click",cambiarhoja);