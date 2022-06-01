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

const caneca = Object.assign({}, produto)
//Assign: tudo que está em produto está sendo enviado para {}

console.log(caneca)