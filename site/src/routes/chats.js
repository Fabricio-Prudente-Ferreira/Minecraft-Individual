var express = require("express");
var router = express.Router();

var chatController = require("../controllers/chatController");

router.post("/acessar", function (req, res) {
    chatController.acessar(req, res);
})

router.post("/enviar", function (req, res) {
    chatController.enviar(req, res);
})

router.post("/atualizar", function(req, res) {
    chatController.atualizar(req, res);
})

module.exports = router;