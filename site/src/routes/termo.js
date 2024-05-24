var express = require("express");
var router = express.Router();

var termoController = require("../controllers/termoController");

router.post("/abrir", function (req, res) {
    termoController.abrir(req, res);
})

router.post("/inserir", function (req, res) {
    termoController.inserir(req, res);
})

module.exports = router;