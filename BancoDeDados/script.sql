CREATE DATABASE VillageCraft;
USE VillageCraft;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    dtNasc DATE NOT NULL,
    imagem VARCHAR(250),
    senha VARCHAR(45) NOT NULL
);

SELECT * FROM Usuario; 

/*CREATE TABLE Quiz(
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
);*/

CREATE TABLE Chat(
	idChat INT AUTO_INCREMENT PRIMARY KEY,
    tema VARCHAR(30) NOT NULL
);

CREATE TABLE Mensagem(
	idMensagem INT AUTO_INCREMENT,
    fkUsuarioMsg INT,
    fkChat INT,
    PRIMARY KEY(idMensagem, fkUsuarioMsg, fkChat),
    texto VARCHAR(200) NOT NULL,
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(fkUsuarioMsg) REFERENCES Usuario(idUsuario),
    FOREIGN KEY(fkChat) REFERENCES Chat(idChat)
);

INSERT INTO Chat(tema) VALUES
	('Atualização'),
	('Redstone'),
	('Hypixel'),
	('Mobs'),
	('Servers'),
	('Construções'),
	('Mineração'),
	('Mods'),
	('Minecraft Legends'),
	('Minecraft Education'),
	('Minecraft Dungeons'),
	('Sugestões');
    
SELECT * FROM Chat;
SELECT * FROM Usuario;

SELECT * FROM Mensagem;

INSERT INTO Mensagem(texto, fkUsuarioMsg, fkChat) VALUES('Quero coxinha!!!', 3, 2);
SELECT * FROM Mensagem JOIN Usuario WHERE id;
TRUNCATE TABLE Mensagem;
UPDATE Chat SET tema = "Poções" WHERE idChat = 3;

