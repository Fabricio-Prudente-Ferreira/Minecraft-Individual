var database = require("../database/config"); 

function abrir(idQuiz){
    var instrucaoSql = `
        SELECT * FROM Quiz WHERE idQuiz = ${idQuiz}; 
    `;

    return database.executar(instrucaoSql);
}

function inserir(idQuiz, idUsuario, pontuacao){
    var instrucaoSql = `
        INSERT INTO PontuacaoQuiz(fkQuiz, fkUsuario, pontuacao) VALUES(${idQuiz}, ${idUsuario}, ${pontuacao});
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    abrir,
    inserir
}