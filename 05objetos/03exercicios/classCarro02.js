/*  criar uma classe para representar carros
    Os carros possuem marca, cor e gasto médio de combustível por kilometro rodado
    Criar um método que dado a quantidade de kilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.   
*/

class Carro {
    marca;
    cor;
    kmPorLitro;
    constructor(marca,cor,kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }
    calcularConsumo(percurso,precoCombustivel){
        return ((percurso / this.kmPorLitro) * precoCombustivel).toFixed(2);    
    }    
}

const uno = new Carro('fiat','cinza',12);
console.log(uno.calcularConsumo(70,5));

const palio = new Carro('fiat','preto',10);
console.log(palio.calcularConsumo(70,5));