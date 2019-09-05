/* Manejo del DOM */

const all = RICKANDMORTY.results; //declaramos una variable para tomas todo de la data RICKANDMORTY// .results de la data tomo 
                                    //solo los resultados
for(let i = 0; i < all.length; i++) // aqui tenemos for declaramos la formula dando una variable llamada i que es igual(=) a 0
                                      // siendo menor (<) que la variable all y length que recorre la longitud y i++(recorre uno por uno) 
  { console.log(all[i].status);   } 

  const all = RICKANDMORTY.results; //declaramos una variable para tomas todo de la data RICKANDMORTY// .results de la data tomo 
                                    //solo los resultados


const recoverValues = Object.values(all) // Esta variable recorre los valores y devuelve lo que esta en all*
//console.log(recoverValues);

