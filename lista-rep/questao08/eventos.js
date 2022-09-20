/*8) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em 
P.A. contendo 10 valores. */

let valorInicial = 0;
let R = 7;

for(let n = 0; n < 10; n++) {
    valorInicial += R;
    document.write(valorInicial)
}