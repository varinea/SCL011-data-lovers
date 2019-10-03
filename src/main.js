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


const RyM= window.RICKANDMORTY.results; //Primero Creo mi variable la cual llamara a la data de Api rickandmorty.js
                                        //Window se agrega al final para que todas mis archivos sean unificados.
                                      
const resultCharacter = document.getElementById("root"); // Creo una constante donde donde llamo a mi id "root" 

function mostrarData(RyM){ //creo una funcion la cual llamo mostrarData que llama a mi variable principal RyM
for (let i = 0; i < RyM.length; i++) { //Creo un For para que recorra mi data 
  resultCharacter.innerHTML +=  // llamando a la constante creada anteriormente con innerHTML imprimo en mi página todo de la función.
  `
  <div class="textRyM2"> 
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
}
}
console.log(RyM);

const showmethecharacters = document.getElementById("showMeTheCharacters"); // Creo variable la cual llama a mi boton de HTML

showmethecharacters.addEventListener("click", () => { // Con la variable creada anteriormente digo que al momento que el usuario haga click 
document.getElementById("root").innerHTML = " ";  // Llame a mi id root y que imprima con innerHTML 
mostrarData(RyM); // Finalmente llamo a mostrarData y (mi variable de la data principal)
});

/*___________________________FILTRAR VIVOS__________________________________*/

const showmealive = document.getElementById("showMeAlive")
showmealive.addEventListener("click", () => {
  let showmealiveP =document.getElementById("showMeAlive").value;
  let printshowmealiveP = window.RyM.filterStatusAlive(RyM,showmealiveP);
  document.getElementById("root").innerHTML = " ";  
  mostrarData(printshowmealiveP);
  });


/*___________________________FILTRAR MUERTOS__________________________________*/

const showmedead = document.getElementById("showMeDead")
showmedead.addEventListener("click", () => {
  let showmeadeadP =document.getElementById("showMeDead").value;
  let printshowmedeadP = window.RyM.filterStatusDead(RyM,showmeadeadP);
  document.getElementById("root").innerHTML = " ";  
  mostrarData(printshowmedeadP);
  });

/*________________________FILTRAR DESCONOCIDOS__________________________________*/

const showmeUnknown = document.getElementById("showMeunknown")
showmeUnknown.addEventListener("click", () => {
  let showmeaUnknowP =document.getElementById("showMeunknown").value;
  let printshowmeUnknowP = window.RyM.filterStatusUnknown(RyM,showmeaUnknowP);
  document.getElementById("root").innerHTML = " ";  
  mostrarData(printshowmeUnknowP);
  });


  /*________________________FILTRAR MUJERES__________________________________*/

const showmeGenderFem = document.getElementById("showMeTheGenderFem")
showmeGenderFem.addEventListener("click", () => {
  let showmeaGenderFem_dos =document.getElementById("showMeTheGenderFem").value;
  let printGenderFem = window.RyM.filterGenderFem(RyM,showmeaGenderFem_dos);
  document.getElementById("root").innerHTML = " ";  
  mostrarData(printGenderFem);
  });

  /*________________________FILTRAR HOMBRES__________________________________*/

const showmeGenderMale = document.getElementById("showMeTheGenderMale")
showmeGenderMale.addEventListener("click", () => {
  let showmeaGenderMale_dos =document.getElementById("showMeTheGenderMale").value;
  let printGenderMale = window.RyM.filterGenderMale(RyM,showmeaGenderMale_dos);
  document.getElementById("root").innerHTML = " ";  
  mostrarData(printGenderMale);
  });


   /*________________________FILTRAR HOMBRES__________________________________*/

const showmeGenderUnknow = document.getElementById("showMeTheGenderunknown")
showmeGenderUnknow.addEventListener("click", () => {
  let showmeaGenderunknown_dos =document.getElementById("showMeTheGenderunknown").value;
  let printGenderUnknown = window.RyM.filterGenderUnknown(RyM,showmeaGenderunknown_dos);
  document.getElementById("root").innerHTML = " ";  
  mostrarData(printGenderUnknown);
  });