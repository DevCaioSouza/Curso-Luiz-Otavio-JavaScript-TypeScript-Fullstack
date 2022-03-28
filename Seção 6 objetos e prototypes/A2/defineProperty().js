function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: false,//mostra a chave (key)
    value: estoque,
    writable: true, //Se false: o valor de estoque ñ pode ser alterado
    configurable: true //Se false, o código repetido abaixo não tem ação 
  })
  

}


// p1.estoque = 50000;
// delete p1.estoque;//writable true não anula o delete


const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))
for(let chave in p1){
  console.log(chave)
}