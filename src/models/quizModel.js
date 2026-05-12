var database = require("../database/config");

function cadastrar(fkUsuario, moda, tech, criativa, esporte, estudo, maquiar, viagem, resultado) {
    var instrucaoSql = `
        INSERT INTO resultado_quiz 
        (fkUsuario, fkQuiz, moda, tech, criativa, esporte, estudo, maquiar, viagem, resultado)
        VALUES
        (${fkUsuario}, 1, ${moda}, ${tech}, ${criativa}, ${esporte}, ${estudo}, ${maquiar}, ${viagem}, '${resultado}');
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResultados() {
    var instrucaoSql = `
        SELECT resultado, COUNT(*) AS total
        FROM resultado_quiz
        GROUP BY resultado
        ORDER BY total DESC;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarResultados
};