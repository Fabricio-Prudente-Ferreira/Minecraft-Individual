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
    pontuacao INT,
    dataHota DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    tempoExecutado INT,
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
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    modo VARCHAR(45) NOT NULL,
    resultado INT NOT NULL,
    tempoExecutado INT,
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
SELECT * FROM Chat;
SELECT * FROM Mensagem WHERE fkChat = 2;
INSERT INTO Mensagem VALUES(DEFAULT, 5, 2, 'Fale alguma coisa aqui!', DEFAULT);
UPDATE Usuario SET nickname = 'Steve Jobs' WHERE idUsuario = 4;
SELECT * FROM Quiz;
SELECT * FROM PontuacaoQuiz;
SELECT * FROM PontuacaoTermo;

INSERT INTO PontuacaoTermo VALUES(DEFAULT, 7, 'SLIME', 1, 7, 0, '2024-04-25 17:00:00', 'Fácil', 1, 10);

SELECT MIN(qtdTentativas) AS 'tentativa', nome, MIN(tempoExecutado) FROM PontuacaoTermo 
	JOIN Usuario ON fkUsuario = idUsuario 
    WHERE resultado = 1 AND modo = 'Fácil' 
    GROUP BY nome
    ORDER BY MIN(tempoExecutado) ASC, MIN(tempoExecutado) ASC;

INSERT INTO PontuacaoQuiz VALUES(DEFAULT, 3, 12, 1, DEFAULT);
SELECT * FROM Mensagem JOIN Usuario WHERE id;
TRUNCATE TABLE PontuacaoTermo;
TRUNCATE TABLE Mensagem;
TRUNCATE TABLE PontuacaoQuiz;
DELETE FROM Usuario WHERE idUsuario >= 8;
UPDATE Chat SET tema = "Poções" WHERE idChat = 3;

SELECT qtdTentativas, modo, resultado, nome FROM PontuacaoTermo JOIN Usuario ON fkUsuario = idUsuario;
SELECT MIN(qtdTentativas), nome FROM PontuacaoTermo 
	JOIN Usuario ON fkUsuario = idUsuario 
    WHERE resultado = 1
    GROUP BY nome 
    ORDER BY MIN(qtdTentativas) ASC;
DESC PontuacaoTermo;

