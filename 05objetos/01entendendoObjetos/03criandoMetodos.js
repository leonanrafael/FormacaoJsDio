

const pessoa = {
    nome : 'Leonan Rafael Malta',
    idade : 19,
    /*  Dentro de um objeto, funções são chamadas de metodos.
        pode-se dizer que metodos são como ações com as propriedades do objeto. 
        Ao criar métodos dentro de um objeto, o uso de “this” é comum para acessar as propriedades desse objeto.
        */ 
    descrever: function () {
        //Como "this" está dentro do objeto, ele basicamente assume o contexto do objeto.
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.descrever();
console.log('------------------------------------');

// sobreescrevendo o valor das variaveis
pessoa.nome = 'rocky';
pessoa.idade = 38;
//invocando o metodo/função
pessoa.descrever();
console.log('------------------------------------');

// reeatribuindo o valor de um método com base em uma função
pessoa.descrever = function() {
    pessoa.nome = 'balboa';
    console.log(`My name is ${this.nome}`);
}
pessoa.descrever();