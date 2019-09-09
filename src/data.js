/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const rymList = window.RICKANDMORTY.rickandmorty;
 window.rymList= rymList;

 //Filtrar por Tipo
//Recibe dos parámetos: 1.La lista de personajes rym y 2. El 'type' escogido
const filterTypes = (rymList, selectedType) => {
    //.filter() crea un nuevo array compuesto por los elementos que cumplen
    //el criterio de búsqueda, en este caso crearía un arreglo de todos los personajes
    //que cumplan con el 'type' seleccionado.
    //trabajamos con 'Element' a modo genérico, en este caso el elemento será la variable
    //donde se encuentra la lista de pokemons utiizada  en el main.js
    const resultType = rymList.filter(Element => {
      //retornará todo elemento donde se encuentre dentro de su array de tipo 'type' según
      //sea el value seleccionado en el selectBox (html estático)
        return Element.type.includes(selectedType);
    });
    //retorna el valor de la función filtrar
    return resultType;

  }

  //hacemos FilterTypes de modo global para llamarla desde main.js
    window.filterTypes = filterTypes;