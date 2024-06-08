var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) res.status(400).send("Seu email está undefined!");
    else if (senha == undefined) res.status(400).send("Sua senha está indefinida!");
    else {
        usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].idUsuario,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome,
                        nick: resultadoAutenticar[0].nickname,
                        imagem: resultadoAutenticar[0].imagem,
                        dtNasc: resultadoAutenticar[0].dtNasc,
                        senha: resultadoAutenticar[0].senha,
                    });
                } else if (resultadoAutenticar.length == 0) res.status(403).send("Email e/ou senha inválido(s)");
                else res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        ).catch(
            function (erro) {
                console.error(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var nick = req.body.nickServer;
    var email = req.body.emailServer;
    var dtNasc = req.body.dtNascServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) res.status(400).send("Seu nome está undefined!");
    else if(nick == undefined) res.status(400).send("Seu nickname está undefined!");
    else if (email == undefined) res.status(400).send("Seu email está undefined!");
    else if (senha == undefined) res.status(400).send("Sua senha está undefined!");
    else if (dtNasc == undefined) res.status(400).send("Sua data de nascimento está undefined!");
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, nick, email, dtNasc, senha)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function atualizar(req, res){
    var id = req.body.idServer;
    var nome = req.body.nomeServer;
    var nick = req.body.nickServer;
    var email = req.body.emailServer;
    var dtNasc = req.body.dtNascServer;
    var senha = req.body.senhaServer;
    var imagem = req.body.imagemServer;

    if (nome == undefined) res.status(400).send("Seu nome está undefined!");
    else if(nick == undefined) res.status(400).send("Seu nickname está undefined!");
    else if (email == undefined) res.status(400).send("Seu email está undefined!");
    else if (senha == undefined) res.status(400).send("Sua senha está undefined!");
    else if (dtNasc == undefined) res.status(400).send("Sua data de nascimento está undefined!");
    else {
        usuarioModel.atualizar(id, nome, nick, email, dtNasc, imagem, senha)
        .then(
            function(resultadoAtualizar){
                res.json(resultadoAtualizar);
            }
        ).catch(
            function(erro){
                console.error(erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

function mostrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if(idUsuario == undefined) res.status(400).send("Seu idUsuario está undefined!");
    else {
        usuarioModel.mostrar(idUsuario)
        .then(function(resultadoMostrar){
            res.json({
                id: resultadoMostrar[0].idUsuario,
                email: resultadoMostrar[0].email,
                nome: resultadoMostrar[0].nome,
                nick: resultadoMostrar[0].nickname,
                imagem: resultadoMostrar[0].imagem,
                dtNasc: resultadoMostrar[0].dtNasc,
                senha: resultadoMostrar[0].senha,
            })
        })
        .catch(
            function(erro){
                console.error(erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    mostrar
}