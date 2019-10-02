window.RyM={

  /*___________________________estadoVIVOS_____________________________________*/

filterStatusAlive: (RyM) => { // Con la funcion estoy llamando a mi data RyM y
  const filterSa = RyM.filter(element =>{  //creo una variable para que me llame a mi variable RyM, filtree 
    return element.status.includes("Alive") // Ahora retorno para que filtre mi data y acceda a status y con includes a "Alive".
  });
  return filterSa; 
 
},


/*___________________________estadoMUERTOS_____________________________________*/

filterStatusDead: (RyM) => {
  const filterDead = RyM.filter(element => { 
  return element.status.includes("Dead") // Ahora creo una variable para que filtre mi data y acceda a "Alive".
});
  return filterDead;
 
},

/*___________________________estadoDESCONOCIDO_____________________________________*/


filterStatusUnknown: (RyM) => {
  const filterUnknow = RyM.filter(element => { 
  return element.status.includes("unknown") // Ahora creo una variable para que filtre mi data y acceda a "Alive".
});
  return filterUnknow;
 
},



};