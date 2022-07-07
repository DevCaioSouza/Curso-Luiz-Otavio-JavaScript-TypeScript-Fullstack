type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;
const pessoa4: Pessoa = {
  nome: 'Daniel',
  sobrenome: 'Lambisgoio',
  idade: 30,
};

console.log(pessoa4);

//Module Mode
export { pessoa4 };
