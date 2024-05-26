var database = require("../database/config"); 

function inserir(idUsuario, palavraSecreta, tentativas, acertos, semiacertos, modo, resultado){
    var instrucaoSql = `
        INSERT INTO PontuacaoTermo(fkUsuario, palavra, qtdTentativas, qtdAcertos, qtdSemiacertos, modo, resultado) VALUES(${idUsuario}, '${palavraSecreta}', ${tentativas}, ${acertos}, ${semiacertos}, '${modo}', ${resultado});
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    inserir
}