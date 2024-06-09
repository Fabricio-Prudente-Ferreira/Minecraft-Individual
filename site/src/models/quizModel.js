var database = require("../database/config"); 

function abrir(idQuiz){
    var instrucaoSql = `
        SELECT idQuiz, tema FROM Quiz WHERE idQuiz = ${idQuiz}; 
    `;

    return database.executar(instrucaoSql);
}

function inserir(idQuiz, idUsuario, pontuacao, tempoExecutado){
    var instrucaoSql = `
        INSERT INTO PontuacaoQuiz(fkQuiz, fkUsuario, pontuacao, tempoExecutado) VALUES(${idQuiz}, ${idUsuario}, ${pontuacao}, ${tempoExecutado});
    `;

    return database.executar(instrucaoSql);
}

function quizColocacao(idQuiz){ 
    var instrucaoSql = `
        SELECT nome, MIN(tempoExecutado) AS tempoExecutado FROM PontuacaoQuiz JOIN Usuario ON idUsuario = fkUsuario WHERE pontuacao = 5 AND fkQuiz = ${idQuiz} GROUP BY nome ORDER BY MIN(tempoExecutado) ASC;
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    abrir,
    inserir,
    quizColocacao
}