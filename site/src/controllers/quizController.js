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
    var tempoExecutado = req.body.tempoExecutadoServer;

    if(idQuiz == undefined) res.status(400).send("Seu idQuiz está undefined");
    else if(idUser == undefined) res.status(400).send("Seu idUser está undefined");
    else if(pontuacao == undefined) res.status(400).send("Sua pontuacao está undefined");
    else if(tempoExecutado == undefined) res.status(400).send("Seu tempoExecutado está undefined");
    else {
        quizModel.inserir(idQuiz, idUser, pontuacao, tempoExecutado)
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

function quizColocacao(req, res){
    var idQuiz = req.body.idQuizServer;

    if(idQuiz == undefined) res.status(400).send("Sua idQuiz está undefined");
    else {
        quizModel.quizColocacao(idQuiz)
        .then(function(respostaColocacao){
            if(respostaColocacao.length >= 1){
                var lista_usuarios = [];
                var lista_pontuacoes = [];
                var lista_tempo = [];

                for(var index = 0; index < respostaColocacao.length; index++){
                    lista_usuarios.push(respostaColocacao[index].nome);
                    lista_pontuacoes.push(respostaColocacao[index].pontuacao);
                    lista_tempo.push(respostaColocacao[index].tempoExecutado);
                }

                res.json({
                    usuario: lista_usuarios,
                    pontuacao: lista_pontuacoes,
                    tempo: lista_tempo
                });
            } else res.status(403).send("Sem pontuações disponíveis");
        })
    }
}

module.exports = {
    abrir,
    inserir,
    quizColocacao
}