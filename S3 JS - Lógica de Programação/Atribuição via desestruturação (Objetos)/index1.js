const pessoa = {
  nome: 'Caio',
  sobrenome: 'Souza',
  idade: 34,
  endereço: {
    // rua: 'Av. Brasil',
    numero: 320
  }
}

const { nome, ...rest} = pessoa;
console.log(rest)