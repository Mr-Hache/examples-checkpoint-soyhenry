/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ingredienteEnMalEstado(menu, comida, ingrediente) {
  // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
  // ya que deben estar contaminados también.
  // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
  // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de
  // diferencia.
  // Ej:
  /* let menuDelDia = {
      raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
      bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
      tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
  } */
  // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
  // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
  // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
  // NOTA: No utilizar el método "includes".
  //
  // Tu código:
  let objComida = [];
  let malEstado = [];
  for (let key in menu) {
    if (key === comida) {
      objComida = menu[key];
    }
  }
  for (let i = 0; i < objComida.length; i++) {
    switch (i) {
      case 0:
        if (objComida[i] === ingrediente) {
          malEstado.push(objComida[i]);
          malEstado.push(objComida[i + 1]);
        }

      case objComida.length - 1:
        if (objComida[i] === ingrediente) {
          malEstado.push(objComida[i - 1]);
          malEstado.push(objComida[i]);
        }
        break;
      default:
        if (objComida[i] === ingrediente) {
          malEstado.push(objComida[i - 1]);
          malEstado.push(objComida[i]);
          malEstado.push(objComida[i + 1]);
        }
        break;
    }
  }
  if (malEstado.length === 0) {
    return "El menú está perfecto";
  } else {
    return malEstado;
  }
}

// No modifiques nada debajo de esta linea //

module.exports = ingredienteEnMalEstado;
