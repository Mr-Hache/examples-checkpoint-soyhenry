// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá
  let array2 = Object.values(obj);
  let array3 = array.concat(array2);
  return mergeSort(array3);
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2));
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
