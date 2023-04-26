/*
PSEUDOCÓDIGO:
var suma = 0;
var contador = 1;

repetir (100){
contador = contador + 1;
suma = suma + contador;
}
print "El resultado es: " + <suma>
*/

//CÓDIGO:
var suma = 0;
var contador = 0;

for (i = 0; i <= 100; i++) {
  suma += i;
}
console.log("El resultado es: " + suma);
