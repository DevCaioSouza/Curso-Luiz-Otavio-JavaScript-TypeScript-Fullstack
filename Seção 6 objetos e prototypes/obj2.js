const pessoa1 = new Object();
pessoa1.nome = 'Luiz';

pessoa1.sobrenome = 'Otávio'

// console.log(pessoa1) // {nome: 'Luiz', sobrenome: 'Otávio'}

const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

// console.log(pessoa2) // {nome: 'Luiz', sobrenome: 'Otávio'}

// delete pessoa1.nome; // Apagar chave de um objeto


pessoa1.falarNome = function(){
  console.log(`${this.nome} está falando seu nome.`)
};

// pessoa1.falarNome() //Luiz está falando seu nome.


pessoa1.idade = 30;
pessoa1.getDataNascimento = function(){
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade
}


// console.log(pessoa1.getDataNascimento())

for (let key in pessoa1){
  console.log(pessoa1[key])
}
