// A Tupla é um array de tamanho fixo
const dadosCliente1: [number, string] = [1, 'Caio'];
// Pode alterar o índice desde que seja do mesmo tipo
dadosCliente1[0] = 3;

//nesse caso aqui temos um índice opcional
const dadosCliente2: [number, string, string?] = [25, 'Marlon'];

console.log(dadosCliente2);
console.log(dadosCliente1);

//readonly quer dizer que não pode ser modificado
const array1: readonly string[] = ['Caio', 'Souza'];
const array2: ReadonlyArray<string> = ['Caio', 'Souza'];

console.log(array1);
console.log(array2);
