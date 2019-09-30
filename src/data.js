window.data={

  /*___________________________VIVOS_____________________________________*/

filterStatusAlive: (RyM) => { //Con la funcion estoy llamando a mi data RyM
  const filterSa = RyM.filter(element =>(element.status==="Alive") ); //Ahora creo una variable para que filtre mi data y acceda a "Alive"
    console.log(filterSa);
  return filterSa; //y retornara todo en    
 
},


/*___________________________MUERTOS_____________________________________*/

filterStatusDead: (RyM) => {
  const filterDead = RyM.filter(element =>(element.status==="Dead") );
    console.log(filterDead);
  return filterDead;
 
}

}