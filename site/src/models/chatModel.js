var database = require("../database/config");

function enviar(mensagem, idUser, idTheme){
    var instrucaoSql = `
        INSERT INTO Mensagem(texto, fkUsuarioMsg, fkChat) VALUES('${mensagem}', ${idUser}, ${idTheme});
    `;

    return database.executar(instrucaoSql);
}

// function atualizar(){
    
// }

module.exports = {
    enviar
}