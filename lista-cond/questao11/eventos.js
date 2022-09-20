/*11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento
1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em duas vezes, preço normal de etiqueta mais juros de 10%
*/

function aplicarPagamento(){
    let formaDePagamento = document.getElementById('formaPagamento');
    let ValorDoProduto = document.getElementById('ValorDoProduto');
    let resultado = document.getElementById('resultado');

    if(formaDePagamento.value === 'forma1'){
        resultado.innerHTML = 'valor a ser pago a vista é de R$'+ ValorDoProduto.value*0.9
    }
    if(formaDePagamento.value === 'forma2'){
        resultado.innerHTML = 'valor a ser pago a vista no cartão é de R$'+ ValorDoProduto.value*0.85
    }
    if(formaDePagamento.value === 'forma3'){
        resultado.innerHTML = 'valor a ser pago em 2x R$'+ ValorDoProduto.value/2
    }
    if(formaDePagamento.value === 'forma4'){
        resultado.innerHTML = 'valor a ser pago com juros R$'+ ((ValorDoProduto.value*1.1)/2).toFixed(2)
    }
}


