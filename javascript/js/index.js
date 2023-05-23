let div = document.getElementById("contenido");

function cambiarColorFondo(){
    let body = document.querySelector("body");
    
    body.style.backgroundColor = "red";
    body.style.transition = "all 1s";
    div.classList.add("miclase");
    div.innerHTML = "<h1 onclick='volver()'>titulo</h1> <div style='width:100px;height:100px;background-color:blue'></div> <button type='submit' onclick='volver()'>volver</button>";
}

function volver(){
    let body = document.querySelector("body");
    div.classList.remove("miclase");
    body.style.backgroundColor = "white";
    div.innerHTML = "";
}

