/* eslint-disable prettier/prettier */
export class Carros {
  constructor(
    public modelo: string,
    public ano: number,
    public cor: string,
    public placa: string,
  ) {}

  getModelo(): string {
    return this.modelo;
  }

  getAno(): number {
    return this.ano;
  }

  getCor(): string {
    return this.cor;
  }

  getPlaca(): string {
    return this.placa;
  }

  descricaoCompleta(): string {
    return 'Carro modelo ' + this.modelo + ' de cor' + this.cor + ' fabricado em ' + this.ano;
  }
}

export class Populares extends Carros {
  descricaoCompleta(): string {
    return 'Dados do veículo: ' + 'Carro modelo ' + this.modelo + ' de cor ' + this.cor + ' modelo ' + this.ano;
  }
}

export class Esportivos extends Carros {
  descricaoCompleta(): string {
    return 'Dados do veículo: ' + 'Carro modelo ' + this.modelo + ' de cor ' + this.cor + ' fabricado em ' + this.ano
  }
}

const corsa = new Populares('Corsa', 2008, 'Preto', 'ZIK-4920');
const palio = new Populares('Palio', 2005, 'Prata', 'UHW-2901');
const bmw = new Esportivos('BMW-X6', 2014, 'Branca', 'HSN-0182')

console.log(corsa.descricaoCompleta());
console.log(palio.descricaoCompleta());
console.log(bmw.descricaoCompleta())
