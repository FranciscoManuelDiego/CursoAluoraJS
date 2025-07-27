/*Crear una función que muestre "¡Hola, mundo!" en la conso */
function HolaMundo() {
    console.log("¡Hola, mundo!");
}

/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. */
function HolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}


/* Crear una función que reciba un número como parámetro y devuelva el doble de ese número. */
function DobleNumero(numero){
    return numero * 2;
}

/* Crear una función que reciba tres números como parámetros y devuelva su promedio.*/
function PromedioTresNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}


/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos. */
function MayorDosNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
}


/*Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. */
function MultiplicarNumeros(num){
    return num * num;
}

HolaMundo();
HolaNombre("Francisco");
console.log(DobleNumero(5));
console.log(PromedioTresNumeros(10, 20, 30));
console.log(MayorDosNumeros(25, 20));
console.log(MultiplicarNumeros(4));