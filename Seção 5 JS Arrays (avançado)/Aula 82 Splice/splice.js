//                -5       -4       -3        -2         -1
//                 0        1        2         3         4       

// nomes.splice(índice, delete, elem1, elem2, elem3);
// funcionando como pop: nomes.splice(4), ou nomes.splice(-1, 1)

// splice('x', 'y'): a partir do 'x', remova 'y' elementos
// const removidos = nomes.splice(-2, 2) 
// ou const removidos = nomes.splice(-2, Number.MAX_VALUE)
// console.log(nomes, removidos)


// Adicionando elementos com splice()

// const adicionados = nomes.splice(2, 0, 'Luiz') ;
// Luiz será adicionado no índice 2
// Nesse caso o "adicionados" retorna um array vazio
// console.log(nomes, adicionados)

//SIMULANDO O SHIFT
// const shifted = nomes.splice(0, 1)
// console.log(nomes, shifted)

//SIMULANDO O PUSH
// const pushed = nomes.splice(nomes.length, 0, 'pushedName')
// console.log(nomes)

// SIMULANDO O UNSHIFT

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

const unshifted = nomes.splice(0, 0, 'unshiftedName')
console.log(nomes, unshifted)
