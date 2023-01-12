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
  let arr = [];
  if (!this.head) return false;
  if (this.head) {
    arr.push(this.head.value);

    let current = this.head;
    while (current.next) {
      arr.push(current.next.value);
      current = current.next;
    }

    arr.sort((a, b) => b - a);
    this.head = null;
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
  }
};

// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList,
};
