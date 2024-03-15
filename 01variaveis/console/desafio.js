
const valCombustivel = 5.79;
let kmPorLitro = 10;
let distancia = 100;
let total = (distancia/kmPorLitro) * valCombustivel;

// O método toFixed converte o valor numérico para uma string com duas casas decimais(não dá para fazer conta )
// parseFloat pega essa string e tranforma em um dado númerico novamente(ai dá pra fazer conta novamente).

total = parseFloat(total.toFixed(2));
console.log('Distância do destino em KM:' + distancia + '\nValor do Combustivel: R$' + valCombustivel + '\nPerformance do veículo:' + kmPorLitro + ' Km por litro');
console.log('Custo da viagem: R$' + total);
/*Observações importantes:
   1 - A virgula  usada após a variavel, na hora de  concatenar, acrescenta um espaço a mais no codigo. O uso é opcional.
   1 - Execute e observe a diferença entre o "bloco" de cima e o de baixo.
   2 - Os espaços no inicio e no fim da sintring também influenciam na formatação do dados.
   2 - o \n funciona de maneira similar à linguagem C.
*/
console.log('=========================================================================================');
console.log('Distância do destino em KM: ' + distancia);
console.log('Valor do Combustivel: R$ ' + valCombustivel);
console.log('Performance do veículo: ' + kmPorLitro, ' Km por litro');
console.log('Total da viagem: R$ ' + total);
console.log('=========================================================================================');

console.log( total + 3.0);
console.log( total);
