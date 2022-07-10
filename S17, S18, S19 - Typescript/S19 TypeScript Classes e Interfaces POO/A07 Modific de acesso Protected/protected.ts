export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

//Protected pode ser acessado tanto na super como nas sub classes
//Praticamente igual ao private, mas com acesso nas sub classes

export class Padoca extends Empresa {
  constructor() {
    super('Padoca do Zé', 'CNPJ: 12.528.409/0001-24');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Padoca();
const colaborador1 = new Colaborador('Andre', 'Meira');
const colaborador2 = new Colaborador('José', 'Alves');
const colaborador3 = new Colaborador('Djony', 'Almeida');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  nome: 'Leonardo',
  sobrenome: 'Vieira',
});
empresa1.popColaborador();

console.log(empresa1);
