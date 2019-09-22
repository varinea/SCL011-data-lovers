filterRyM = {character: (RyM) => {
  //(character_RyM) conecto con filter para poder 

  let resultCharacter; // Creo la variable para que recorra for.
  for (let i = 0; i < RyM.length; i++) { //For recorrer       para concatenar ``

  
    resultCharacter +=
    `   
    <div class="textRyM2"> 
      <h2>CONOCE A TODOS LOS PERSONAJES</h2>
      <h1>de Rick and Morty</h1>
      <br><br>
      </div>

      <div class="liItem">
      <br><br><br><br><br><br><br><br><br>
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

  };
}
};

filterRyM = filterRyM;