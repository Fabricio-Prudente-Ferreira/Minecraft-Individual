var database = require("../database/config"); 

function inserir(idUsuario, palavraSecreta, tentativas, acertos, semiacertos, modo, resultado, tempoCronometro){
    var instrucaoSql = `
        INSERT INTO PontuacaoTermo(fkUsuario, palavra, qtdTentativas, qtdAcertos, qtdSemiacertos, modo, resultado, tempoExecutado) VALUES(${idUsuario}, '${palavraSecreta}', ${tentativas}, ${acertos}, ${semiacertos}, '${modo}', ${resultado}, ${tempoCronometro});
    `;

    return database.executar(instrucaoSql);
}

function termoColocacao(dificuldade){
    var instrucaoSql = `
        SELECT nome, MIN(tempoExecutado) AS 'tempoExecutado' FROM PontuacaoTermo JOIN Usuario ON idUsuario = fkUsuario WHERE resultado = 1 AND modo = '${dificuldade}' GROUP BY nome ORDER BY MIN(tempoExecutado) ASC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
    termoColocacao
}