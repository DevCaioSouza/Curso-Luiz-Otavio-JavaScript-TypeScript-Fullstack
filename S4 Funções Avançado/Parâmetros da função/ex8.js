function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    acumulador += numero;
  }
  console.log(acumulador);
}

// conta("+", 0, 20, 30, 40, 50);
//--------------------------------------------------------------
function contasMultiplas(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}

// contasMultiplas("+", 3, 20, 30, 40, 50);
//--------------------------------------------------------------

const functionExpression = function (operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};

functionExpression("+", 3, 20, 30, 40, 50);
