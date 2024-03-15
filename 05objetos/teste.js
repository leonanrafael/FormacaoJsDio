// Definindo uma classe Pessoa
class Pessoa {
    constructor(nome, idade, sexo, interesses) {
      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo;
      this.interesses = interesses;
    }
  
    // Método para exibir informações sobre a pessoa
    bio() {
      console.log(
        `${this.nome[0]} ${this.nome[1]} tem ${this.idade} anos de idade. Ele gosta de ${this.interesses[0]} e ${this.interesses[1]}.`
      );
    }
  
    // Método para saudar a pessoa
    saudacao() {
      console.log(`Oi! Eu sou ${this.nome[0]}.`);
    }
  }
  
  // Criando um objeto Pessoa usando a classe
  const pessoa1 = new Pessoa(["Bob", "Smith"], 32, "masculino", ["música", "esquiar"]);
  
  // Exemplo de uso
  pessoa1.bio(); // Exibe informações sobre a pessoa
  pessoa1.saudacao(); // Exibe uma saudação