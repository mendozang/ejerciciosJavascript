//tarea 1 - invertir cadena

//funcion devolver cadena invertida
function invertir_cadena(cadena) {
    var cadena_invertida = cadena.split("").reverse().join("");
    return cadena_invertida;
}

// usar funcion cadena invertida
function useInvCadena() {
    var input = document.getElementById("invertirCadena").value;
    var result = invertir_cadena(input);
    document.getElementById("resultadoCadena").innerText = "Cadena invertida: " + result;
}


//tarea 2 - es numero primo

//funcion determinar numero primo
function es_primo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// usar funcion es primo
function useEsPrimo() {
    var input = document.getElementById("primo").value;
    var result = es_primo(parseInt(input));
    document.getElementById("resultadoPrimo").innerText = "¿Es un número primo? " + result;
}


//tarea 3 - eliminar duplicados

//funcion eliminar duplicados en un arreglo
function eliminar_duplicados(arreglo) {
    var arreglo_sin_duplicados = [];
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo_sin_duplicados.indexOf(arreglo[i]) === -1) {
            arreglo_sin_duplicados.push(arreglo[i]);
        }
    }
    return arreglo_sin_duplicados;
}

// usar funcion eliminar duplicados
function useElimDuplicados() {
    var input = document.getElementById("arreglo").value;
    var result = eliminar_duplicados(input.split(',').map(Number));
    document.getElementById("resultadoArreglo").innerText = "Arreglo sin duplicados: " + result;
}


//tarea 4 - calcular factorial

//funcion calcular factorial de un numero
function calcular_factorial(numero) {
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

// usar funcion calcular factorial
function useCalcFactorial() {
    var input = document.getElementById("factorial").value;
    var result = calcular_factorial(parseInt(input));
    document.getElementById("resultadoFactorial").innerText = "Factorial: " + result;
}


//tarea 5 - contar vocales

//funcion recuento de vocales
function contar_vocales(cadena) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var contador = 0;

    for (var char of cadena) {
        if (vocales.includes(char)) {
            contador++;
    }
    }
    return contador;
}

// usar funcion contar vocales
function useContVocales() {
    var input = document.getElementById("vocales").value;
    var result = contar_vocales(input);
    document.getElementById("resultadoVocales").innerText = "Número de vocales: " + result;
}


//tarea 6 - sumar arreglo

//funcion sumar los numeros de un arreglo
function sumar_arreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        
            suma = suma + arreglo[i];
    }
    return suma;
}

// usar funcion sumar arreglo
function useSumArreglo() {
    var input = document.getElementById("sumarArreglo").value;
    var result = sumar_arreglo(input.split(',').map(Number));
    document.getElementById("resultadoSuma").innerText = "Suma de los números: " + result;
}


//tarea 7 - numero maximo en un arreglo

//funcion encontrar el numero maximo en un arreglo
function max_arreglo(arreglo) {
    var max = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > max) {
            max = arreglo[i];
        }
    }
    return max;
}

// usar funcion maximo arreglo
function useMaxArreglo() {
    var input = document.getElementById("maximoArreglo").value;
    var result = max_arreglo(input.split(',').map(Number));
    document.getElementById("resultadoMaximo").innerText = "Número máximo: " + result;
}

//prueba de las funciones
console.log(invertir_cadena("hola mundo"));
console.log(es_primo(107));
console.log(es_primo(20));
console.log(eliminar_duplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(calcular_factorial(5));
console.log(contar_vocales("hola mundo"));
console.log(sumar_arreglo([1, 2, 3, 4, 5]));
console.log(max_arreglo([1, 2, 3, 4, 5]));
