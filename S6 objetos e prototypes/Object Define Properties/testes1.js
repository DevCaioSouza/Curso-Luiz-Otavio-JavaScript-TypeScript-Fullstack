function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, //valor
    writable: false, //permite ou nega alteração de valor
    configurable: true, //configurável
  });

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, //valor
    writable: true, //permite ou nega alteração de valor
    configurable: true, //configurável
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 500000;
delete p1.estoque;
console.log(p1);

const pessoa = {
  nome: "Caio",
  sobrenome: "Souza",
};

const chave = 'nome'
console.log(pessoa[chave], pessoa['sobrenome'])
