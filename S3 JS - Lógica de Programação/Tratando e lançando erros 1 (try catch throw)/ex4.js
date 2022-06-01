function soma(x, y){
  if (typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('x e y precisam ser do tipo number')
  }

  return x + y;
}

try {
  console.log(soma(2 , 3))
  console.log(soma('a', 3))
} catch(err){
  // console.log(err)
  console.log('Erro que faça sentido pro usuário')
}