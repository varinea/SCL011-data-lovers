
/*___________________________VIDEO_____________________________________*/


var RyMVideo = document.getElementById("videoMyR"); /*Se define la variable para llamar al video de html */
        function playPause() { /* se crea una funcion playpause para especificar si el video se pausara o se ejecutara en el navegador */
            if (RyMVideo.paused)  
                RyMVideo.play();
            else
                RyMVideo.pause(); 
        }
        function stop() {  /* aqui defino con la funcion stop, que al momento de detener el video este se devolvera al minuto 0 */
            videoMyR.pause();
            videoMyR.currentTime = 0;
        }
        function skip(value) {   /*y con la funcion skip es para adelantar y retroceder el video */
            videoMyR.currentTime += value;
        };

/*___________________________PERSONAJES_____________________________________*/


let RyM = window.RICKANDMORTY.results;
/*Le doy nombre a mi variable, la cuál tiene la función de llamar la data de rickandmorty.js resultados. */

document.getElementById("showMeTheCharacters").addEventListener("click", () => {filterRyM.character(RyM);})
 /*Desde el HTML llamo al boton y le digo que al hacer click comience la función
  creo una variable, objeto y llama a la variable de RyM (La cual contiene la info de data) */
  //container.style.display = 'block';

  filterRyM = {character: (RyM) => {
    //(character_RyM) llamo a main para la data.
  
    let resultCharacter; // Creo la variable donde recorrera for.
    for (let i = 0; i < RyM.length; i++) { //For recorrera la data desde 0 leyendola toda y llendo una por una. 
      // para concatenar ``
  
      resultCharacter += // a la variable le digo que sigue siendo igual y ademas es todo lo que agregare
       //concateno y tomo los datos que necesito de la data
     /*container.innerHTML +=*/ `<div class="textRyM2"> 
        <h2>CONOCE A TODOS LOS PERSONAJES</h2>
        <h1>de Rick and Morty</h1>
        <br><br>
        </div>
        
        <div class="liItem">
        <br><br><br><br><br><br><br>
          <img class="imgrym" src="${RyM[i].image}">
          <div class="charData"> 
          <p class="textrym1">  ${RyM[i].name}</p>
          <p class="textrym1">  ${RyM[i].status}</p>
          <p class="textrym1">  ${RyM[i].species}</p>
          <p class="textrym1">  ${RyM[i].origin.name}</p>
          </div>    
          </div>
          `
      document.getElementById("root").innerHTML = resultCharacter;  
      // ahora llamo al id root de html y con innerHTML hago que se lea mi variable.
  
    };
  }
  };


/*___________________________VIVOS_____________________________________*/

const dataFilter= window.data.filterStatusAlive(RyM);
  
const btnStatusAlive = document.getElementById("showMeAlive");

  btnStatusAlive.addEventListener("click", () => {

    let resultALIVE; // Creo la variable donde recorrera for.
    for (let i = 0; i < dataFilter.length; i++) { //For recorrera la data desde 0 leyendola toda y llendo una por una. 
      // para concatenar ``
  
      resultALIVE += // a la variable le digo que sigue siendo igual y ademas es todo lo que agregare
       //concateno y tomo los datos que necesito de la data

    `      
    <div class="textRyM2"> 
      <h2>PERSONAJES VIVOS</h2>
      <h1>de Rick and Morty</h1>
      <br><br>
      </div>
      
      <div class="liItem">
      <br><br><br><br><br><br><br> 
        <img class="imgrym" src="${RyM[i].image}">
        <div class="charData"> 
        <p class="textrym1">  ${RyM[i].name}</p>
        <p class="textrym1">  ${RyM[i].status}</p>
      
        </div>    
        </div>
        `

   document.getElementById("root").innerHTML = resultALIVE;
}});


/*___________________________MUERTOS_____________________________________*/

const dataFilterDead= window.data.filterStatusDead(RyM);
  
const btnStatusDead = document.getElementById("showMeDead");

 btnStatusDead.addEventListener("click", () => {

    let resultDead; // Creo la variable donde recorrera for.
    for (let i = 0; i < dataFilterDead.length; i++) { //For recorrera la data desde 0 leyendola toda y llendo una por una. 
      // para concatenar ``
  
      resultDead += // a la variable le digo que sigue siendo igual y ademas es todo lo que agregare
       //concateno y tomo los datos que necesito de la data

    `      
    <div class="textRyM2"> 
      <h2>PERSONAJES MUERTOS</h2>
      <h1>de Rick and Morty</h1>
      <br><br>
      </div>
      
      <div class="liItem">
      <br><br><br><br><br><br><br>
        <img class="imgrym" src="${RyM[i].image}">
        <div class="charData"> 
        <p class="textrym1">  ${RyM[i].name}</p>
        <p class="textrym1">  ${RyM[i].status}</p>
      
        </div>    
        </div>
        `

   document.getElementById("root").innerHTML = resultDead;
}});