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

const entradaPets = (listaPets) => {
    let petsListados = JSON.parse(listaPets);
    for (let i = 0; i < petsListados.length; i++) {
        //console.log("Nome: " + petsListados[i].nome + ", Tipo: " + petsListados[i].tipo);
    }
    return petsListados;
}

let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Banho","Tosa"]}] `;

//entradaPets(json);

function darEntradaPetshop (listaPets, leituraLista, vacinarPet) {
    let petsListados = leituraLista(listaPets);
    
    function MensagemServico (pet) {
        console.log("Pet: " + pet.nome + ", Tipo: " + pet.tipo, ", vacinação em dia!");
    }

    for (let i = 0; i < petsListados.length; i++) {
        vacinarPet(petsListados[i]);
        MensagemServico(petsListados[i]);
    }
}

darEntradaPetshop(json, entradaPets, vacinarPet);