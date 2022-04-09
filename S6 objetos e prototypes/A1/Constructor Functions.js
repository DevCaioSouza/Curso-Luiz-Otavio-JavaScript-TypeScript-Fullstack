//Constructor Functions

// Aqui no caso "Pessoa" é o CONSTRUTOR!
function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this) //trava o objeto
  //
}

//A palavra new é necessária
//new cria um objeto vazio {}

const p1 = new Pessoa('Caio', 'Souza')

p1.nome = "Outra coisa"
console.log(p1)