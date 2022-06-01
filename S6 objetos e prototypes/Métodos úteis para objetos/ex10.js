
const produto = {nome: 'Caneca', preco: 1.8, material: 'porcelana'};


for(let value of Object.entries(produto)){
  console.log(value[0], value[1])
}