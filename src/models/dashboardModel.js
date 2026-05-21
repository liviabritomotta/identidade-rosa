var database = require("../database/config");

function nascimento(){
    var instrucaoSql = `SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, dataDeNascimento, CURDATE())),0)
     as media  FROM usuario;`

      return database.executar(instrucaoSql);
}

function criativa(){
    var instrucaoSql = `SELECT COUNT(*) as quantidadecriativa from resultado_quiz WHERE criativa > 7`

      return database.executar(instrucaoSql);
}

function resultadoquiz(){
    var instrucaoSql =`SELECT resultado
FROM resultado_quiz
GROUP BY resultado
ORDER BY COUNT(*) DESC
LIMIT 1;`
      return database.executar(instrucaoSql);
}

function resultadoUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT fkUsuario, moda, tech, criativa, esporte, estudo, maquiar, viagem FROM resultado_quiz
        WHERE fkUsuario = ${idUsuario};
    `
    return database.executar(instrucaoSql);
}

module.exports ={
    nascimento,
    criativa,
    resultadoquiz,
    resultadoUsuario
}