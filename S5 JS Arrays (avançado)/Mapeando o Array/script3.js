/* 
  Para Cada elemento:
  1)Retorne apenas uma string com o nome da pessoa
  2)Remova apenas a chave "nome" do objeto
  3)Adicione uma chave id em cada objeto
*/

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// (1)
const nomeString = pessoas.map((obj) => {
  return `nome: ` + obj.nome;
});

// (2)

const idades = pessoas.map((obj) => {
  delete obj.nome;
  return obj;
});

const idadesSegundoMetodo = pessoas.map((obj) => {
  return { idade: obj.idade };
});

const idadesArrowFunction = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idadesArrowFunction)