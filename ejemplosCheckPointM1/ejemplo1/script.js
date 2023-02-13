let string = "abb"

var allAnagrams = function (string) {
    return distinct(permutaciones(string));
  };
  function permutaciones(string) { // esta funcion entrega la lista de permutaciones sin quitar las repetidas
    if (typeof string !== "string") { // si la variable "string" no es un string lanza un error
      throw new TypeError("El argumento debe ser un string");
    }
    if (string.length < 2) { // si la variable "string" tiene menos de 2 caracteres, retorna la misma variable
      return string;
    } else if (string.length === 2) { // si la variable "string" tiene dos caracteres devuelve un array con el mismo string y el string inverso
      return [string, string[1] + string[0]];
    }
    var permutations = []; // array para guardar las permutaciones
    for (var i = 0; i < string.length; i++) { // este for recorre cada caracter del string
        var char = string[i]; // 
        if (string.indexOf(char) != i) continue; // si el caracter ya fue usado, se salta el resto del ciclo
        let remainingString = string.slice(0, i) + string.slice(i + 1, string.length); // crea un string con los caracteres restantes del string original
        for (let subPermutation of permutaciones(remainingString)) { // este for recorre cada permutacion del string restante
            permutations.push(char + subPermutation); // agrega la permutacion al array de permutaciones
        }
        }
    return permutations; // retorna el array de permutaciones
        
   }
  
  function distinct(array) {
    return [...new Set(array)];
  }

  console.log(allAnagrams(string));