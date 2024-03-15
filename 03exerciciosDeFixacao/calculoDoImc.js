/* 
Elaborar um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em Adultos condição:
-Abaixo de 18.5 = abaixo do peso;
-Entre 18.5 e 24.9 = peso normal;
-Entre 25 e 29.9 = acima do peso;
-Entre 30 e 39.9 = obeso;
-Acima de 40 = Obesidade Grave;
 */

let peso = 68;
let altura = 1.72;
let imc = peso / (altura * altura); 

if (imc < 18.5) {
    console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}`);
    console.log('Abaixo do peso');
} else if (imc <= 24.99) {
    console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}`);
    console.log('Peso normal');
} else if (imc <= 29.99) {
    console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}`);
    console.log('Acima do peso');
} else if (imc <= 39.99) {
    console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}`);
    console.log('Obeso');
}else{
    console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}`);
    console.log('Obesidade grave');
}
