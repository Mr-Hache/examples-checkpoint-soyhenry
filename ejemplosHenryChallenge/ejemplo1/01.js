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
  var rest = 0;
  var minimo = arr[0];
  var maximo = 0;

  for (i = 0; i < arr.length; i++){
      if(arr[i] > maximo){
      maximo = arr[i];
    }
    if(arr[i] < minimo){
      minimo = arr[i];
    }
  }
  rest = maximo - minimo;
  return rest;
};
// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor