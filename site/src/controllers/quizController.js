var quizModel = require("../models/quizModel");

function abrir(req, res){
    var idQuiz = req.body.idQuizServer;

    if(idQuiz == undefined) res.status(400).send("Seu ID está undefined");
    else {
        quizModel.abrir(idQuiz)
        .then(
            function(resultadoAbrir){
                res.json({
                    id: resultadoAbrir[0].idQuiz,
                    tema: resultadoAbrir[0].tema
                });
            }
        ).catch(
            function(erro){
                console.log(erro);
            }
        )
    }
}

function inserir(req, res){
    var idQuiz = req.body.idQuizServer;
    var idUser = req.body.idUserServer;
    var pontuacao = req.body.pontuacaoServer;

    if(idQuiz == undefined) res.status(400).send("Seu idQuiz está undefined");
    else if(idUser == undefined) res.status(400).send("Seu idUser está undefined");
    else if(pontuacao == undefined) res.status(400).send("Sua pontuacao está undefined");
    else {
        quizModel.inserir(idQuiz, idUser, pontuacao)
        .then(function(respostaInserir){
            res.json(respostaInserir)
        })
        .catch(function(erro){
            console.error(erro);
            console.log("\nHouve um erro ao inserir a pontuação do Quiz! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    abrir,
    inserir
}