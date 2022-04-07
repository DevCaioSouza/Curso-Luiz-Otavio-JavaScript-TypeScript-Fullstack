//declaração de função (Function Hoisting / elevação)

falaOi();

function falaOi() {
  console.log("Oie");
}

// Funções são First-class Objects (Objetos de primeira classe)

//Function Expression

const souUmDado = function () {
  console.log("Sou um dado.");
};

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado);

// Arrow Function

const funcaoArrow = () => {
  console.log("Sou uma arrow function.");
};

funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};

obj.falar();
