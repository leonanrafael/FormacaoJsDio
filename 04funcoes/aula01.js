// *** Procedimento: Uma vez que a função não tem um valor especifico de retorno e simplesmente executa os comandos existentes nela. ***
function sayMyName(name,age) {
    // *** name e idade são os parametros estabelecidos como necessários como entrada ***
    console.log('\nSeu nome é: ' + name + ' E tem ' + age + ' anos');
}
// *** 'leonan' e 28 são os dados referentes ao parametros ***
sayMyName('leonan',28);

console.log('\n------------------------------------------------\n');
// *** Funções: São parecidas com  os procedimentos: evitam repetição de código fonte,deixando o algoritmo mais enchuto, elegante e de facil manuntenção e também utilizam parametros. Porém elas retornam um valor de saída no fim da execução. ***

let num = 10;
function quadrado (valor) {
    return valor * valor;
}

let quadradoValor = quadrado(num);
console.log('O número ' + num + ' elevado ao quadrado é: ' + quadradoValor + '\n');
console.log('**********************************\n');

function incrementarJuros(valor,percentualDeJuros) {
    let valorDeAcrescimo = (percentualDeJuros/100.00) * valor;
    return (valor + valorDeAcrescimo).toFixed(2);
}
console.log('Valor total após o acrécimo de juros R$: ' +incrementarJuros(100,20) + '\n');