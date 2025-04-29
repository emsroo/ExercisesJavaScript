console.log("soy un script externo");

// ERROR: 'message' no está defido en ningún lugar, por eso esta línea dará error en consola.
// console.log(message); // -> Se recomienda comentar o definir `message` primero.

// Ejercicio #1: Encontrar el número mayor de una lista sin usar Math.max

// Bubble Sort (ordenar de menor a mayor)// -----------------------------------------------------------------
function Bubble(Nums) {
    let flag = false; // Usar 'let' para declarar variables locales
    while (flag === false) {
        flag = true;
        for (let i = 0; i < Nums.length - 1; i++) {
            if (Nums[i] > Nums[i + 1]) {
                let temp = Nums[i]; // Simplificación del swap
                Nums[i] = Nums[i + 1];
                Nums[i + 1] = temp;
                flag = false;
            }
            console.log("---", Nums);
        }
    }
    let Max = Nums[Nums.length - 1];
    let Min = Nums[0];
    return [Min, Max];
}

// Ejemplo de uso
// let a = Bubble([3, 5, 7, 1, 6]);
// console.log(a);

// Función para encontrar números repetidos// -----------------------------------------------------------------
function Repeater(Nums) {
    let res = false;
    for (let i = 0; i < Nums.length; i++) {
        for (let k = i; k < Nums.length; k++) {
            if (Nums[i] === Nums[k + 1]) {
                console.log(`Numeros repetidos ${Nums[i]} ${Nums[k + 1]}, en posición ${i} y ${k + 1} de ${Nums}\n`);
                res = true;
            }
        }
    }
    if (res === false) {
        console.log(`${Nums} no se repite!`);
    }
}

// Ejemplos de uso
// Repeater([1, 22, 5, 17, 10, 5, 40, 5]);
// Repeater([1, 22, 5, 14, 24, 31, 27, 15, 105]);

// Función para generar un número entero aleatorio// -----------------------------------------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Lista ordenada
let Ordered = [1, 2, 5, 14, 24, 31, 50, 105];

console.log(getRandomInt(Ordered.length)); // Mostrar un índice aleatorio de la longitud de la lista
console.log(Ordered.length);

// Proceso para mezclar elementos aleatoriamente// -----------------------------------------------------------------
let unOrdered = [];

for (let i = 0; i < Ordered.length; i++) {
    let blank = false;
    while (blank === false) {
        let randomIndex = getRandomInt(Ordered.length);
        if (unOrdered[randomIndex] !== undefined) {
            console.log("The index is not empty");
            blank = false; // esta línea realmente es innecesaria  pero la quiero poner, el while ya sigue
            console.log("The index is redefined");
        } else {
            blank = true;
            console.log("The index is good now, you can add");
            unOrdered[randomIndex] = Ordered[i];
            console.log("Added element");
        }
    }
}

console.log("Lista Final", unOrdered);

console.log("Da un numero de una lista de 100") // -----------------------------------------------------------------
// Elaborar una función que reciba un número y adivine un número entre el 1 y el 100 en el menor número de pasos posibles
console.log((Math.floor(Math.random() * 100)));


// Elaborar una función que reciba un entero (entre 100 y 200) y determine si es múltiplo de 3// -----------------------------------------------------------------

let num = 123;
let numFalse = 124;

// Función para verificar si un número es múltiplo de 3
function EsMultiploTres(num) {
    if (num % 3 === 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// Prueba de la función
EsMultiploTres(numFalse);

// -----------------------------------------------------------------

// Función para encontrar si algún número de una lista es igual a la suma de los otros dos

let Nums = [5, 2, 7];

// Sumas de combinaciones posibles
let sums = [
    Nums[1] + Nums[2], // suma del segundo y tercer elemento
    Nums[0] + Nums[2], // suma del primero y tercer elemento
    Nums[0] + Nums[1]  // suma del primero y segundo elemento
];

// Verificación de igualdad entre elementos y sumas
if (Nums[0] === sums[0] || Nums[1] === sums[1] || Nums[2] === sums[2]) {
    console.log('true');
}

// -----------------------------------------------------------------

// Verificar si un número es par

let input = Nums[1]; // Seleccionamos el segundo número del arreglo

if (input % 2 === 0) {
    console.log(`El número es par: ${input}`);
}

// Nota: si quieres checar todos los elementos, necesitarías un bucle (pero aquí solo se verifica uno).// -----------------------------------------------------------------
//////////////////////////////// recomendaciones made with ChatGPT
// 1. Adivinar un número con búsqueda binaria (simple)
// La idea es no adivinar al azar, sino siempre ir a la mitad entre un rango bajo y alto:

// javascript
// Copy
// Edit
function adivinarNumeroSecreto(numeroSecreto) {
    let bajo = 1;
    let alto = 100;
    let intentos = 0;

    while (bajo <= alto) {
        let medio = Math.floor((bajo + alto) / 2);
        console.log(`Intento con: ${medio}`);
        intentos++;

        if (medio === numeroSecreto) {
            console.log(`¡Adivinado en ${intentos} intentos!`);
            return medio;
        } else if (medio < numeroSecreto) {
            bajo = medio + 1;
        } else {
            alto = medio - 1;
        }
    }
}

// Ejemplo: (supongamos que el número secreto es 73)
adivinarNumeroSecreto(73);
// ✅ Esto usa búsqueda binaria: siempre divide entre bajo y alto.

// 2. Desordenar una lista con Fisher-Yates Shuffle (más eficiente)
// En vez de buscar lugares vacíos, simplemente intercambias posiciones de los elementos:

// javascript
// Copy
// Edit
function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // intercambiar posiciones
    }
    return array;
}

// Ejemplo de uso:
let lista = [1, 2, 3, 4, 5];
console.log(fisherYatesShuffle(lista));
// ✅ Muy rápido y limpio para mezclar una lista.

// 3. Hacer la suma de dos números en una función
// Esto simplemente organiza tu código para poder reutilizarlo mejor:

// javascript
// Copy
// Edit
function existeSumaDeDos(Nums) {
    let sums = [
        Nums[1] + Nums[2],
        Nums[0] + Nums[2],
        Nums[0] + Nums[1]
    ];
    return (Nums[0] === sums[0] || Nums[1] === sums[1] || Nums[2] === sums[2]);
}

// Ejemplo de uso:
let numeros = [5, 2, 7];
console.log(existeSumaDeDos(numeros)); // true
// ✅ Ahora puedes llamarlo cuando quieras sin repetir lógica.

// Resumen ultra sencillo:
// Búsqueda binaria = ir a la mitad cada vez.

// Fisher-Yates = intercambiar elementos hacia atrás aleatoriamente.

// Función modular = encapsular la lógica para no repetir código.

// ¿Te gustaría que también te prepare una versión unificada de todo tu script aplicando estas 3 mejoras pero manteniendo tu estilo actual? 🚀 (Te lo puedo preparar en un solo bloque limpio si quieres.)



// //CONTAR VOCALES EN UNA CADENA
// str = 'hello';
// for (i = 0; i < str.length; i++) {
//   console.log(str[i]);
//   if ==a
//   else if 
//   else if 
//   else if 

// }

// Log to console
console.log(message);

str = 'hello';
for (i = 0; i < str.length; i++) {
    console.log(str[i]);
    if == a
  else if 
  else if 
  else if 
  
}

// ------================================
arr = [];
for (i = 1; i <= 100; i++)
    arr.push(Math.floor(Math.random() * 100));

// for (i=1;i<=100; i++)
// 
