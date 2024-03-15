/*  criar uma classe para representar carros
    Os carros possuem marca, cor e gasto médio de combustível por kilometro rodado
    Criar um método que dado a quantidade de kilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
    *** Tomei a liberdade de adicionar novas propriedades à classe para simular outros cenários ***   
*/

class Carro {
    marca;
    cor;
    ano;
    portas;
    kmPorLitro;
    constructor(marca,cor,ano,portas,kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
        this.ano = ano;
        this.portas = portas;
    }
    calcularConsumo(valorCombustivel,percurso){
        const consumo = (percurso / this.kmPorLitro) * valorCombustivel;
        console.log(` Calculo do percurso: O Percurso é de ${percurso} km, Consumo do carro em km: ${this.kmPorLitro}, O gasto em combustível será dê RS:${consumo.toFixed(2)}`);
        
    }
    descrever(){
        console.log(` Modelo:${this.marca}\n Cor:${this.cor}\n Ano:${this.ano}\n Nº de portas:${this.portas}\n Consumo:${this.kmPorLitro} kms por litro`);
    }
}
 
const carroOne = new Carro('gol','branco',2018,4,12);
carroOne.descrever();
carroOne.calcularConsumo(5,70);

console.log(`---------------------`);
const carroTwo = new Carro('uno','preta',2010,2,10);
carroTwo.descrever();
carroTwo.calcularConsumo(5,70);
