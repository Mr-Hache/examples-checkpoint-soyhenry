/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 7
// Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [3, [7, [5,6]], [9,6], 4];
//    restArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
// Ejemplo:
//      40-3 = 37   //  PEDDIENTE ----->
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var restArray = function (array) {
  // Tu código acá
  let suma = sumarDatos(array);
  let count = 0;
  function sumarPosiciones(aray) {
    for (let i = 0; i < aray.length; i++) {
      if (aray[i] instanceof Array) {
        count++;
        sumarPosiciones(aray[i]);
      }
    }
  }
  sumarPosiciones(array);
  if (suma > 0) {
    return suma - count;
  } else {
    return -1;
  }
};

function sumarDatos(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      suma += sumarDatos(array[i]);
    } else {
      suma += array[i];
    }
  }
  return suma;
}

// No modifiques nada debajo de esta linea //

module.exports = restArray;
