function retornaFuncao(){
  const nome = 'Caio'; // Isso aqui é o closure. Está "fechando" um escopo
  return function (){
    return nome;
  }
}

const funcao = retornaFuncao()
console.dir(funcao)

//a função anônima tem acesso ao escopo da mãe, dela própria e 
//também ao escopo global. Esse portanto é o seu escopo léxico

//Closure é a capacidade daquela função de acessar seu escopo léxico