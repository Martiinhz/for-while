let numeros = 1;
let contador = 0;
let suma = 0;

while (numeros != 0) {
    numeros = parseInt(prompt("ingrese un numero , (si ingresa 0 finalizaremos)"))
    if (numeros != 0) {
        suma += numeros;
        contador++;
    }
}
if (contador == 0) {
    console.log("error");

}else{

console.log("El promedio de los numeros ingresados son:",suma / contador);
}
