function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros){
    console.log(numero)
  }
}

conta("+", 0, 20, 30, 40, 50);

//Interessante: quando colocado:
// let numero IN numeros: ele exibe os índices
// let numero OF numeros: ele exibe os valores

function contaDois(operador, acumulador, ...numeros) {
  for(let numero in numeros){
    console.log(numero)
  }
}

// contaDois("+", 0, 20, 30, 40, 50);