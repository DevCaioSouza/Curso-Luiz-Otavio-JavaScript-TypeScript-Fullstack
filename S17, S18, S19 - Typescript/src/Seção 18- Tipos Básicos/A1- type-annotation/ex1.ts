/* eslint-disable */
// O comando acima desabilita o eslint

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Caio';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['a','b','c'];
let arrayDeStrings2: string[] = ['a','b','c'];

// Objetos

//o que indica que está se formando um tipo é o ":"
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: "Caio",
}

//Para criar seus próprios tipos, só iniciar com letra maiúscula
//os tipos da linguagem se iniciam com letra minúscula

// Funções
function soma(x:number, y:number){
  return x + y;
}

const soma2: (x:number, y:number) => number = (x, y) => x + y;

