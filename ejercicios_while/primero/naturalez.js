let naturalez = parseInt(prompt("ingrese hasta donde quiere ver los numeros naturalez"));

let contador = 0;
let acomulador = 1;

while (contador <= naturalez) {
    acomulador = acomulador + contador;
    console.log("son",contador);
     contador = contador + 1;
}
