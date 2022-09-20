/*9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
calcule seu peso ideal, utilizando as seguintes fórmulas*/


let alturaUsuario = prompt("digite sua altura (em metros)");
let sexoUsuario = prompt('digite seu sexo');

if(alturaUsuario&&sexoUsuario){
    if(sexoUsuario==='Masculino'){
        console.log((72.7*alturaUsuario) - 58)
    }else {
        console.log((62.1*alturaUsuario) -44.7)
    }
    
}

