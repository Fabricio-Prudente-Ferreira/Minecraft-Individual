var pontuacaoModel = require("../models/pontuacaoModel");

function termo(req, res){
    var idUsuario = req.body.idUsuarioServer;

    if(idUsuario == undefined) res.status(400).send("Seu idUser está undefined");
    else {
        pontuacaoModel.termo(idUsuario)
        .then(function(respostaTermo){
            if(respostaTermo.length >= 1){
                var lista_qtdTentativas = [];
                var lista_qtdAcertos = [];
                var lista_qtdSemiacertos = [];
                var lista_modos = [];
                var lista_palavras = [];
                var lista_dataHora = [];
                var lista_resultados = [];

                for(var index = 0; index < respostaTermo.length; index++){
                    lista_qtdTentativas.push(respostaTermo[index].qtdTentativas);
                    lista_qtdAcertos.push(respostaTermo[index].qtdAcertos);
                    lista_qtdSemiacertos.push(respostaTermo[index].qtdSemiacertos);
                    lista_modos.push(respostaTermo[index].modo);
                    lista_palavras.push(respostaTermo[index].palavra);
                    lista_dataHora.push(respostaTermo[index].dataHora);
                    lista_resultados.push(respostaTermo[index].resultado);
                }

                res.json({
                    qtdTentativas: lista_qtdTentativas,
                    qtdAcertos: lista_qtdAcertos,
                    qtdSemiacertos: lista_qtdSemiacertos,
                    modo: lista_modos,
                    palavra: lista_palavras,
                    dataHora: lista_dataHora,
                    resultado: lista_resultados
                });
            } else res.status(403).send("Sem pontuações disponíveis");
        })
        .catch(function(erro){
            console.error(erro);
            console.log("\nHouve um erro ao capturar a pontuação do termo! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    termo
}