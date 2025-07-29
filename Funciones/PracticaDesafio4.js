/* Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];

/* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. */
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion. */
function mostrarLenguajes(){
    console.log(lenguajesDeProgramacion);
}

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. */
function mostrarLenguajesInverso(){
    console.log(lenguajesDeProgramacion.reverse());
}

/* Crea una función que calcule el promedio de los elementos en una lista de números. */
function calcularPromedio(listaNumeros) {
    if(listaNumeros.length === 0 )return 0;
    let total = [];
    for(let i = 0 ; i < listaNumeros.length ; i++){
        total.push(listaNumeros[i]);
        console.log(`Número ${i + 1}: ${listaNumeros[i]}`);
    }
    return total.reduce((acumulador, numeroActual) => acumulador + numeroActual) / listaNumeros.length;
}

console.log(calcularPromedio([10, 20, 30, 40, 50])); // Ejemplo de uso

/* Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/
function mostrarMinMax(listaNumeros) {
    if(!Array.isArray(listaNumeros) || listaNumeros.length === 0) {
        return console.log("La lista no contiene números válidos.");
    }

    let max = Math.max(...listaNumeros);
    let min = Math.min(...listaNumeros);
    console.log(`Número más grande: ${max} y el número más pequeño: ${min}`);
}

mostrarMinMax([10, 20, 30, 40, 50]); // Ejemplo de uso

/* Crea una función que devuelva la suma de todos los elementos en una lista. */
function sumarElementos(listaNumeros){
    let suma = listaNumeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
    return suma;
}
console.log(sumarElementos([10, 20, 30, 40, 50])); // Ejemplo de uso

/* Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista. */
function mostrarElemento(listaNumerica){
    if(!Array.isArray(listaNumerica) || listaNumerica.length === 0) {
        return console.log("La lista no contiene números válidos.");
    }
    
    let elemento = prompt("Ingrese el número que desea buscar:");
    let posicion = listaNumerica.indexOf(parseInt(elemento));
    if (posicion !== -1) {
        console.log(`El número ${elemento} se encuentra en la posición: ${posicion}`);
    } else {
        console.log(`El número ${elemento} no se encuentra en la lista.`);
    }
    return posicion
}

mostrarElemento([10, 20, 30, 40, 50]); // Ejemplo de uso


