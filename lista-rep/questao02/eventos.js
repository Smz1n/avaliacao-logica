/*2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar : 
a. A menor altura do grupo; 
b. A maior altura do grupo;*/






let i, altura, sexo, maiorAltura = 0, menorAltura = 0, Mulher = 0, Homem = 0, mediaMulher = 0, contaMulher = 0, contaHomem = 0;

    for(i = 1 ;i <= 8; i++) {  // coloquei so até 8 pq se n demoraria mt tempo para testar
        altura = parseInt(prompt("Informe sua altura["+i+"]:"));
        sexo = prompt("Sexo: M ou F:");
    
        if(i == 1) {
            menorAltura = altura;
        }
       if(i == 1) {
            menorAltura = altura;
        } 
        if(altura > maiorAltura) { 
            maiorAltura = altura;
        } 
        if(altura < menorAltura) { 
            menorAltura = altura;
        } 
        if(sexo == 'F') {
            Mulher += altura;
            contaMulher++;
        } else if(sexo == 'M') {
            Homem += altura;
            contaHomem++;
        }
    }

    mediaMulher = Mulher/contaMulher;
    document.write("A maior altura é : "+maiorAltura); 
    document.write("A menor altura é : "+menorAltura);
    document.write("A média das mulheres é : "+mediaMulher);
    document.write("O número de homens é : "+contaHomem);