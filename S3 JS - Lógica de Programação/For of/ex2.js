const nomes = ['Caio', 'Souza', 'Camargo']

for (let nome of nomes){
  // console.log(nome)
}

// Exibindo valores e índices
nomes.forEach(function(el, ind){
  // console.log(el, ind)
})

// Exibindo valores, índices e array
nomes.forEach(function(el, ind, arr){
  console.log(el, ind, arr)
})

