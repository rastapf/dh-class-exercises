function naoPareDeContarImparesAte(numero){
    let numImpares = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 2 != 0) {
            numImpares = numImpares + 1;
        }  
    }

    return numImpares;
}

console.log(naoPareDeContarImparesAte(8));