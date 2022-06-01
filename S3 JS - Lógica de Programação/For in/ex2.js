const pessoa = {
  nome: 'Caio',
  sobrenome: 'Souza',
  idade: '34'
}

for (let key in pessoa){
  // console.log(key)
}

// Assim pegamos os valores
for (let key in pessoa){
  // console.log(pessoa[key])
}

// Assim exibimos chaves e valores do objeto
for (let key in pessoa){
  console.log(key+':' ,pessoa[key])
}
