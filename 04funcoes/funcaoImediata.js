
function calcularImc(peso,altura){
        return  peso / (altura * altura);
}

function validarImc(){
     let imc = calcularImc(peso,altura);

    if (imc < 18.5) {
       console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}\nVocê está Abaixo do peso`);
    } else if (imc <= 24.99) {
        console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}\nVocê está no Peso normal`);
    } else if (imc <= 29.99) {
        console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}\nVocê está Acima do peso`);
    } else if (imc <= 39.99) {
        console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}\nVocê está com um quadro de Obesidade`);
    }else{
        console.log(`Altura:${altura}\nPeso:${peso}\nIMC:${imc.toFixed(2)}\nVocê está com um quadro de Obesidade grave`);
    }    
}

function separacaoDeFuncao() {
    console.log(`-----------------------------------------`);
}

//Função automaticamente invocada,
//Função anônima,
//Normalmente usadas em programação Web e alguns mecanismos de buscas.
let peso = 120;
let altura = 1.59;

(function() {
    
    validarImc();
    separacaoDeFuncao();
    validarImc(calcularImc(peso,altura));
    
}) ();

