var chatModel = require("../models/chatModel");

function acessar(req, res){
    var idChat = req.body.idChatServer;

    if(idChat == undefined) res.status(400).send("Seu idChat está undefined!");
    else {
        chatModel.acessar(idChat)
        .then(
            function(resultadoAcessar){
                res.json({
                    id: resultadoAcessar[0].idChat,
                    tema: resultadoAcessar[0].tema
                });
            }
        ).catch(
            function(erro){
                console.log(erro);
            }
        )
    }
}

function enviar(req, res){
    var mensagem = req.body.mensagemServer;
    var idUser = req.body.idUserServer;
    var idChat = req.body.idChatServer;

    if (mensagem == undefined) res.status(400).send("Sua mensagem está undefined!");
    else if (idUser == undefined) res.status(400).send("Seu idUser está undefined!");
    else if (idChat == undefined) res.status(400).send("Seu idChat está undefined!");
    else {
        chatModel.enviar(mensagem, idUser, idChat)
        .then(
            function(resultadoEnviar){
                res.json(resultadoEnviar);
            }
        ).catch(
            function(erro){
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

function atualizar(req, res){
    var idChat = req.body.idChatServer;

    chatModel.atualizar(idChat)
    .then(
        function(respostaAtualizar){
            if(respostaAtualizar.length > 0) res.status(200).json(respostaAtualizar);
            else res.status(204).send("Nenhum resultado encontrado!");
        }
    ).catch(
        function(erro){
            console.log(erro);
        }
    )
}

module.exports = {
    acessar,
    enviar,
    atualizar
}