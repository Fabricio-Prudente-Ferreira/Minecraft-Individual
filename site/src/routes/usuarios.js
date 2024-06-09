var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/atualizar", function (req, res) {
    usuarioController.atualizar(req, res);
})

router.post("/mostrar", function (req, res) {
    usuarioController.mostrar(req, res);
})

router.post("/detectarSenha", function (req, res) {
    usuarioController.detectarSenha(req, res);
})

module.exports = router;