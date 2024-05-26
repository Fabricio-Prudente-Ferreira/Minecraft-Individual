var termoModel = require("../models/termoModel");

function inserir(req, res){
    var idUser = req.body.idUserServer;
    var palavraSecreta = req.body.palavraSecretaServer;
    var tentativas = req.body.tentativasServer;
    var acertos = req.body.acertosServer;
    var semiacertos = req.body.semiacertosServer;
    var modo = req.body.modoServer;
    var resultado = req.body.resultadoServer;

    if(idUser == undefined) res.status(400).send("Seu idUser está undefined");
    else if(palavraSecreta == undefined) res.status(400).send("Sua palavraSecreta está undefined");
    else if(tentativas == undefined) res.status(400).send("Suas tentativas estão undefined");
    else if(acertos == undefined) res.status(400).send("Seus acertos estão undefined");
    else if(semiacertos == undefined) res.status(400).send("Seus semiacertos estão undefined");
    else if(modo == undefined) res.status(400).send("Seu modo está undefined");
    else if(resultado == undefined) res.status(400).send("Seu resultado está undefined");
    else {
        termoModel.inserir(idUser, palavraSecreta, tentativas, acertos, semiacertos, modo, resultado)
        .then(function(respostaInserir){
            res.json(respostaInserir)
        })
        .catch(function(erro){
            console.error(erro);
            console.log("\nHouve um erro ao inserir a pontuação do termo! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    inserir
}