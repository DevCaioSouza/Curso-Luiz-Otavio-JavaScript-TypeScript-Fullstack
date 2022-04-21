//Union types é pra quando vc quer ter mais de um tipo

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

//O que a função pede: Se os dois forem number, retorne a soma

// Lógica: se um dos dois for uma string, haverá concatenação
// e não conta

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
