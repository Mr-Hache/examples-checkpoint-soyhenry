const utils = require("../utils");
/*
    4️⃣ ***EJERCICIO 4*** - findBook 4️⃣
      ❕ CONSIGNA ❕
       
    1 - Debemos buscar nuestro libro en el array de books y actualizar las propiedades de name, rating y genre.

    2 - Si no encuentra un libro, debe
    arrojar un Error. ej: Error("no se encontro el libro solicitado")

    3 - Si alguna de las propiedades del book que recibimos son undefined, debe arrojar un Error. ej: Error("falta completar datos")

    📢 PUNTOS A TENER EN CUENTA 📢

    - Nuestros libros se van a encontrar en un array que inicialmente lo vas a ver vacio pero a medida que se agreguen libros va a ser un array de objetos.Este mismo se encuentra en nuestro archivo utils.

    - Dentro del array de utils es donde debemos buscar nuestros libros

  */

const findBook = (book) => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️
const {id} = book;
const bookFound = utils.books.find((book) => book.id === id);
if (!bookFound) {
  throw new Error("no se encontro el libro solicitado");
}
else{
  if(!book.name || !book.rating || !book.genre){
    throw new Error("falta completar datos");
  }{
    bookFound.name = book.name;
    bookFound.rating = book.rating;
    bookFound.genre = book.genre;
    return bookFound;
  }
}

};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = findBook;
