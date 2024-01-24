/* ------------------------}
 
//-Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
alert('¡Bienvenido a nuestro sitio web!');

//-Declara una variable llamada nombre y asígnale el valor "Luna".
let nombrep = "Lua";

//-Crea una variable llamada edady asígnale el valor 25.
let edadp = 25;

//-Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;

//-Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;

//-Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert('¡Error! Preencha todos los campos');

//-Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
let mensajeDeError = '¡Error! Preencha todos los campos';
alert(mensajeDeError);

//-Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
let nombre = prompt('Digite su nombre');

//-Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edad2 = prompt('Digite su edad');

//-Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
let edad3 = prompt('Digite su edad');
if (edad3 >= 18) {
    alert('¡Puede obtener su licencia de conducir!');
}

*/



//DESAFIO 2
/*
# Resolución de los desafíos del curso de lógica de programación <h1>

Practicar la lógica de programación, incluyendo conceptos como variables, condiciones (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos son la base para abordar problemas de manera estructurada, tomar decisiones sin código, crear bucles controlados e interactuar de manera efectiva con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde temprano es fundamental para construir una base sólida y exitosa en el campo de la programación.

## Desafíos - Respuestas <h2>

1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
```
  let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') { //compara verdadero falso 
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
```
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
```
  let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
```
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."
```
  let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
```
4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.
```
  let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de $${saldoCuenta}.`);
```
5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.
```
  let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`);
```
*/





//----- DESAFIO 3
/*Resolución de los desafíos del curso de lógica de programación
Practicar la lógica de programación, que incluye conceptos como variables, condicionales (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear iteraciones controladas e interactuar eficazmente con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde el principio es fundamental para construir una base sólida y exitosa en el campo de la programación.

Desafíos - Respuestas
1- Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}

2- Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}

3- Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}

4- Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
}" 
*/



//----------------------DESAFIO 4
/*
Resolução dos desafios do curso de lógica de programação
Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt), é essencial para sua carreira de desenvolvimento de software. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar iterações controladas e interagir eficazmente com os usuários.

Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma base sólida e bem-sucedida no campo da programação.

Aquecendo na programação - Respostas
1--Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido');

2--Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = 'Steven';
console.log(`hOlá, ${nombre}!`);

3--Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre = 'Steven';
alert(`Hola, ${nombre}!`);

4--Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajePreferido = prompt('cual es el lenguaje de programacion que mas te gusta');
console.log(lenguajePreferido);

5--Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)

6--Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola
let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);

7--Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let idade = prompt('Digite una edad:');
if (idade > 18) {
    console.log('Es mayor de edad.');
} else {
    console.log('Es menor de edad.');
}

8--Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("El numero es positivo.");
} else if (numero < 0) {
    console.log("El numeor es negativo.");
} else {
    console.log("El numero es zero.");
}

9--Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

10--Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

11--Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

12--Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroEnteroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroEnteroAleatorio);

13--Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroEnteroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroEnteroAleatorio);
*/