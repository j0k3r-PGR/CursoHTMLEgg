personas = [
    {
nombre: "mauricio",
apellido: "joker",
edad: 32
    },{
nombre: "manuel",
apellido: "belgrano",
edad: 45
    },{
nombre: "josephina",
apellido: "andrade",
edad: 14
    }
];

function crearFrase(personas){
    let frases = [];
    personas.forEach(({nombre,apellido,edad}) => {
        frases.push("Hola mi nombre es: "+ nombre +", mi apellido es: "+apellido+". Y tengo: "+edad+" años");
    });
    return frases;
}

let frasesArmadas = crearFrase(personas);

frasesArmadas.forEach(frase => {
    console.log(frase);
})
