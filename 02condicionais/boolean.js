//*** Booleans são representados por 0 e 1, e são utilizados para representar valores verdadeiros e falsos. ***
let numero = 11;
let isNumeroPar = (numero % 2) === 0; // aqui se trata de uma variavel booleana, onde a variavel inNumeroPar vai receber um valor: verdeirado ou falso. 

if (isNumeroPar) {
    console.log('O número é par: ' + isNumeroPar);    
}

if (!isNumeroPar) {
    console.log('O número '+ numero,'é par? \nResposta: ' + isNumeroPar);
}
console.log('===================================================================================================');

let teste = 3;
let teste2 = '3';

console.log('Condicional composta:');
// *** A seguir, foram feitas duas estruturas condicionais para mostrar a diferença entre os operadores de comparação: "==" e "===" ***
if (teste === teste2 ) {
    console.log('Esse bloco é executado se as variaveis da condição pussuirem o mesmo valor e o mesmo tipo de dados');
} else  {
        console.log('Esse bloco é executado quando não são o mesmo tipo de dados ou tem valores diferentes');
    }
console.log('===================================================================================================');

console.log('Condicional aninhada:');

if (teste === teste2) {
        console.log('Esse bloco é executado quando as variaveis tem o mesmo tipo e o mesmo valor');
} else if (teste == teste2) {
        console.log('Esse bloco é executado quando as variáveis tem o mesmo valor, porém tipos diferentes');    
    } else {
        console.log('Esse bloco é executado quando as variaveis possuem valores diferentes, independente do tipo');
        }
console.log('===================================================================================================');
