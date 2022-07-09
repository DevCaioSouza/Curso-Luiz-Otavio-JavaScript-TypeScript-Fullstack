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

//utilizamos o termo 'super' para ter acesso a superclasse
export class Aluno extends Pessoa {
  sala: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }
  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + ' Heyyyy';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Dados do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Alcindo', 'Oliveira', 30, '294.256.255.82');
const aluno = new Aluno('Alcindo', 'Oliveira', 30, '294.256.255.82', '0001');
const cliente = new Cliente('Alcindo', 'Oliveira', 30, '294.256.255.82');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
