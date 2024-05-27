var pontuacaoModel = require("../models/pontuacaoModel");

function termo(req, res){
    var idUsuario = req.body.idUsuarioServer;

    if(idUsuario == undefined) res.status(400).send("Seu idUser está undefined");
    else {
        pontuacaoModel.termo(idUsuario)
        .then(function(respostaTermo){
            if(respostaTermo.length >= 1){
                var lista_qtdTentativas = [];
                var lista_modos = [];
                var lista_palavras = [];
                var lista_resultados = [];

                for(var index = 0; index < respostaTermo.length; index++){
                    lista_qtdTentativas.push(respostaTermo[index].qtdTentativas);
                    lista_modos.push(respostaTermo[index].modo);
                    lista_palavras.push(respostaTermo[index].palavra);
                    lista_resultados.push(respostaTermo[index].resultado);
                }

                res.json({
                    qtdTentativas: lista_qtdTentativas,
                    modo: lista_modos,
                    palavra: lista_palavras,
                    resultado: lista_resultados
                });
            } else res.status(403).send("Sem pontuações disponíveis");
        })
        .catch(function(erro){
            console.error(erro);
            console.error("\nHouve um erro ao capturar a pontuação do termo! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
    }
}

function quizzes(req, res){
    var idUsuario = req.body.idUsuarioServer;

    if(idUsuario == undefined) res.status(400).send("Seu idUser está undefined");
    else {
        pontuacaoModel.quizzes(idUsuario)
        .then(function(respostaQuizzes){
            if(respostaQuizzes.length >= 1){
                var lista_pontAll = [];
                var lista_pontOres = [];
                var lista_pontReds = [];
                var lista_pontMobs = [];
                var lista_pontBlocks = [];
                var lista_pontItems = [];
                var lista_pontEnchant = [];
                var lista_pontBiomes = [];
                var lista_pontPotions = [];
                var lista_pontStructures = [];
                var lista_pontCrafts = [];
                var lista_pontTrades = [];

                for(var index = 0; index < respostaQuizzes.length; index++){
                    var temaQuiz = respostaQuizzes[index].tema;

                    if(temaQuiz == "Geral") lista_pontAll.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Minérios") lista_pontOres.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Redstone") lista_pontReds.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Mobs") lista_pontMobs.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Blocos") lista_pontBlocks.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Itens") lista_pontItems.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Encantamentos") lista_pontEnchant.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Biomas") lista_pontBiomes.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Poções") lista_pontPotions.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Estruturas") lista_pontStructures.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Crafts") lista_pontCrafts.push(respostaQuizzes[index].pontuacao);
                    else if(temaQuiz == "Comércio") lista_pontTrades.push(respostaQuizzes[index].pontuacao);
                }

                res.json({
                    pontAll: lista_pontAll,
                    pontOres: lista_pontOres,
                    pontReds: lista_pontReds,
                    pontMobs: lista_pontMobs,
                    pontBlocks: lista_pontBlocks,
                    pontItems: lista_pontItems,
                    pontEnchant: lista_pontEnchant,
                    pontBiomes: lista_pontBiomes,
                    pontPotions: lista_pontPotions,
                    pontStructures: lista_pontStructures,
                    pontCrafts: lista_pontCrafts,
                    pontTrades: lista_pontTrades
                });
            } else res.status(403).send("Sem pontuações disponíveis");
        })
        .catch(function(erro){
            console.error(erro);
            console.error("\nHouve um erro ao capturar a pontuação dos quizzes! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    termo,
    quizzes
}