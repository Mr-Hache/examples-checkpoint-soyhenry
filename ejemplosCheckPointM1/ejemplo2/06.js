const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6
// PENDIENTE
// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
  let array = [];
  let extraer = function (value) {
    array.push(value);
  };
  this.depthFirstForEach(extraer);

  array = array.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
  return [array[0], array[1]];
};
BinarySearchTree.prototype.depthFirstForEach = function (call) {
  if (this.left) this.left.depthFirstForEach(call);
  call(this.value);
  if (this.right) this.right.depthFirstForEach(call);
};

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
