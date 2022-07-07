// por padrão os elementos são enumerados  0, 1, 2, 3, etc.

// Não tem problema colocar chave sem valor, caso essa chave
// apareça depois de uma que tenha valor
// Ex: VERDE tem valor 201, logo, ROSA é 202 por padrão

enum Cores2 {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores2.VERMELHO);
console.log(Cores2[0]);
console.log(Cores2[10]);
console.log(Cores2.ROXO);
