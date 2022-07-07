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
    return this.nome + '' + this.sobrenome;
  }
}
