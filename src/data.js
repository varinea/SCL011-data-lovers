filterRyM = {character: (RyM) => {
  //(character_RyM) llamo a main para la data.

  let resultCharacter; // Creo la variable donde recorrera for.
  for (let i = 0; i < RyM.length; i++) { //For recorrera la data desde 0 leyendola toda y llendo una por una. 
    // para concatenar ``

    resultCharacter += // a la variable le digo que sigue siendo igual y ademas es todo lo que agregare
     //concateno y tomo los datos que necesito de la data
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
    document.getElementById("root").innerHTML = resultCharacter;  // ahora llamo al id root de html y con innerHTML hago que se lea mi variable.

  };
}
};

