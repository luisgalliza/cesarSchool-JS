function dividir(a, b) {
  return a / b;
}

function calcularMedia(nota1, nota2, nota3, nota4) {
  const soma = nota1 + nota2 + nota3 + nota4;
  const media = dividir(soma, 4);
  return media;
}

console.log(calcularMedia(2, 5, 1, 6));