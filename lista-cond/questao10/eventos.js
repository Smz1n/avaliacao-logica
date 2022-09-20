let altura = prompt('digite sua altura (em metros)');
let peso = prompt('digite seu peso');
let imc = peso/Math.pow(altura,2)

if (imc < 18.5){
    document.write('seu imc é ', imc,'  vc esta abaixo do peso')
}
if (imc <= 18.5 && imc <= 25 ){
    document.write('seu imc é ', imc , '  vc esta peso normal')
}
if (imc <= 25 && imc <= 30 ){
    document.write('seu imc é ', imc , '  vc esta acima do peso')
}
if (imc <= 30){
    document.write('seu imc é ', imc , '  vc esta obeso')
}
