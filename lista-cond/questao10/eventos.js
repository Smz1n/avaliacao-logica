/*10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2

Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
com a tabela abaixo. */



let altura = prompt('digite sua altura (em metros)');
let peso = prompt('digite seu peso');
let imc = peso/Math.pow(altura,2)
let total = imc.toFixed(2)


if (imc < 18.5){
    document.write('seu imc é ', total,'  vc esta abaixo do peso')
}
if (imc > 18.5 && imc <= 25 ){
    document.write('seu imc é ', total , '  vc esta peso normal')
}
if (imc > 25 && imc <= 30 ){
    document.write('seu imc é ', total, '  vc esta acima do peso')
}
if (imc > 30){
    document.write('seu imc é ', total , '  vc esta obeso')
}

console.log(imc, 'este é o imc')
console.log(total, 'este é o decimal fixado')

