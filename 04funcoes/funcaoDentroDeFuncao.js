
// EXEMPLO DE COMO TRABALHAR COM FUNÇÃO DENTRO DE OUTRA FUNÇÃO. 
 

function dizerMeuNome(nome) {
    return `Nome: ${nome}`;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log( dizerMeuNome('Leonan') + ` - idade:${idade} anos`);
    }
    else {
        console.log(dizerMeuNome('Leonan') + ` - Menor de idade: ${idade} anos`);
    } 
}

function main() {

    let idade = 17;
    verificarIdade(idade);
}

main();