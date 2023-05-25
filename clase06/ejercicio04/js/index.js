function invertirPalabras(frase){
    let palabras = frase.split(" ");
    let retorno = [];
    palabras.forEach(palabra => {
        retorno.push(palabra.split("").reverse().join(""));
    });
    console.log(retorno.join(" "));
}

invertirPalabras("hola como estas");