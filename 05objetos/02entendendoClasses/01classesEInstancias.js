
// classe pessoa: descreve como  tem que ser uma pessoa. É como um modelo para o objeto/intancia 
class pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}
// instancias da classe pessoa: ocorrências de pessoas
const leonan = new pessoa();
leonan.nome = 'Leonan Rocky B.';
leonan.idade = 40;
// Nesse código os campos do objeto foram setados de maneira literal. No proximo exercicio serão setados dinamicamente com o constructor
const jessica = new pessoa();
jessica.nome = 'Jessica L.';
jessica.idade = 20;
// Invocando o metodo descrever
leonan.descrever();
jessica.descrever();
// Imprimindo o objeto leonan
console.log(leonan);
//classe descreve como tem que ser o objeto e instância é a ocorrencia do objeto