const pessoa1 = new Object();

pessoa1.nome = "Caio";
pessoa1.sobrenome = "Souza";
pessoa1.idade = 30;

pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome`;
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};



// for (let chave in pessoa1){
//   console.log(chave)
// }

const dataTest = new Date().getFullYear()
console.log(dataTest)