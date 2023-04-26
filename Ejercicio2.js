/*
PSEUDOCÓDIGO:
var cateto1 = 4;
var cateto2 = 4;
var cateto3 = 4;

if (cateto1 != cateto2 y cateto1 != cateto3) {
  print "El triangulo es escaleno";
}else if (cateto1 == cateto2 y cateto2 == cateto3) {
  print "El triangulo es equilatero";}
else {
  print "el triangulo es isóceles";
}
*/

//CÓDIGO:
var cateto1 = 4;
var cateto2 = 4;
var cateto3 = 4;

if (cateto1 != cateto2 && cateto1 != cateto3) {
  console.log("El triangulo es escaleno");
} else if (cateto1 == cateto2 && cateto2 == cateto3) {
  console.log("El triangulo es equilatero");
} else {
  console.log("el triangulo es isóceles");
}
