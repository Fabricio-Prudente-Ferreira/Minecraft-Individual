var database = require("../database/config"); 

// function abrir(idQuiz){
//     var instrucaoSql = `
//         SELECT * FROM Quiz WHERE idQuiz = ${idQuiz}; 
//     `;

//     return database.executar(instrucaoSql);
// }

function inserir(idUsuario, palavraSecreta, tentativas, acertos, semiacertos, modo){
    var instrucaoSql = `
        INSERT INTO PontuacaoTermo(fkUsuario, palavra, qtdTentativas, qtdAcertos, qtdSemiacertos, modo) VALUES(${idUsuario}, '${palavraSecreta}', ${tentativas}, ${acertos}, ${semiacertos}, '${modo}');
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    // abrir,
    inserir
}