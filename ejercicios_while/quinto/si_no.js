let programa = prompt("¿Deseas salir? S/N");
let salir = false;

while(!salir) {

  if(programa == "S") {
    salir = true;
    alert("Adios");
    
  } else if(programa == "N") {
    alert("El programa sigue en curso");

  } else {
    alert("Error , por favor responde con 'S' o 'N'");
  }
}