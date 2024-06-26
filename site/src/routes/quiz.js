var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/abrir", function (req, res) {
    quizController.abrir(req, res);
})

router.post("/inserir", function (req, res) {
    quizController.inserir(req, res);
})

router.post("/quizColocacao", function (req, res) {
    quizController.quizColocacao(req, res);
})

module.exports = router;