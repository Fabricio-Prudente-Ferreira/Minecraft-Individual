var express = require("express");
var router = express.Router();

var termoController = require("../controllers/termoController");

router.post("/inserir", function (req, res) {
    termoController.inserir(req, res);
})

module.exports = router;