

// Filter sempre vai retornar uma array com uma quantidade
// menor ou igual de elementos

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27]

// const maiorQDez = numeros.filter(result =>{
//   return result > 10
// })
//console.log(maiorQDez)


// Jeito mais profissional:
// Quando a fn tem só uma linha, o "return" é implícito
// const nosFiltrados = numeros.filter(result => result > 10)

// Novas possibilidades com Filter

// const nosFiltrados2 = numeros.filter((valor, indice, array)=>{
//   console.log(valor, indice, array);
//   return valor > 10
// })

// console.log(nosFiltrados2)





//Lembrando: Filter retorna um novo array, ou seja, nao altera o original

//Retorne as pessoas com 5 letras ou mais no nome
// const maisDeCinco = pessoas.filter((x) => x.nome.length >= 5)

// console.log(maisDeCinco)


//Retorne as pessoas com + de 50 anos
// const maisDeCinquenta = pessoas.filter( y => y.idade > 50 )

// console.log(maisDeCinquenta)


//Retorne as pessoas cujo nome termina com a letra "A"

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome:'Eduardo', idade: 55},
  {nome:'Letícia', idade: 19},
  {nome:'Rosana', idade: 32 },
  {nome:'Wallace', idade: 47},
]

const terminaComA = pessoas.filter( z => z.nome.endsWith('a') )

console.log(terminaComA)