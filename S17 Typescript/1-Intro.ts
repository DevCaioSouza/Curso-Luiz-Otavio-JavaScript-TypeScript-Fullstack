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

//ADICIONA NOVOS RECURSOS AO JAVASCRIPT

interface TemNome{
  nome: string;
}

interface TemSobrenome{
  sobrenome: string;
}

class Aluno implements TemNome, TemSobrenome{
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public readonly idade: number,
  ){}
}

const aluno = new Aluno('Luiz', 'Otávio', 30);
console.log(aluno);

function greet(name){
  return `Olá ${name}`
}

export default Aluno;


console.log(greet('Caio Souza'))

//ADICIONA NOVOS RECURSOS AO JAVASCRIPT
