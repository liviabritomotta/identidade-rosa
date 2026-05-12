var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var moda = req.body.modaServer;
    var tech = req.body.techServer;
    var criativa = req.body.criativaServer;
    var esporte = req.body.esporteServer;
    var estudo = req.body.estudoServer;
    var maquiar = req.body.maquiarServer;
    var viagem = req.body.viagemServer;
    var resultado = req.body.resultadoServer;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else {
        quizModel.cadastrar(fkUsuario, moda, tech, criativa, esporte, estudo, maquiar, viagem, resultado)
            .then(function (resposta) {
                res.json(resposta);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarResultados(req, res) {
    quizModel.buscarResultados()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    buscarResultados
};