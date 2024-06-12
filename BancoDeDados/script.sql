DROP DATABASE VillageCraft;
CREATE DATABASE VillageCraft;
USE VillageCraft;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    dtNasc DATE NOT NULL,
    imagem VARCHAR(250),
    senha VARCHAR(45) NOT NULL,
    CONSTRAINT chkImagem CHECK(
		imagem LIKE '%.png' OR 
        imagem LIKE '%.jpg' OR
        imagem LIKE '%.gif' OR
        imagem LIKE '%.webp'
	)
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
    pontuacao INT NOT NULL,
    tempoExecutado INT NOT NULL,
    FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY(fkQuiz) REFERENCES Quiz(idQuiz)
);

CREATE TABLE PontuacaoTermo(
	idPontuacaoTermo INT AUTO_INCREMENT,
    fkUsuario INT,
    PRIMARY KEY(idPontuacaoTermo, fkUsuario),
    FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario),
    palavra VARCHAR(7) NOT NULL,
    qtdTentativas INT NOT NULL,
    qtdAcertos INT NOT NULL,
    qtdSemiacertos INT NOT NULL,
    modo VARCHAR(45) NOT NULL,
    resultado INT NOT NULL,
    tempoExecutado INT NOT NULL,
    CONSTRAINT chkModo CHECK(modo IN('Fácil', 'Médio', 'Difícil')),
    CONSTRAINT chkResultado CHECK(resultado IN(0, 1))
);

SHOW TABLES;

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

# COMANDOS TESTES A SEREM APAGADOS FUTURAMENTE -------------
SELECT * FROM Usuario;
SELECT * FROM Quiz;
SELECT * FROM PontuacaoQuiz;
SELECT * FROM PontuacaoTermo;
SELECT * FROM Chat;
SELECT * FROM Mensagem;