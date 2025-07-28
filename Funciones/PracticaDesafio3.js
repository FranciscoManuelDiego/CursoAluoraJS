/* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros. */

function CalcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Redondea a dos decimales
}
console.log(CalcularIMC(70, 1.75)); // Ejemplo de uso

/* Crea una función que calcule el valor del factorial de un número pasado como parámetro. */

function CalcularFactorial(num){
    if (num < 0) return "El factorial no puede utilizarse con números negativos";
    let factorial = 1;
    for( let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(CalcularFactorial(10)); // Ejemplo de uso

/* Crea una función que convierta un valor en dólares,*/
function ConvertirDolaresADivisa(dolares, tipoDeCambio) {
    if (tipoDeCambio <= 0) return "El tipo de cambio debe ser mayor que cero";
    let resultado = dolares * tipoDeCambio;
    return resultado.toFixed(2); // Redondea a dos decimales
}
console.log(ConvertirDolaresADivisa(100, 1350)); // Ejemplo de uso

/* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura 
y la anchura que se proporcionarán como parámetros.*/
function CalcularPerimetro(altura, ancho){
    let perimetro = 2 * (altura + ancho);
    return perimetro.toFixed(2); // Redondea a dos decimales
}
console.log(CalcularPerimetro(10, 2));

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
 utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14. */
 function CalcularAreaCirculo(radio){
    let area =  Math.PI * Math.pow(radio, 2); // Math.pow es un metodo que eleva al cuadrado
    return area.toFixed(2); // Redondea a dos decimales
 }

console.log(CalcularAreaCirculo(5)); // Ejemplo de uso

/* Crea una función que muestre en pantalla
 la tabla de multiplicar de un número dado como parámetro. */

 function TablaMultiplicar(num){
    let resultado = "";
    for(let i = 1 ; i <= 10; i++){
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    return resultado;
 }

console.log(TablaMultiplicar(5)); // Ejemplo de uso