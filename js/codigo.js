function aleatorio(max,min){
    return Math.floor(Math.random()*(max-min+1)+min) 
  }

  function elegir(jugada){
      let respuesta=0
      if (jugada==1){
          respuesta="Piedra "
      }else if (jugada==2){
          respuesta="Papel "
      }else if (jugada==3){
          respuesta="Tijera "
      }else{
          respuesta="solo 1 2 3 "
      } 
      return respuesta
          }
 
      function combate(j1,j2){
        
      if (j1==j2){
          ganador="Empate "
      }else if (j1==1 && j2==3){
          ganador="gane "
      }else if (j1==2 && j2==1){
          ganador="gane "
      }else if (j1==3 && j2==2){
          ganador="gane "
      }else{
          ganador="perdiste "
      }    
      return ganador
      }

 let j=0
 let p=0
 let triunfo=0
 let perdida=0
 let ganador =""
 while (triunfo<3 && perdida<3){
  
  j=prompt("elige: Piedra 1 Papel 2 Tijera 3")
  p=aleatorio(3,1)
  
  alert("Tú jugada: "+elegir(j))
  alert("La jugada de la Pc: "+elegir(p))

 //combate
 
 
      alert("Resultado: "+combate(j,p))


      if(ganador==="gane "){
          triunfo=triunfo+1 
      }else if(ganador==="perdiste "){
          perdida=perdida+1
      }else if(ganador==="Empate "){

      }
 }       
 alert("ganaste " + triunfo + " veces. Perdiste " + perdida + " veces" )
 