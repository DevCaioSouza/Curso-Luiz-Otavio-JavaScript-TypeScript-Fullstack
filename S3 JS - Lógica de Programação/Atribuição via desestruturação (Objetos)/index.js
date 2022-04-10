const pessoa = {
  nome: 'Caio',
  sobrenome: 'Souza',
  idade: 34,
  endereço: {
    rua: 'Av. Brasil',
    numero: 320
  }
}

//atribuição via desestruturação
//a variável "nome" tem o mesmo nome da chave que se está buscando

//     EXTRAIA ESSAS CHAVES      DESSE OBJETO  
const { endereço: {rua, numero}, endereço } = pessoa;
console.log(rua, numero, endereço)