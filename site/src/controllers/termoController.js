var termoModel = require("../models/termoModel");

// function abrir(req, res){
//     var idQuiz = req.body.idQuizServer;

//     if(idQuiz == undefined) res.status(400).send("Seu ID está undefined");
//     else {
//         termoModel.abrir(idQuiz)
//         .then(
//             function(resultadoAbrir){
//                 res.json({
//                     id: resultadoAbrir[0].idQuiz,
//                     tema: resultadoAbrir[0].tema
//                 });
//             }
//         ).catch(
//             function(erro){
//                 console.log(erro);
//             }
//         )
//     }
// }

function inserir(req, res){
    var idUser = req.body.idUserServer;
    var palavraSecreta = req.body.palavraSecretaServer;
    var tentativas = req.body.tentativasServer;
    var acertos = req.body.acertosServer;
    var semiacertos = req.body.semiacertosServer;
    var modo = req.body.modoServer;

    if(idUser == undefined) res.status(400).send("Seu idUser está undefined");
    else if(palavraSecreta == undefined) res.status(400).send("Sua palavraSecreta está undefined");
    else if(tentativas == undefined) res.status(400).send("Suas tentativas estão undefined");
    else if(acertos == undefined) res.status(400).send("Seus acertos estão undefined");
    else if(semiacertos == undefined) res.status(400).send("Seus semiacertos estão undefined");
    else if(modo == undefined) res.status(400).send("Seu modo está undefined");
    else {
        termoModel.inserir(idUser, palavraSecreta, tentativas, acertos, semiacertos, modo)
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
    // abrir,
    inserir
}