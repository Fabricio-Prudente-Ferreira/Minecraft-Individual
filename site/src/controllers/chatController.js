var chatModel = require("../models/chatModel");

function enviar(req, res){
    var mensagem = req.body.mensagemServer;
    var idUser = req.body.idUserServer;
    var idChat = req.body.idChatServer;

    if (mensagem == undefined) res.status(400).send("Sua mensagem está undefined!");
    else if (idUser == undefined) res.status(400).send("Seu idUser está indefined!");
    else if (idChat == undefined) res.status(400).send("Seu idChat está indefined!");
    else {
        chatModel.enviar(mensagem, idUser, idChat)
        .then(
            function(resultadoEnviar){
                console.log(resultadoEnviar);
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

module.exports = {
    enviar
}