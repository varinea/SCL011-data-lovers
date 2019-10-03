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
  return element.status.includes("Dead") 
});
  return filterDead;
 
},

/*___________________________estadoDESCONOCIDO_____________________________________*/


filterStatusUnknown: (RyM) => {
  const filterUnknow = RyM.filter(element => { 
  return element.status.includes("unknown") 
});
  return filterUnknow;
 
},


/*___________________________Genero Femenino_____________________________________*/


filterGenderFem: (RyM) => {
  const filterFerm = RyM.filter(element => { 
  return element.gender.includes("Female") 
});

  return filterFerm;
 
},

/*___________________________Genero Masculino_____________________________________*/


filterGenderMale: (RyM) => {
  const filterMale = RyM.filter(element => { 
  return element.gender.includes("Male") 
});

  return filterMale;
 
},

/*___________________________Genero Desconocido_____________________________________*/

filterGenderUnknown: (RyM) => {
  const filterUnknown = RyM.filter(element => { 
  return element.gender.includes("unknown") 
});

  return filterUnknown;
 
},



};