function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: true, //configurável
    //o get está substituindo o "value"
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }

      estoquePrivado = valor;
    },
  });
}

function criaProduto() {
  return {
    get nome() {
      return this.nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1)
// p1.estoque = 'dsadsa';
// console.log(p1.estoque)
const p2 = criaProduto("Camiseta");
console.log(p2);
