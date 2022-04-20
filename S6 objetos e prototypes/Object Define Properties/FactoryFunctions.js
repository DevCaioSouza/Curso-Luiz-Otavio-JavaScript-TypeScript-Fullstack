// Factory Function / Constructor Functions / Classes


//Factory Function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa('Caio', 'Souza')
console.log(p1.nomeCompleto())
