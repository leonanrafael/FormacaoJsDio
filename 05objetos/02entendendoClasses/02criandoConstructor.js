
// classe pessoa: descreve como  tem que ser uma pessoa. É como um modelo para o objeto/intancia 
class pessoa {
    nome;
    idade;
    anoDeNascimento;
    //sempre que uma classe é instaciada, ela passa pelo método constructor
    constructor(nome,idade){
        this.nome = nome; /* this.nome = nome significa que o campo Nome do objeto vai receber o nome que for colocado como parametro. Assim como a idade do objeto vai receber o valor informado como parametro.
        Isso obriga que toda vez que a classe for instanciada, será necessário o informar os parametros NOME e IDADE.
        */
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} anos e nasci em ${this.anoDeNascimento}`);
    }
}

const leonan = new pessoa('Rocky',26);

const jessica = new pessoa('Jessy',59);

leonan.descrever(); //retorna o metodo Descrever(); da intancia Leonan
jessica.descrever(); // retorna o metodo Descrever(); da intancia Jessica
console.log(leonan); // retorna o objeto
//classe descreve como tem que ser o objeto e instância é a ocorrencia do objeto