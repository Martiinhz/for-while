let naturalez = parseInt(prompt("ingrese hasta donde quiere ver los numeros naturalez"));

let contador = 0;
let acomulador = 0;

while (contador <= naturalez) {
    acomulador = acomulador + contador;
    contador = contador + 1;
}
console.log("son",acomulador);