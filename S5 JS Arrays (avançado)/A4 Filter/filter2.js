

//Lembrando: Filter retorna um novo array, ou seja, 
//nao altera o  objeto original


const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome:'Eduardo', idade: 55},
  {nome:'Letícia', idade: 19},
  {nome:'Rosana', idade: 32 },
  {nome:'Wallace', idade: 47},
]
//Retorne as pessoas com 5 letras ou mais no nome
// const maisDeCinco = pessoas.filter((x) => x.nome.length >= 5)

// console.log(maisDeCinco)


//Retorne as pessoas com + de 50 anos
// const maisDeCinquenta = pessoas.filter( y => y.idade > 50 )

// console.log(maisDeCinquenta)


//Retorne as pessoas cujo nome termina com a letra "A"

const terminaComA = pessoas.filter( z => z.nome.endsWith('a') )

console.log(terminaComA)