var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/termo", function (req, res) {
    pontuacaoController.termo(req, res);
})

router.post("/quizzes", function (req, res) {
    pontuacaoController.quizzes(req, res);
})

router.post("/chats", function (req, res) {
    pontuacaoController.chats(req, res);
})

module.exports = router;