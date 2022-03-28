
//Factory Functions / Constructor Functions / Classes (syntax sugar)

//Factory Functions
function criaPessoa(nome, sobrenome){
  return {
    nome,
    sobrenome,
    nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio')

console.log(p1.nomeCompleto())

//Constructor Functions
