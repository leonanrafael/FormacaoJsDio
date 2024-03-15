
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
        const imc = this.calcularImc();
        if (imc < 18.5) {
           return (`Imc:${imc} Abaixo do peso`);
        } else if (imc <= 24.99) {
           return (`Imc:${imc} Peso normal`);
        } else if (imc <= 29.99) {
           return (`Imc:${imc} Acima do peso`);
        } else if (imc <= 39.99) {
           return (`Imc:${imc} Obeso`);
        }else{
            return (`Imc: ${imc.toFixed(2)} obesidade grave`);
        }
    }
}

const rocky = new Pessoa('Rocky',1.74,150);
console.log(rocky.classificarImc());