// var nomeCachorro = "Bob";
// var idade = 5;
// var raca = "Vira-lata";
// //var dono = "Ana";
// var dono = {
//     nome: "Ana",
//     idade: 20,
//     endereco: "R J Ant, 191"
// }
// var vacinado = true;
// //var servicos = ["banho", "tosa", {
// //    nome: "vacina",
// //    feito: true
// // }];
// var servicos = ["banho", "tosa"];
// var peso = 10.6;

let pets = [{
    nome: "Bob",
    raca: "Vira-lata",
    dataNascimento: "10/12/2018",
    tipo: "Cachorro",
    peso: 10.5,
    sexo: "M",
    dono: {nome: "Ana", idade: 20, endereco: "R 125"},
    vacinado: false,
    servicos: ["Banho", "Tosa"]
},

{
    nome: "Dino",
    raca: "Vira-lata",
    dataNascimento: "01/03/2015",
    tipo: "Gato",
    peso: 10.5,
    sexo: "F",
    dono: {nome: "Ana", idade: 20, endereco: "R 125"},
    vacinado: true,
    servicos: ["Banho", "Tosa"]
}];

//String, Number, Float, Boolean, Array, Objeto, null, undefined



// console.log(servicos);
// console.log(nomeCachorro);
// console.log(dono);


// function listarNomeTipo (pets) {
//     for (let i = 0; i < pets.length; i++) {
//         let sexo = pets[i].sexo == "M" ? "Masculino" : "Feminino";
//         console.log("-".repeat(80));
//         console.log("Nome: " + pets[i].nome + ", Tipo: " + pets[i].tipo + ", Sexo: " + sexo);
//         //console.log(pets[i].tipo);
//     }
// }

function listarNomeTipo (pets) {
    let i = 0;
    while (i < pets.length) {
        let sexo = pets[i].sexo == "M" ? "Masculino" : "Feminino";
        console.log("-".repeat(80));
        console.log("Nome: " + pets[i].nome + ", Tipo: " + pets[i].tipo + ", Sexo: " + sexo);
        //console.log(pets[i].tipo);
        i++;
    }
}

function vacinarPet (pets) {
    //let vacinaExecutada = false;
    if (pets.vacinado == false) {
        pets.vacinado = true;
        console.log(pets.nome + " foi vacinado com sucesso");
        pets.servicos.push("Vacina");
        //vacinaExecutada = true;
    } else {
        console.log(pets.nome + " já estava vacinado");
        //vacinaExecutada = false;
    }
    //return vacinaExecutada;
}

const SISTEMA = "Petshop DH";
//const VERSAO = "1.20";
const VERSAO = "2.00";

console.log("Sistema: " + SISTEMA + " versão: " + VERSAO);
listarNomeTipo(pets);
vacinarPet(pets[0]);
console.log(pets[0].vacinado);

console.log("*-".repeat(40));

//var teste = [[1,2,3],[4,5,6]];

// console.log(teste[0][1]);

// console.log(teste.indexOf([1,2,3]));
// console.log(teste[0].indexOf(3));

/* PRIMEIRA VERSÃO FUNÇÃO ENTRADAPETS
******************************************************************************************
*/
// const entradaPets = (listaPets) => {
//     let petsListados = JSON.parse(listaPets);
//     for (let i = 0; i < petsListados.length; i++) {
//         //console.log("Nome: " + petsListados[i].nome + ", Tipo: " + petsListados[i].tipo);
//     }
//     return petsListados;
// }

/* ENTRADAPETS CRIADA COM FOR...OF
******************************************************************
*/
// const entradaPets = (listaPets) => {
//     let petsListados = JSON.parse(listaPets);
//     for(let pet of petsListados) {
//         pet.dataNascimento = new Date(pet.dataNascimento);
//     }
//     return petsListados;
// }


/*VERSÃO FINAL ENTRADAPETS UTILIZANDO MAP
**********************************************************
*/
const entradaPets = (listaPets) => {
    let petsListados = JSON.parse(listaPets);
    petsListados.map(function(item) {
        item.dataNascimento = new Date(item.dataNascimento);
    })
    return petsListados;
}

let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"2018-12-10T15:00:00-03:00","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"castrado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"2016-01-14T16:30:22Z","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"castrado":false,"servicos":["Banho","Tosa"]}] `;

//Padrão entrada datas para JSON: AAAA-MM-DDTHH:mm:ss.mssZ
//Z: Data no GMT
//"2016-01-14T16:30:22-03:00"

//entradaPets(json);

function darEntradaPetshop (listaPets, leituraLista, vacinarPet) {
    let petsListados = leituraLista(listaPets);
    
    function MensagemServico (pet) {
        console.log("Pet: " + pet.nome + ", Tipo: " + pet.tipo, ", vacinação em dia!");
        console.log(pet.servicos);
    }

    for (let i = 0; i < petsListados.length; i++) {
        vacinarPet(petsListados[i]);
        console.log(petsListados[i].dataNascimento);
        MensagemServico(petsListados[i]);
    }
}

darEntradaPetshop(json, entradaPets, vacinarPet);

// let d = new Date(31968000000);

// d.setFullYear(00);

// console.log(d);

let testeMatriz = [1, 2]

console.log(testeMatriz)

function testeReferencia(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = 3;
    }
}

testeReferencia(testeMatriz);

console.log(testeMatriz)

let a = [5, 6, 7];

console.log(a);

function quadrado(numero) {
    numero = numero*numero;
    return numero;
}

a.map(quadrado)
console.log(a)

// Exemplos de filter
let pessoas = [
    {nome: "Natália", idade:21},
    {nome: "Sérgio Moura", idade:40},
    {nome: "Luiz Alexandre", idade:25}
]

let pessoasMais21 = pessoas.filter(function(pessoa) {
    return pessoa.idade > 22;
})

console.log(pessoasMais21);

//Busca pet pelo nome
const buscaPeloNome = (trecho, pets) => {
    let petsListados = entradaPets(pets);
    let petsEncontrados = petsListados.filter(function(pet) {
        return pet.nome.indexOf(trecho) != -1;
        //return pet.nome.includes(trecho);
    })
    return petsEncontrados;
}

console.log(buscaPeloNome("Repete", json));

//Verifica se pet já foi castrado
//Caso já tenha sido, retorna mensagem de erro
// Caso não tenha sido, muda parâmetro pet.castrado
//para true e adiciona a string "castrado" ao array serviços
const castrarPet = pet => {
    if (pet.castrado == true) {
        console.log("ERRO: Pet já estava castrado!");
    } else {
        pet.castrado = true;
        pet.servicos.push("castrado");
        console.log("Castração realizada com sucesso");
    }
}

//Acrescenta a string "banho" ao array de serviços
//Retorna mensagem de sucesso sempre
const darBanho = pet => {
    pet.servicos.push("banho");
    console.log("Banho realizado com sucesso");
}

/*SPREAD OPERATOR*/
let fabricante = {
    nome: "Unilever",
    CNPJ: "12.345.678/0001-91"
};

let produto = {
    nome: "Vanish 500ml",
    preço: 5.00,
    lote: "XYZ123445",
    fabricante: fabricante
    //fabricante
    //...fabricante
};