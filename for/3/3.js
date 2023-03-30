let impar = parseInt(prompt("ingrese hasta donde quiere ver los numeros impares"));

for (let contador = 0; contador <= impar ; contador++ ) {
    
if (contador % 2 != 0) {
    console.log("los numeros impares son",contador);
}
    
}