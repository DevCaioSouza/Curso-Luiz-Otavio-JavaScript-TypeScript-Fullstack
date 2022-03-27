// SLICE: SELECIONA OS ELEMENTOS. (O ÚLTIMO ÍNDICE FICA DE FORA)
  const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
  //dessa forma nós mostramos os elementos retirados
  const novoSlice = nomes.slice(1,3) // O ÍNDICE 3 FICA DE FORA
  // REPARE QUE O SLICE NÃO ALTERA O ARRAY ORIGINAL
  console.log(novoSlice)
  console.log(nomes)