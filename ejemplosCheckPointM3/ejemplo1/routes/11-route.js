const router = require('express').Router();
const takeBook = require('../controllers/05-controller')
// No modificar arriba de esta línea

/*
  1️⃣1️⃣ ***EJERCICIO 11*** GET /book/:id 1️⃣1️⃣
      ❕ CONSIGNA ❕
    1 - Integrar la función takeBook que desarrollaste previamente para solicitar un libro
    2 - Responder con el resultado de la operación
    3 Si algo falla al crear el producto, debes responder con el mensaje del error + el status code!
    📢 PUNTOS A TENER EN CUENTA 📢
    - Recordá chequear el mensaje del error y devolver la respuesta dependiendo del mismo. 
*/

router.get('/book/:id', (req, res) => {
  const {id} = req.params
  const {quantity} = req.query

  try {
    const take = takeBook(id, quantity)
    res.status(200).json(take)
  } catch (error) {
    if(error.message == ""){
      
    }
    if(){

    }
  }
})

//No modificar nada debajo de esta linea
module.exports = router