/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
  let min = arr[0];
  let max = arr[0];
  arr.forEach((num) => {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });
  return max - min;
}
// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor;
