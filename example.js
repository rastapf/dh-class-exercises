//const exemplo = function() {
    //console.log("Oi, eu sou uma função expressa");
//    return "Oi, eu sou uma função expressa";
//}

//console.log(exemplo);

function ePar(numero) {
    return (numero % 2 == 0);
}


console.log(ePar(1));
console.log(ePar(2));

function count(inicio, fim) {
    let numAtual = inicio;
    while(numAtual <= fim) {
        console.log("O número atual é " + numAtual + " e é menor que" + fim);
        numAtual++;
    }
}

count(4, 6);

function tabelaDeMultiplicacao(numero) {
    let i = 1;
    while (i <=10) {
        let multiplicacao = i*numero;
        console.log(numero + " * " + i + " = " + multiplicacao);
        i++;
    }
}

tabelaDeMultiplicacao(6);

function encontreUm5() {
    let i = 0;
    do {
        i++;
        if (arguments[i] == 5) {
            console.log("Encontramos um 5!");
        } else {
            console.log(arguments[i]);
        }
    } while (arguments[i] != 5)
}

//encontreUm5(10,2,4,9,8,7,5,6,8);

function encontreUmCinco(numeros) {
    let i = 0;
    do {
        
        if (numeros[i] == 5) {
            console.log("Encontramos um 5!");
        } else {
            console.log(numeros[i]);
        }
        i++;
    } while (numeros[i-1] != 5)
}

var matrizNum = [10,2,4,9,8,7,5,6,8];


encontreUmCinco(matrizNum);

let texto = "Oi!";

function papagaio(texto) {
    for (let i = 0; i <= 5; i++) {
        console.log(texto);
    }
}

papagaio(texto);

const exemplo = function() {
    return "Oi, eu sou uma função expressa";
}

console.log(exemplo());