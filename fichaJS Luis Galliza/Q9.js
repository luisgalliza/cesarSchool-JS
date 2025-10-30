/* Função sem o uso do SQRT.
function calcularRaizQuadrada(numero) {
  return Math.pow(numero, 0.5);
}

console.log(calcularRaizQuadrada(25));
console.log(calcularRaizQuadrada(1));
console.log(calcularRaizQuadrada(6));*/

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

console.log(calcularRaizQuadrada(25));
console.log(calcularRaizQuadrada(1));
console.log(calcularRaizQuadrada(6));

// Math: é uma biblioteca nativa do JavaScript com funções matemáticas.
// Math.sqrt(x) retorna a raiz quadrada de X.