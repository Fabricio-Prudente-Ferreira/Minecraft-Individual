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

CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    tema VARCHAR(30) NOT NULL
);

CREATE TABLE PontuacaoQuiz(
	idPontuacaoQuiz INT AUTO_INCREMENT,
    fkUsuario INT,
    fkQuiz INT,
    PRIMARY KEY(idPontuacaoQuiz, fkUsuario, fkQuiz),
    pontuacao INT,
    dataHota DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY(fkQuiz) REFERENCES Quiz(idQuiz)
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
    
INSERT INTO Quiz(tema) VALUES
	('Geral'),
	('Minérios'),
	('Redstone'),
	('Mobs'),
	('Blocos'),
	('Itens'),
	('Encantamentos'),
	('Biomas'),
	('Poções'),
	('Estruturas'),
	('Crafts'),
	('Comércio');

SELECT * FROM Usuario;
SELECT * FROM Chat;
SELECT * FROM Mensagem;
SELECT * FROM Quiz;
SELECT * FROM PontuacaoQuiz;

INSERT INTO Mensagem(texto, fkUsuarioMsg, fkChat) VALUES('Bom dia!!!', 3, 2);
SELECT * FROM Mensagem JOIN Usuario WHERE id;
TRUNCATE TABLE Mensagem;
UPDATE Chat SET tema = "Poções" WHERE idChat = 3;



