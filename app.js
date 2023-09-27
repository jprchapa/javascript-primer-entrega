/* Utilizacion de condicional :
-Se aprueba con 4.
-Si aprueba los 2 parciales y el promedio es 6 o mayor se promociona.
-Si aprueba los dos parciales y el promedio es menor a 6 va a un final.
-Si desaprueba uno de los 2 parciales Recursa. */

alert("Ingrese las notas del primer y segundo parcial para saber si promociono, va a final o recursa.")
let notaPrimerParcial = prompt("Ingresa la nota del primer parcial")
let notaSegundoParcial = prompt("Ingresa la nota del segundo parcial")
let promedio = (parseInt(notaPrimerParcial) + parseInt(notaSegundoParcial))/2 



if  (notaPrimerParcial > 3 && notaSegundoParcial > 3 && promedio > 5){
    alert("Promociona")    
} else if (notaPrimerParcial > 3 && notaSegundoParcial > 3 && promedio > 3){
    alert("Va a Final")
} else { alert("Recursa") }

 


 /*Utilizacion de ciclos : sistema de turnos que arranca a las 8am y termina a las 16pm, con un turno por hora */

alert("Inicio Sistema de Turno, Ingrese su nombre para registrarse en el turno")
const horarioDeInicio = 8
const horarioDeFinalizacion = 16

let turno = 1

for (let hora = horarioDeInicio; hora < horarioDeFinalizacion; hora+=1) {
  let nombre = prompt(`Por favor, ingrese su nombre para el turno de las ${hora}:00:`)

  if (nombre) {
    console.log(`Turno ${turno}: ${nombre} - Horario: ${hora}:00`)
    turno++
  } else {
    alert("Nombre inválido. Intente de nuevo.")
  }
}

console.log("Horario de atención finalizado.")