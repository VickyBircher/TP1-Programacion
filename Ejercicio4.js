/*
PSEUDOCÓDIGO:
var numero = 5;
var cotador = 1;
var resultado = 0;

repetir (9){
resultado = numero * contador;
print <numero>+"x"+<contador>+"="+<resultado>
contador = contador + 1; 
}
*/

//CÓDIGO:
var numero = 7;
var resultado = 0;

for (i = 1; i <= 10; i++) {
  resultado = numero * i;
  console.log(numero + "x" + i + "=" + resultado);
}
