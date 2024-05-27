var database = require("../database/config"); 

function termo(idUsuario){
    var instrucaoSql = `
        SELECT qtdTentativas, palavra, modo, resultado FROM PontuacaoTermo WHERE fkUsuario = ${idUsuario}; 
    `;

    return database.executar(instrucaoSql);
}

function quizzes(idUsuario){
    var instrucaoSql = `
        SELECT tema, pontuacao FROM PontuacaoQuiz JOIN Quiz ON fkQuiz = idQuiz WHERE fkUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

function chats(idUsuario){
    var instrucaoSql = `
        SELECT * FROM Mensagem WHERE fkUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    termo,
    quizzes,
    chats
}