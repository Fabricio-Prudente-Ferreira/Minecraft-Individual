var termoModel = require("../models/termoModel");

function inserir(req, res){
    var idUser = req.body.idUserServer;
    var palavraSecreta = req.body.palavraSecretaServer;
    var tentativas = req.body.tentativasServer;
    var acertos = req.body.acertosServer;
    var semiacertos = req.body.semiacertosServer;
    var modo = req.body.modoServer;
    var resultado = req.body.resultadoServer;
    var tempoCronometro = req.body.tempoCronometroServer;

    if(idUser == undefined) res.status(400).send("Seu idUser está undefined");
    else if(palavraSecreta == undefined) res.status(400).send("Sua palavraSecreta está undefined");
    else if(tentativas == undefined) res.status(400).send("Suas tentativas estão undefined");
    else if(acertos == undefined) res.status(400).send("Seus acertos estão undefined");
    else if(semiacertos == undefined) res.status(400).send("Seus semiacertos estão undefined");
    else if(modo == undefined) res.status(400).send("Seu modo está undefined");
    else if(resultado == undefined) res.status(400).send("Seu resultado está undefined");
    else if(tempoCronometro == undefined) res.status(400).send("Seu tempoCronometro está undefined");
    else {
        termoModel.inserir(idUser, palavraSecreta, tentativas, acertos, semiacertos, modo, resultado, tempoCronometro)
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

function termoColocacao(req, res){
    var dificuldade = req.body.dificuldadeServer;

    if(dificuldade == undefined) res.status(400).send("Sua dificuldade está undefined");
    else {
        termoModel.termoColocacao(dificuldade)
        .then(function(respostaColocacao){
            if(respostaColocacao.length >= 1){
                var lista_usuarios = [];
                var lista_tentativas = [];
                var lista_tempo = [];

                for(var index = 0; index < respostaColocacao.length; index++){
                    lista_usuarios.push(respostaColocacao[index].nome);
                    lista_tentativas.push(respostaColocacao[index].tentativa);
                    lista_tempo.push(respostaColocacao[index].tempoExecutado);
                }

                res.json({
                    usuario: lista_usuarios,
                    tentativa: lista_tentativas,
                    tempo: lista_tempo
                });
            } else res.status(403).send("Sem pontuações disponíveis");
        })
    }
}

module.exports = {
    inserir,
    termoColocacao
}