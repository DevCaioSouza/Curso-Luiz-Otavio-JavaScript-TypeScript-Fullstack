
//               0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

//                     rest operator  
const [um, dois, tres, ...resto] = numeros;

console.log(um, dois, tres)
console.log(resto)

//quando a intenção e pegar o resto do array, é Rest
//quando a intenção é pegar dados externos e espalhar, é Spread
//o sinal (...) é o mesmo, só muda o contexto