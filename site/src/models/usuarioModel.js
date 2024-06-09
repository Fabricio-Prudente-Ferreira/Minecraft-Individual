var database = require("../database/config")

function autenticar(login, senha) {
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE (email = '${login}' OR nickname = '${login}') AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, nick, email, dtNasc, senha) {
    var instrucaoSql = `
        INSERT INTO Usuario (nome, nickname, email, dtNasc, senha, imagem) VALUES ('${nome}', '${nick}', '${email}', '${dtNasc}', '${senha}', 'https://i.pinimg.com/originals/85/78/bf/8578bfd439ef6ee41e103ae82b561986.png');
    `;
    return database.executar(instrucaoSql);
}

function atualizar(id, nome, nick, email, dtNasc, imagem, senha) {
    var instrucaoSql = `
        UPDATE Usuario SET nome = '${nome}', nickname = '${nick}', email = '${email}', dtNasc = '${dtNasc}', imagem = '${imagem}', senha = '${senha}' WHERE idUsuario = ${id};
    `;
    
    return database.executar(instrucaoSql);
}

function mostrar(idUsuario) {
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE idUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

function detectarSenha(idUsuario) {
    var instrucaoSql = `
        SELECT senha FROM Usuario WHERE idUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    mostrar,
    detectarSenha
};