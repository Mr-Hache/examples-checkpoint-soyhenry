const { BinarySearchTree } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 6️⃣ ***** EJERCICIO 6 ***** - agregarProductos 6️⃣
// Implementar la función agregarProductos(producto) al prototipo de BinarySearchTree, que nos servirá para
// agregar LOS NOMBRES de los productos en una góndola de supermercado en base a las comparacionesde sus precios,
// siguiendo la siguiente tabla:
//
//    ┌─────────┬────────┐
//    │Productos│ Precios│
//    ├─────────┼────────┤
//    │  Leche  │  100   │
//    │  Queso  │  150   │
//    │   Pan   │   50   │
//    │ Frutas  │  110   │
//    │  Arroz  │   40   │
//    │  Jugo   │   80   │
//    └─────────┴────────┘
//
//  EJEMPLO:
//
//  Si partimos del árbol inicial llamado "arbolDeProductos" con un solo nodo:
//
//                                              Leche
//                                              /    \
//
//    arbolDeProductos.agregarProductos(Queso)
//
//                                              Leche
//                                              /    \
//                                                   Queso
//
// El producto "Queso" se insertó a la derecha, ya que su precio (150), es mayor que el precio Leche (100).
//
//    arbolDeProductos.agregarProductos(Pan)
//
//                                             Leche
//                                             /    \
//                                          Pan      Queso
//
// El producto "Pan" se insertó a la izquierda, ya que su precio (50), es menor que el precio Leche (100).
//
//    arbolDeProductos.agregarProductos(Frutas)
//
//                                             Leche
//                                            /     \
//                                         Pan       Queso
//                                                  /
//                                               Frutas
//
// El producto "Frutas" en la posición correspondiente, ya que su precio (110), supera al de Leche (100) y
// es menor que precio de Queso (150).
//
// CONSIGNAS:
//  🟢 En caso de querer insertar un producto que ya se encuentra en el árbol, debe retornar
//    el string "Ya existe el producto".
//  🟢 En caso de querer insertar un producto que no se encuentra en la tabla de precios, debe retornar
//    el string "Producto inexistente".
//  🟢 El método debe insertar el producto en la posición correspondiente, basando su ubicación en el
//    precio del producto. (Ver ejemplos)
//  🟢 En caso de insertar el producto correctamente, debe retornar el nuevo nodo que ha sido insertado.

BinarySearchTree.prototype.agregarProductos = function (
  nombreProducto,
  productos
) {
  if (productoValido(nombreProducto, productos)) {
    if (!this.productoExistente(nombreProducto, productos)) {
      return this.ingresarProducto(nombreProducto, productos);
    } else {
      return "Ya existe el producto";
    }
  } else {
    return "Producto inexistente";
  }
  function productoValido(nombreProducto, productos) {
    if (productos.hasOwnProperty(nombreProducto)) {
      return true;
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.productoExistente = function (
  nombreProducto,
  productos
) {
  if (this.value == nombreProducto) {
    return true;
  } else if (productos[nombreProducto] < productos[this.value] && this.left) {
    return this.left.productoExistente(nombreProducto, productos);
  } else if (productos[nombreProducto] > productos[this.value] && this.right) {
    return this.right.productoExistente(nombreProducto, productos);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.ingresarProducto = function (
  nombreProducto,
  productos
) {
  let aux = this.value;
  if (productos[nombreProducto] < productos[aux]) {
    if (this.left === null) {
      let newTree = new BinarySearchTree(nombreProducto);
      this.left = newTree;
      return this.left;
    } else {
      return this.left.ingresarProducto(nombreProducto, productos);
    }
  } else {
    if (this.right === null) {
      let newTree = new BinarySearchTree(nombreProducto);
      this.right = newTree;
      return this.right;
    } else {
      return this.right.ingresarProducto(nombreProducto, productos);
    }
  }
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BinarySearchTree,
};
