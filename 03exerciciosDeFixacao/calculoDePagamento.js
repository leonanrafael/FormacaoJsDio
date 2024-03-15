/* 
O algoritmo deve calcular o valor a ser pago por um produto com base no valor de venda e condição de pagamento escolhida pelo comprador.

Base para o calculo: 
- À vista débito recebe 10% de desconto;
- À vista dinheiro ou pix recebe 15%  de desconto;
- Em duas vezes, preço normal de etiqueta e sem juros;
- Acima de duas vezes, preço normal de etiqueta mais 10% de juros;   
*/
/*  entrada: valor do produto.
    processamento: definir o valor do produto com base na forma de pagamento.
    saida: valor do produto de acordo com a opção escolhida
*/
let precoEtiqueta = 100;
let formaDePagamento = 1;
console.log('Valor do precoEtiqueta: ' + precoEtiqueta.toFixed(2) + '\nEscolha uma das opções de pagamento:\n1 - À vista no Débito: 10% de desconto\n2 - À vista no Dinheiro/Débito: 15% de desconto\n3 - Até 2x no crédito: Preço normal do precoEtiqueta\n4 - Parcelamento acima de 2x: 10% de juros\n');

if (formaDePagamento === 1) {
    precoEtiqueta -= precoEtiqueta * (0.1);
    console.log('Opção de pagamento escolhida: Débito à vista\nTotal R$: ' + precoEtiqueta.toFixed(2));
} else if (formaDePagamento === 2) {
    precoEtiqueta -= precoEtiqueta * (0.15);
    console.log('Opção de pagamento escolhida: À vista no Dinheiro ou Pix\nTotal R$: ' + precoEtiqueta.toFixed(2));
} else if (formaDePagamento === 3) {
    console.log('Opção de pagamento escolhida: Até 2X no crédito\nTotal R$: ' + precoEtiqueta.toFixed(2));
} else if (formaDePagamento === 4) {
    precoEtiqueta += (precoEtiqueta * 0.1);
    console.log('Opção de pagamento escolhida: acima de 2X no crédito\nTotal R$: ' + precoEtiqueta.toFixed(2));
} else {
    console.log('*** Opção inválida. Tente novamente com uma das opções do menu ***');
}
console.log(`---------------------------------------------------------------`);

// *** Esse mesmo algoritmo, só que aplicando o conceito de funções ***

function aplicarDescontos(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros /100));
}

function stringDeEscolha(formaDePagamentoEscolhida) {
    switch (formaDePagamentoEscolhida) {
        case 1:
            return `Forma de pagamento escolhida: Débito à vista. Total R$: `;
        case 2:
            return `Forma de pagamento escolhida: À vista no Dinheiro ou Pix. Total R$: `;
        case 3:
            return `Forma de pagamento escolhida: Até 2X no crédito. Total R$: `;
        case 4: 
            return `Forma de pagamento escolhida: acima de 2X no crédito. \nTotal R$: `;
        default:
            return `Forma de pagamento inválida. Tente novamente`;
    }
}
// *** Redefinição dos valores das váriaveis ***
precoEtiqueta = 100;
formaDePagamento = 4;
if (formaDePagamento === 1) {
    console.log(stringDeEscolha(formaDePagamento) + aplicarDescontos(precoEtiqueta,10).toFixed(2));
} else if (formaDePagamento === 2) {
    console.log(stringDeEscolha(formaDePagamento) + aplicarDescontos(precoEtiqueta,15).toFixed(2));
} else if (formaDePagamento === 3) {
    console.log(stringDeEscolha(formaDePagamento) + precoEtiqueta.toFixed(2));
} else if (formaDePagamento === 4) {
console.log(stringDeEscolha(formaDePagamento) +  aplicarJuros(precoEtiqueta,10).toFixed(2));
} else {
    console.log(`Forma de pagamento inválida. Tente novamente`);
}