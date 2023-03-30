let impar = parseInt(prompt("ingrese el numero final"));
let contador  = 0;
let incremento = 1;

while (incremento<=impar) {
    contador++;
    if (contador % 2 != 0) {
        console.log("numeros impares de 1 a",impar,"son",contador);
    }
        incremento++
}
