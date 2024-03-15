
/**** Objetivo: Itentificar trechos de código repetitivos e que poderiam
ser substituídos por Funções ****/

function aplicarDescontos(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros /100));
}

let precoEtiqueta = 100;
let formaDePagamento = 1;

if(formaDePagamento === 1) {
    console.log(aplicarDescontos(precoEtiqueta,10));
} else if(formaDePagamento === 2) {
    console.log(aplicarDescontos(precoEtiqueta,15));
} else if(formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else if(formaDePagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta,10))
} else {
    console.log(`Forma de pagamento inválida. Tente novamente`);
}