var database = require("../database/config");

function nascimento(){
    var instrucaoSql = `SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, dataDeNascimento, CURDATE())),0)
     as media  FROM usuario;`

      return database.executar(instrucaoSql);
}

function criativa(){
    var instrucaoSql = `select count(*) as qtdGeral, (select count(*) from resultado_quiz where criativa > 7) as qtdCriativa from resultado_quiz;`

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