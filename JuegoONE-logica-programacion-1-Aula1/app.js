/*let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}*/


//alert("hola mundo");
/*let numeroSecreto =8;
let numeroUsuario = prompt("Me indicas el numero que crees que es entre el 1 y el 10: ");

console.log(numeroUsuario);
*/
/*
este codigo realiza la comparacion

if (numeroUsuario == numeroSecreto) {
    //acertado 
    alert(`Acertaste, el numero: ${numeroUsuario}`);
}else {
    //la condicion no se cumplio
    alert("Lo siento no acertaste el numero")
}
*/
//--------------
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let numeroMaximoPosible=100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntento = "Intento";
let maxIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Elige un número entre 1 y ${numeroMaximoPosible} plox:`));

    console.log('Valor de intento:', numeroUsuario);


    // Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    if (numeroUsuario == numeroSecreto) {
        //alert(`Adivinaste, el numero es ${numeroUsuario}, lo hiciste en: ${intentos} ${palabraIntento}`);
        alert(`Adivinaste, el numero es ${numeroUsuario}, lo hiciste en: ${intentos} ${intentos == 1 ? 'Intento' : 'Intentos'}`); //operador ternario para condicional
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        }
        else {
            alert("El numero secreto es mayor");
        }
        //intentos = intentos + 1;
        //intentos +=1;
        intentos++;
        //palabraIntento = "Intentos";

        if (intentos > maxIntentos) { //limite de intentos
            alert(`Pasaste el limite de ${maxIntentos} intentos, el numero secreto era: ${numeroSecretos});`);
            break;
        }
        // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
        //console.log('Valor del número secreto:', numeroSecreto);
        //alert('No acertaste, el número secreto era ' + numeroSecreto);
    }
}