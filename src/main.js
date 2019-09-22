/* Manejo del DOM */


/*___________________________VIDEO_____________________________________*/


var RyMVideo = document.getElementById("videoMyR");
        function playPause() {
            if (RyMVideo.paused)
                RyMVideo.play();
            else
                RyMVideo.pause();
        }
        function stop() {
            videoMyR.pause();
            videoMyR.currentTime = 0;
        }
        function skip(value) {
            videoMyR.currentTime += value;
        };


/*___________________________PERSONAJES_____________________________________*/


let RyM = RICKANDMORTY.results;
//Le doy nombre a mi variable, la cuál tiene la función de llamar la data de rickandmorty.js resultados.

document.getElementById("showMeTheCharacters").addEventListener("click", () => {filterRyM.character(RyM);})
 //Desde el HTML llamo al boton y le digo que al hacer click comience la función
  //creo una variable, objeto y llama a la variable de RyM (La cual contiene la info de data)






