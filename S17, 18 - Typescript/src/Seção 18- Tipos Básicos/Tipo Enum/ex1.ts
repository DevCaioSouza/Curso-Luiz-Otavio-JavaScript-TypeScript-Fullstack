// Estrutura de dados não ordenada
// Geralmente usada quando temos mais de uma opção pra fazer algo

// por ex: suponha q temos um esquema de cores
// e um código pra cada uma dessas cores. Podemos usar essa
// Estrutura de dados 'enum' para criar esses códigos

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

console.log(Cores.VERMELHO);
console.log(Cores[0]);
