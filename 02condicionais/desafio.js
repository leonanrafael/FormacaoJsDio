/* Objetivo: Fazer um programa para calcular o valor gasto com combustível em uma viagem com base no tipo de combustível.
    Variaveis necessárias:
        -Combustivel que será utilizado
        -Preço do combustível
        -Quantos km o veículo faz por litro
        -Distância entre origem e destino em km
        -O total da viagem em reais
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
let combustivelDoCarro = 'Gasolina';
let kmPorLitro = 10
let distanciaEmKm = 100;
let total = 0;

if (combustivelDoCarro === 'Etanol') {
    total = (distanciaEmKm / kmPorLitro) * precoEtanol;
    console.log('O valor gasto em ' + combustivelDoCarro + ' será de R$: ' + total.toFixed(2));
}
else {
    combustivelDoCarro = 'Gasolina';
    total = (distanciaEmKm / kmPorLitro) * precoGasolina;
    console.log('O valor gasto em ' + combustivelDoCarro + ' será de R$: ' + total.toFixed(2));
}
