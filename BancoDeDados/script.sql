CREATE DATABASE VillageCraft;
USE VillageCraft;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    dtNasc DATE NOT NULL,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    tema VARCHAR(30) NOT NULL
);

CREATE TABLE Pontuacao(
	idPontuacao INT,
    fkUsuario INT,
    fkQuizPont INT,
    PRIMARY KEY(idPontuacao, fkUsuario, fkQuizPont),
    acertos INT,
    perg_respondidas INT,
    FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY(fkQuizPont) REFERENCES Quiz(idQuiz)
);

CREATE TABLE Pergunta(
	idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(90) NOT NULL,
    fkQuizPerg INT,
    FOREIGN KEY(fkQuizPerg) REFERENCES Quiz(idQuiz)
);

CREATE TABLE Alternativa(
	idAlternativa INT PRIMARY KEY AUTO_INCREMENT,
    valor VARCHAR(60) NOT NULL,
    alternativa_certa TINYINT,
    CONSTRAINT chkCerto CHECK(alternativa_certa IN(0, 1)),
    fkPergunta INT,
    fkPergQuiz INT,
    FOREIGN KEY(fkPergunta) REFERENCES Pergunta(idPergunta),
    FOREIGN KEY(fkPergQuiz) REFERENCES Pergunta(fkQuizPerg)
);



