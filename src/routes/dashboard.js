var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/nascimento", function (req, res) {
    dashboardController.nascimento(req, res);
})

router.get("/criativa", function (req, res) {
    dashboardController.criativa(req, res);
})

router.get("/resultadoquiz", function (req, res) {
    dashboardController.resultadoquiz(req, res);
});

router.get("/resultadoUsuario/:idUsuario", function(req, res) {
    dashboardController.resultadoUsuario(req, res);
})

module.exports = router;

