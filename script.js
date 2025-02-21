let contenido = document.querySelector('#contenido');
let numeroAD = document.querySelector(".numero");
let nIntento = document.querySelector("#numeroIntento");
let numero;
let numeroIntento = 3;

document.querySelector('#enviarStar').addEventListener('click', function (event) {
    event.preventDefault();
    numero = Math.floor((Math.random() * 100) + 1);
    numeroIntento = 3;
    nIntento.innerHTML = numeroIntento;
    contenido.innerHTML = "¡Adivina el número!";
    numeroAD.value = ""; 
});

document.querySelector(".enviarNumero").addEventListener('click', function () {
    if (numeroIntento > 0) {
        let valorIngresado = Number(numeroAD.value);

        if (valorIngresado === numero) {
            contenido.innerHTML = '🎉 ¡Correcto! Has adivinado el número.';
            numeroIntento = 0; 
        } else {
            numeroIntento--; 
            nIntento.innerHTML = numeroIntento;
            
            if (numeroIntento === 0) {
                contenido.innerHTML = `❌ Intentos agotados. El número era ${numero}`;
            } else {
                contenido.innerHTML = valorIngresado > numero ? '📉 Es menor' : '📈 Es mayor';
            }
        }
    }
});
