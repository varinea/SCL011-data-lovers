/* Manejo del DOM */

let RyM = RICKANDMORTY.results;
//Le doy nombre a mi variable, la cuál tiene la función de llamar la data de rickandmorty.js

document.getElementById("showMeTheCharacters").addEventListener("click", () => {
  filterRyM.character(RyM);
  //llamo al id "showMeTheCharacters" de HTML y con un addEve...y la funcion el usuario al hacer
  // CLICK esta llamando a la variable de los personajes de RICKANDMORTY
})

//   PREGUNTAR SI VA EN DATA O EN MAIN??? 
filterRyM = {  //
  character: (RyM) => {
    //(character_RyM) conecto con filter para poder 

    let resultCharacter = [" "]; // Creo la variable para que recorra for.
    for (let i = 0; i < RyM.length; i++) { //For recorrer       para concatenar ``
      resultCharacter +=

        `       
          <li class="character_RyM">
          <img class="imgrym" src="${RyM[i].image}">
          <div id="charcter_div"> 
          <p class="textrym1">  ${RyM[i].name}</p>
          <p class="textrym1">  ${RyM[i].status}</p>
          <p class="textrym1">  ${RyM[i].species}</p>
          <p class="textrym1">  ${RyM[i].origin.name}</p>
          </div>
          </li>
          `
      document.getElementById("root").innerHTML = resultCharacter;

    };
  }
};


filterRyM = filterRyM; 

//________________________________________________________________________________________________




const containerRoot = document.getElementById("root") //llamo al root de HTML
const selectstatus = document.getElementById('Alive') //Creo variable y llamo al estado ALIVE de la data de rickandmorty.js

selectStatus.addEventListener("change" , () => {

  let condition = selectstatus.options [selectstatus.selectIndex].text

  window.filterAlive.Alive(root);

})





//return resultCharacter;
//.join('');
//filtrar
//var filter_RyM = resultCharacter.filter(dos => dos =="RyM[i].name");
//document.getElementById(showMetheName).addEventListener"click", ()=>;
//BUSCAR WINDOW


/* FILTRAR

const filterhouse = (DATA, condition)

*/