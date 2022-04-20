const objectA: {
  readonly chaveA: string; //a chaveA não pode mais ser alterada
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectA.chaveB = 'Outro valor';

console.log(objectA);
