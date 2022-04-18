const elementos = [
  { tag: "p", texto: "Elemento parágrafo" },
  { tag: "div", texto: "Elemento div" },
  { tag: "footer", texto: "Elemento footer" },
  { tag: "section", texto: "Elemento section" },
];

const container = document.querySelector(".container")
const div = document.createElement("div")

for (let i = 0; i < elementos.length; i++){
  let {tag, texto} = elementos[i] 
  let tagCriada = document.createElement(tag)
  tagCriada.innerText = texto 
  div.appendChild(tagCriada)
}

container.appendChild(div)































// I am new here this is my first attempt and 
// it is very easy.Just make a new empty list and 
// loop through the numbers you give to the function 
// and 2 ** num ( numbers you are passing in the function ) 
// with two and then return sum with the new list




























//selecionar a classe
//criar a div
// desestruturação + i do loop
// criar elemento tag
//criação do elemento no dom
// append a tag criada na div
//append a div no container






















/*
  No lugar de:
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto

  poderia ser:
    let textoCriado = document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)
*/