let dia = "sábado";
function fimDeSemana (dia) {
    let diaDeAula;

	switch(dia) {
        case ((dia == "segunda" || dia == "quarta" || dia == "sexta") ? dia : ""):
			console.log("você tem aulas");
            break;
        case ((dia == "terça" || dia == "quinta" || dia == "sábado" || dia == "domingo") ? dia : ""):
            console.log("você não tem aulas");
            break;
		default:
			console.log("dia incorreto");
	}
}

fimDeSemana("domingo");
fimDeSemana("segunda");
fimDeSemana("terça");
fimDeSemana("quarta");
fimDeSemana("quinta");
fimDeSemana("sexta");
fimDeSemana("sábado");
fimDeSemana(dia);