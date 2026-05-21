var dashboardModel = require("../models/dashboardModel");

function nascimento(req, res) {
    dashboardModel.nascimento()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function criativa(req, res) {
    dashboardModel.criativa()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
function resultadoquiz(req, res) {
    dashboardModel.resultadoquiz()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function resultadoUsuario(req, res) {
    let idUsuario = req.params.idUsuario;
    console.log(idUsuario);

    dashboardModel.resultadoUsuario(idUsuario)
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
nascimento,
criativa,
resultadoquiz,
resultadoUsuario
};