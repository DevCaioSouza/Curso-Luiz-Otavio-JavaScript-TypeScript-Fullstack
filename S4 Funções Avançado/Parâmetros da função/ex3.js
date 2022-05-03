function funcao(a, b) {
  b = b || 0;
  console.log(a + b);
}
// funcao(2);

function funcaoDois(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcaoDois(2, 10)
