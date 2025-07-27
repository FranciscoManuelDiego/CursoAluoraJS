let titulado = document.querySelector("h1");
titulado.innerHTML = "Hora del Desafío";

function ConsoleFunction() {
    console.log("Botón de consola presionado");
}

function PromptFunction(){
    let ciudadDeBrasil = prompt("¿Que ciudad de Brasil haz visitado?");
alert(`Estuve en ${ciudadDeBrasil} y me acorde de ti.`);
}

function AlertFunction() {
    alert("Yo amo JS")
}

function SumaFunction() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let resultado = numero1 + numero2;
    alert(`El resultado de la suma es: ${resultado}`);
}

