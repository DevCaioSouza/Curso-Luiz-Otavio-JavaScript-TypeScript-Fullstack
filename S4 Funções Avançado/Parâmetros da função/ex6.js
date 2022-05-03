//O REST OPERATOR SEMPRE PRECISA SER O ÚLTIMO PARÂMETRO FORMAL DA FUNÇÃO

function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
}

conta("+", 0, 20, 30, 40, 50);
