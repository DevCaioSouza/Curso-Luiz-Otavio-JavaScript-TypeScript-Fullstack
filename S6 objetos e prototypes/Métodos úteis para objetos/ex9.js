const produto = {nome: 'Caneca', preco: 1.8, material: 'porcelana'};

// Fazendo destructuring
for(let [key, value] of Object.entries(produto)){
  console.log(key, value)
}