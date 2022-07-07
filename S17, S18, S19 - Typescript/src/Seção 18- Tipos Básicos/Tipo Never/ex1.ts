// Never quer dizer que aquilo nunca irá retornar nada
// Comumente é de dois tipos: Laço inifito ou Erro

// Pode servir pra alertar os desenvolvedores sobre algum erro

function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
