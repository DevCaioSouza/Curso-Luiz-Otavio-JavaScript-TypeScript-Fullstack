export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  public readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', 'nd-2079');
console.log(empresa1);

//Classes são praticamente moldes p/ criar objetos
//Temos tipos de classes no typescript

//public: pode ser lido fora da classe

//public não é necessário. Se não tiver nenhuma atribuição diferente
//como por ex private ou protected, o public será inferido

//Em alguns casos o public é necessário, como nesse caso da class
//Colaborador

//readonly: não pode ser alterado
