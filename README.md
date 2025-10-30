# Atividade-JS Cesar School | Luis Galliza

## Este repositório contém as resoluções dos exercícios de JavaScript.
### obs:  No VsCode eu fiz a questão 10, só que na hora de passar para o GitHub ela sumiu, então coloquei ela isolada. Caso não apareça, vou colocar aqui o código.
<br/>
10) function somar(a, b) {
  return a + b;
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {

  const cateto1AoQuadrado = elevarPotencia(cateto1, 2);
  const cateto2AoQuadrado = elevarPotencia(cateto2, 2);

  const somaDosQuadrados = somar(cateto1AoQuadrado, cateto2AoQuadrado);

  const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);

  return hipotenusa;
}

console.log(calcularHipotenusa(4, 7));
