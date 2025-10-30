/* Função sem o uso do Pow.
function elevarPontecia(base, expoente){
    return base ** expoente;
}

console.log(elevarPontecia(2,4 ))*/

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

console.log(elevarPotencia(4, 2));

// Math Pow: Ela retorna o valor de base elevado à potência de expoente.