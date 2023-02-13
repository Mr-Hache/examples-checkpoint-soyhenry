const { LinkedList } = require("./DS");

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if (this.head === null) {
    return false;
  }
  let array = [];
  let current = this.head;
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  while (this.size() > 0) {
    this.remove(this.head.value);
  }
  array = array.sort((a, b) => {
    // si a es mayor que b, retorna -1, si a es menor que b, retorna 1, si son iguales, retorna 0, sort ordena los numemeros segun lo que se retorne, -1 quiere decir que a debe ir antes que b, 1 quiere decir que b debe ir antes que a, 0 quiere decir que a y b son iguales...
    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
  });
  while (array.length > 0) {
    this.add(array.shift());
  }
};

LinkedList.prototype.size = function () {
  let current = this.head;
  let size = 0;
  while (current) {
    size++;
    current = current.next;
  }
  return size;
};

// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList,
};
