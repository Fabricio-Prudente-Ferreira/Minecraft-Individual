var database = require("../database/config"); 

function inserir(idUsuario, palavraSecreta, tentativas, acertos, semiacertos, modo, resultado, tempoCronometro){
    var instrucaoSql = `
        INSERT INTO PontuacaoTermo(fkUsuario, palavra, qtdTentativas, qtdAcertos, qtdSemiacertos, modo, resultado, tempoExecutado) VALUES(${idUsuario}, '${palavraSecreta}', ${tentativas}, ${acertos}, ${semiacertos}, '${modo}', ${resultado}, ${tempoCronometro});
    `;

    return database.executar(instrucaoSql);
}

function termoColocacao(dificuldade){
    var instrucaoSql = `
        SELECT qtdTentativas AS 'tentativa', nome, tempoExecutado FROM PontuacaoTermo AS pt JOIN Usuario ON idUsuario = pt.fkUsuario WHERE resultado = 1 AND modo = '${dificuldade}' AND pt.qtdTentativas = (SELECT MIN(qtdTentativas) FROM PontuacaoTermo WHERE fkUsuario = pt.fkUsuario AND modo = '${dificuldade}') ORDER BY pt.qtdTentativas ASC, pt.tempoExecutado;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
    termoColocacao
}