
//Elaboração de uma função para escrever meu nome.
function dizerMeuNome(nome) {
    console.log('Seu nome é:' + nome);
}
//Função elaborada para organizar e diferenciar as chamadas das funções no console. 
function separacaoDeFuncao() {
    console.log(`\n-----------------------------------------\n`)
}

//Função para verificar idade.
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(`Idade:${idade} anos. Acesso PERMITIDO`);
    }
    else {
        console.log(`Idade:${idade} anos. Acesso NEGADO`);
    }
   
}

function main() {

    dizerMeuNome('Leonan');
    separacaoDeFuncao();
    let idade = 17;
    verificarIdade(idade);
    verificarIdade(19);
}

main();