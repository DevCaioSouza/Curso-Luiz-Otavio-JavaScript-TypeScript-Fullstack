enum Cores4 {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

enum Cores4 {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

function escolhaACor(cor: Cores4): void {
  console.log(Cores4[cor]);
}

escolhaACor(Cores4.ROXO);
