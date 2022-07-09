//yworks.com/yed-live
//representar modificadores de acesso:
// + para public, - para private e # protected

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

//Aqui temos Herança. Simplesmente classes herdando
//Características da "super" classe (classe parent)
export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Dados do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Dados do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Alcindo', 'Oliveira', 30, '294.256.255.82');
const aluno = new Aluno('Alcindo', 'Oliveira', 30, '294.256.255.82');
const cliente = new Cliente('Alcindo', 'Oliveira', 30, '294.256.255.82');

//Aqui temos o que é chamado de Polimorfismo, ou seja,
//Um único método sendo retornado de diferentes formas
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
