const produto = {nome: 'Caneca', preco: 1.8};
Object.freeze(produto)

produto.nome = 'Outro nome do produto'

console.log(produto.nome)