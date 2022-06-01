function soma(x, y){
  if (typeof x !== 'number' || typeof y !== 'number'){
    throw('x e y precisam ser do tipo number')
  }

  return x + y;
}

console.log(soma('a', 3))