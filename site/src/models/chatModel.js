var database = require("../database/config");

function acessar(idChat){
    var instrucaoSql = `
        SELECT * FROM Chat WHERE idChat = ${idChat};
    `;

    return database.executar(instrucaoSql);
}

function enviar(mensagem, idUser, idTheme){
    var instrucaoSql = `
        INSERT INTO Mensagem(texto, fkUsuarioMsg, fkChat) VALUES('${mensagem}', ${idUser}, ${idTheme});
    `;

    return database.executar(instrucaoSql);
}

function atualizar(idChat){
    var instrucaoSql = `
        SELECT * FROM Mensagem JOIN Usuario ON Usuario.idUsuario = Mensagem.fkUsuarioMsg WHERE fkChat = ${idChat} ORDER BY idMensagem ASC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    acessar,
    enviar,
    atualizar
}