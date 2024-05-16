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
    fkUsuarioPont INT,
    fkQuizPont INT,
    PRIMARY KEY(idPontuacao, fkUsuarioPont, fkQuizPont),
    acertos INT,
    perg_respondidas INT,
    FOREIGN KEY(fkUsuarioPont) REFERENCES Usuario(idUsuario),
    FOREIGN KEY(fkQuizPont) REFERENCES Quiz(idQuiz)
);

CREATE TABLE Chat(
	idChat INT AUTO_INCREMENT PRIMARY KEY,
    tema VARCHAR(30) NOT NULL
);

CREATE TABLE Mensagem(
	idMensagem INT,
    fkUsuarioMsg INT,
    fkChat INT,
    PRIMARY KEY(idMensagem, fkUsuarioMsg, fkChat),
    texto VARCHAR(200),
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(fkUsuarioMsg) REFERENCES Usuario(idUsuario),
    FOREIGN KEY(fkChat) REFERENCES Chat(idChat)
);


