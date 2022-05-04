function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

//O Closure pode ser alterado de função pra função
const funcao = retornaFuncao("Caio");
const funcaoDois = retornaFuncao("João");
console.dir(funcao);
console.dir(funcaoDois);
