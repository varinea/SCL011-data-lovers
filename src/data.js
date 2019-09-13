/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



const filterlive = (data,condition) => {
  const resultFilterLive = data.filter(element => {

   return element.Alive === condition
  });

  return resultFilterLive.Alive;

}