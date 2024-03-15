
class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade) {
        this.nome = nome 
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade
    }

    descrever(){
        console.log(`Nome: ${this.nome} Idade: ${this.idade} Nascimento: ${this.anoDeNascimento}`);
    }
}

function compararPessoas (p1,p2) {
    if ( p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else 
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
}
const leonan = new pessoa('Leonan R.', 27);
const rocky = new pessoa('Rocky L.', 28);

compararPessoas(leonan,rocky);
leonan.descrever();