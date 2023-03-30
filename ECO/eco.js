let letra = prompt("ingrese que letra quiere que se repita");
let repetir = parseFloat(prompt("ingres cuantas veces quiere que se repita"));
let contador = 0;
let acomuladora = "";

while (contador <= repetir) {
    console.log(acomuladora);
    acomuladora += letra
    contador++;
    
}
console.log(acomuladora);