function semRetorno(...args: string[]):void{
  console.log(args.join(', '))
}

const pessoinha = {
  nome: 'Caio',
  sobrenome: 'Souza',

  exibirNome(): void{
    console.log(this.nome+ ' ' + this.sobrenome)
  }
};

semRetorno('Caio', 'Souza')

pessoinha.exibirNome();


export{pessoinha}
