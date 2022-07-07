// Funciona como o "any", porém mais seguro

let x: unknown;

x = 100;
x = 'Caio';
x = 900;
x = 10;
const y = 800;

// com unknown, precisa haver checagem de tipos antes
// de realizar qualquer operação com a variável
if (typeof x === 'number') console.log(x + y);
