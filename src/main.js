/* Manejo del DOM */


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


let RyM = RICKANDMORTY.results;
/*Le doy nombre a mi variable, la cuál tiene la función de llamar la data de rickandmorty.js resultados. */

document.getElementById("showMeTheCharacters").addEventListener("click", () => {filterRyM.character(RyM);})
 /*Desde el HTML llamo al boton y le digo que al hacer click comience la función
  creo una variable, objeto y llama a la variable de RyM (La cual contiene la info de data) */






