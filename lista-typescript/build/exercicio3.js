console.log("lISTA TYPESCRIPT --- EXERCICIO 3 ---");
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function movie(nome, ano, genero, nota) {
    if (nota) {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero,
            pontuacao: nota
        };
    }
    else {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero
        };
    }
}
;
console.log(movie("Como eu era antes de você", 2021, GENERO.ROMANCE, 74));
console.log(movie("RAMBO", 2010, GENERO.ACAO));
//# sourceMappingURL=exercicio3.js.map