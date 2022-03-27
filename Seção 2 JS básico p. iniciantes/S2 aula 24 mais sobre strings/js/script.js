                 01234567  
let umaString = 'Um Texto'
console.log('S1')
console.log(umaString.concat(' muito', ' bem', ' escrito'));
console.log(umaString + ' em','um','lindo','dia');
console.log(`${umaString} em um lindo dia`);
console.log("\n")


//Ache 'Um', começando do índice 3  
console.log('S2')
console.log(umaString.indexOf('o', 3))
console.log("\n")


// A mesma coisa do indexOf, porém começando a contar do fim da string
console.log('S3')
console.log(umaString.lastIndexOf('o'))
console.log(umaString.lastIndexOf('U', 5))
console.log("\n")


// Essa parte do lastIndexOf não ficou bem explicada,
// visto que o número não fez diferença no resultado
console.log('S4')
console.log(umaString.match(/[a-z]/g))
console.log(umaString.match(/[a-z]/))
console.log(umaString.search(/[a-z]/))
console.log(umaString.search(/x/))
console.log("\n")
// Alterando palavras com .replace:
console.log('S5')
console.log(umaString.replace('Um', 'Outra'))
console.log(umaString.replace(/Um/, 'Outra'))

console.log("\n")
let outraString = "O rato roeu a roupa do rei de roma.";
console.log('S6')
console.log(outraString.replace(/r/, '#'))
console.log(outraString.replace(/r/g, '#')) 

// Cerquilha é o nome desse negócio #
console.log("\n")
console.log('S7')
console.log(outraString.slice(2, 6));
console.log(outraString.slice(32));
console.log(outraString.slice(-5)); // começa a contar do final
console.log(outraString.slice(-5, outraString.length - 1))

console.log("\n")
console.log('S8')

console.log(outraString.split(' '))
console.log(outraString.split('r'))
console.log(outraString.split(' ', 3))

console.log("\n")
console.log('S9')
console.log(outraString.toUpperCase())
console.log(outraString.toLowerCase())