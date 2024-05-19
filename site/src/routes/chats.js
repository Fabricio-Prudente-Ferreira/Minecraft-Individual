var express = require("express");
var router = express.Router();

var chatController = require("../controllers/chatController");

router.post("/enviar", function (req, res) {
    chatController.enviar(req, res);
})

module.exports = router;