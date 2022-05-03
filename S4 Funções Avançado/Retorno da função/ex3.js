function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa("Caio", "Souza");

// console.log(p1);

function criaCarro(modelo, ano, cor) {
  return { modelo, ano, cor };
}

const c1 = criaCarro('Camaro', 2014, 'Amarelo')

console.log(c1)