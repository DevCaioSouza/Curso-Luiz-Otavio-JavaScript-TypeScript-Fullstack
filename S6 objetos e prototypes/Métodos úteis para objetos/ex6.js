const produto = {nome: 'Caneca', preco: 1.8};

Object.defineProperty(produto, 'nome', {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 'Outras coisitas'
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))



