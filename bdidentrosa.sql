create database identidaderosa;
use identidaderosa;
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
    dataDeNascimento DATE,
	senha VARCHAR(50)
);


CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(255)
);

insert into quiz (titulo, descricao) VALUES ('personalidade', 'teste de personalidade');

CREATE TABLE resultado_quiz (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkQuiz INT,
    moda INT,
    tech INT,
    criativa INT,
    esporte INT,
    estudo INT,
    maquiar INT,
    viagem INT,
    resultado VARCHAR(100),
    dtResposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);


SELECT * FROM resultado_quiz;
SELECT * FROM usuario;

select count(resultado) from resultado_quiz group by resultado order by resultado desc limit 1;

select count(*) as quantidadecriativa from resultado_quiz where criativa > 7 

SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, dataDeNascimento, CURDATE())),0) as media  FROM usuario;



