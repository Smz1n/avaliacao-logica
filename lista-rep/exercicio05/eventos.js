const array = [];

let i = 0;
// leitura
while (i < 10) {
  //if(numero == 0) break

  array.push(Math.ceil(Math.random(-100, 100)*100));
  i++;
}

console.log(array);

let quantidadePares = 0;
let quantidadeImpares = 0;
let somaPares = 0;

for (let index = 0; index < array.length; index++) {
  let valorVez = array[index];

  if (valorVez % 2 == 0) {
    quantidadePares++;
    somaPares = somaPares + array[index];
  } else {
    quantidadeImpares++;
  }
}

console.log(quantidadePares);
console.log(quantidadeImpares);

console.log(somaPares / quantidadePares);