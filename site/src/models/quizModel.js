var database = require("../database/config"); 

function abrir(idQuiz){
    var instrucaoSql = `
        SELECT * FROM Quiz WHERE idQuiz = ${idQuiz}; 
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
        SELECT pontuacao, nome, tempoExecutado FROM PontuacaoQuiz AS pq JOIN Usuario ON idUsuario = pq.fkUsuario WHERE fkQuiz = ${idQuiz} AND pq.pontuacao = (SELECT MAX(pontuacao) FROM PontuacaoQuiz WHERE fkUsuario = pq.fkUsuario AND fkQuiz = ${idQuiz}) ORDER BY pq.pontuacao DESC, pq.tempoExecutado;
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    abrir,
    inserir,
    quizColocacao
}