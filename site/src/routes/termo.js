var express = require("express");
var router = express.Router();

var termoController = require("../controllers/termoController");

router.post("/inserir", function (req, res) {
    termoController.inserir(req, res);
})

router.post("/termoColocacao", function (req, res) {
    termoController.termoColocacao(req, res);
})

module.exports = router;