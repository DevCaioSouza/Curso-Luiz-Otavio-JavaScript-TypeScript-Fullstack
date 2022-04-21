let x = 10; // eslint-disable-line
x = 0b0101;
const y = 10;
const a = 100 as const;

const pessoa = {
  nome: 'Caio',
  sobrenome: 'Souza',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor(''));

// Module mode
export default 1;
