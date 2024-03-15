const pessoa = {
    nome : 'Leonan Rafael Malta',
    idade : 19,
   
    descrever: function () {
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

const atributo = 'nome'; //aqui eu defini o valor "nome" para a const atributo.
/*  A ideia é: eu quero pegar o valor que tem na variavel "atributo"... ou seja, o valor é o "nome". Isso nos permite acessar o valor de um atributo de um objeto atraves de uma string; 
*/
console.log(pessoa[atributo]);
console.log(pessoa['idade']);//
/*essa notação me permite acessar dinamicamente o valor de um atributo através de uma string.
  Com isso, seu eu precisar acessar um atributo que eu não sei o nome dele eu posso receber esse nome como parametro e isso torna as possibilidades ifinitas
*/
pessoa['nome'] = 'rocky'; // É igual a pessoa.nome = 'rocky'; 
console.log(pessoa[atributo]); 
console.log(pessoa['nome']); 
