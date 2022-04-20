// Constructor Functions

function Pessoa(nome, sobrenome) {
  this.name = nome;
  this.surname = sobrenome;
}
// name e sobrename foram usados pra testar qual dos elementos
// é que se transformam nas chaves do objeto Pessoa

// 'new' cria um objeto vazio {}
// e vai pegar a palavra 'this'
// {}  <- this
const p1 = new Pessoa("Caio", "Souza");
console.log(p1);

const p2 = new Pessoa();
p2.name = 'Will'
p2.surname = 'Smith'

console.log(p2)
