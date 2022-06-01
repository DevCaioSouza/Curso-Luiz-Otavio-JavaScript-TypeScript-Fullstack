/*
Object.values
Object.entries
Object.assign(destino, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

---- Já vimos ----
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = {...produto, material: 'porcelana'};


console.log(outraCoisa)