function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,//mostra a chave (key)
    value: estoque,
    writable: true, //Se false: o valor de estoque ñ pode ser alterado
    configurable: true //Se false, o código repetido abaixo não tem ação 
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true, 
      configurable: true 
    },
    preco:{
      enumerable: true,
      value: preco,
      writable: true, 
      configurable: true 
    }
  })
}

// A única diferença de defineProperty() e defineProperties()
// é que a primeira serve para um único elemento do objeto
// e a segunda pra todos os elementos do objeto

// p1.estoque = 50000;
// delete p1.estoque;//writable true não anula o delete


const p1 = new Produto('Camiseta', 20, 3)
console.log((p1))
for(let chave in p1){
  console.log(chave)
}