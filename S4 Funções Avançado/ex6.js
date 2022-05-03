function criaMultiplicador(multiplicador) {
  //multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

//duplica, triplica e quadriplica são funções closures

console.log(duplica(7));
