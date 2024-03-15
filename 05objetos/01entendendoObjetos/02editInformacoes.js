
/* Uma vez definido um objeto literal, é possivel incrementar ele dinamicamente como no exemplo abaixo*/
const pessoa = {
    nome : 'Leonan Rafael Malta',
    idade : 19,
    peso : 65,
};

//Aqui, foi adicionada dinamicamente uma nova propriedade ao objeto.
pessoa.altura = 1.74;

//Aqui foi deletado dinamicamente uma das propriedades do objeto.
delete pessoa.peso;

console.log(pessoa.nome); // saída: Leonan Rafael Malta
console.log(pessoa.idade); // saída: 19
console.log(pessoa.peso); // saída: undefined
console.log(pessoa.altura); // saída: 1.74
console.log('---------------');
console.log(pessoa); // saída: { nome: 'Leonan Rafael Malta', idade: 27, altura: 1.74 }