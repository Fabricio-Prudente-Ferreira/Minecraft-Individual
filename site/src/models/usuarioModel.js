var database = require("../database/config")

function autenticar(login, senha) {
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE (email = '${login}' OR nickname = '${login}') AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, nick, email, dtNasc, senha) {
    var instrucaoSql = `
        INSERT INTO Usuario (nome, nickname, email, dtNasc, senha) VALUES ('${nome}', '${nick}', '${email}', '${dtNasc}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

async function atualizar(id, nome, nick, email, dtNasc, imagem, senha) {
    var update = `
        UPDATE Usuario SET nome = '${nome}', nickname = '${nick}', email = '${email}', dtNasc = '${dtNasc}', imagem = '${imagem}', senha = '${senha}' WHERE idUsuario = ${id};
    `;

    var instrucaoSql = `SELECT * FROM Usuario WHERE idUsuario = ${id};`;

    await database.executar(update);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    atualizar
};