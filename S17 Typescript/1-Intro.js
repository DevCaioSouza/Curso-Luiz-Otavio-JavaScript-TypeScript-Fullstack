/*
  ->TypeScript é um superset para o Javascript, com tipagem
estática, novos recursos e que compila Javascript puro

  => Adiciona tipagem estática ao Javascript:

  //JS puro:
  function multiplyNumbers(x, y){
    return x * y;
  }

  const result = multiplyNumbers(10, [1, 2])
  console.log(result) // NaN

  -O JS não avisa que a chamada está errada, ele só
  acusa o erro na hora que o console.log é chamado

  //TYPESCRIPT:
  function multiplyNumbers(x:number, y:number){
    return x * y;
  }
  const result = multiplyNumbers(10, [1, 2])
  console.log(result) // NaN


*/
var Aluno = /** @class */ (function () {
    function Aluno(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    return Aluno;
}());
var aluno = new Aluno('Luiz', 'Otávio', 30);
console.log(aluno);
function greet(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greet('Caio Souza'));
