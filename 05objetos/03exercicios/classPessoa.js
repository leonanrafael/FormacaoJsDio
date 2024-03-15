
class Pessoa {
    nome;
    altura;
    peso;
    constructor(nome,altura,peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        let imc = this.calcularImc();
        if (imc < 18.5) {
            console.log(` Altura:${this.altura}\n Peso:${this.peso}\n IMC:${imc}\n Abaixo do peso`);
        } else if (imc <= 24.99) {
            console.log(` Altura:${this.altura}\n Peso:${this.peso}\n IMC:${imc}\n Peso normal`);
        } else if (imc <= 29.99) {
            console.log(` Altura:${this.altura}\n Peso:${this.peso}\n IMC:${imc}\n Acima do peso`);
        } else if (imc <= 39.99) {
            console.log(` Altura:${this.altura}\n Peso:${this.peso}\n IMC:${imc}\n Obeso`);
        }else{
            console.log(` Altura:${this.altura}\n Peso:${this.peso}\n IMC:${imc}\n Obesidade grave`);
        }
    }
}

const rocky = new Pessoa('Rocky',1.74,150);
console.log(rocky.classificarImc());
console.log(rocky['altura']);
console.log(rocky['imc']);
console.log(rocky.calcularImc());