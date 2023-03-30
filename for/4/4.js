let suma = 0;
for (let m = 0; m < 10; m ++) {
let numeros = parseFloat(prompt("ingrese 10 numeros para sacar el promedio"));
    suma += numeros;
}
let promedio = suma / 10;
console.log("el promedio de los numeros ingresados son",promedio);


