export class Empresa {
  public readonly nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

// const empresa1 = new Empresa('Google');
// console.log(empresa1);
// console.log(empresa1.nome);

export class Cerveja {
  public readonly fabricante: string;
  public readonly tipo: string;
  public readonly ibu: number;

  constructor(fabricante: string, tipo: string, ibu: number) {
    this.fabricante = fabricante;
    this.tipo = tipo;
    this.ibu = ibu;
  }
}

const brejinha = new Cerveja('Eisenbahn', 'Pale Ale', 22);
console.log(brejinha);
