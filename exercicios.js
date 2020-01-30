/* 
CALLBACKS

Inclui função a ser chamada nos parâmetros sem parênteses
Passa como argumento também sem parênteses
*/

function dobro (numero) {
    return numero * 2;
}

function triplo (numero) {
    return numero * 3;
}

function aplicar (numero, funcao) {
    return funcao(numero);
}

console.log(aplicar(3, triplo));

/* ----------------------------------------------------------------- */

function somar (numeroA, numeroB) {
    return numeroA + numeroB;
}

function subtrair (numeroA, numeroB) {
    return numeroA - numeroB;
}

function multiplicar (numeroA, numeroB) {
    return numeroA * numeroB;
}

function dividir (numeroA, numeroB) {
    return numeroA / numeroB;
}

function calculadora (numeroA, numeroB, operacao) {
    return operacao(numeroA, numeroB);
}

/* ----------------------------------------------------------------- */

function adicionarHttp(url) {
    return "http://" + url;
}

function processar(listaUrl,funcao){
    for (let i = 0; i < listaUrl.length; i++) {
        listaUrl[i] = funcao(listaUrl[i]);
    }
    return listaUrl;
}

let sites = ["uol.com.br", "ig.com.br", "charges.com.br"];

processar(sites,adicionarHttp);

console.log(sites);

/* 
CLOSURES

Funções existem dentro de outra, liberam memória de execução e não são
    acessíveis fora da função pai  (container)

Parâmetros e variáveis da função pai podem ser acessadas sem precisar repassar
as mesmas para as funções filhas
*/

/* 
ASSINCRONISMO


*/

function vouPrimeiro() {
    return "Primeiro";
}

function vouDepois() {
    return "Depois";
}

setTimeout(function () {
    console.log(vouDepois());
}, 2000)

console.log(vouPrimeiro());

function alarme1 () {
    return "Hora de acordar são 08:00";
}

function alarme2 () {
    return "Está perto da sua hora de acordar são 07:50";
}



setTimeout(function() {
    console.log(alarme1());
}, 2000);

console.log(alarme2());

//****************************************************************************** */

let estudantes = [
    {
      nome: 'Alvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    },
    {
      nome: 'Alexis',
      media : 3,
      curso : 'iOS',
    }
  ]
  
  console.log(estudantes);
  estudantes.unshift({nome: "Mariana", media: 9, curso: "Full Stack"},{nome: "Francisco", media: 2, curso: "Android"});
  console.log(estudantes);

  let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(numero) {
    return numero > 18;
})


console.log(maiores);

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for (let dados in bart) {
    console.log(bart[dados]);
} 

let frase = "Essa semana vou no colearning";

for (let letra of frase) {
    console.log(letra);
}

let data = new Date();

data.setDate(8);
data.setMonth(2);
data.setYear(1987);

console.log(data);

let dataAtual = new Date();
console.log(dataAtual);

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [,bariloche,,china] = destinosIncriveis;

console.log(bariloche, china);