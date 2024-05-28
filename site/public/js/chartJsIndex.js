var options_scale_termo_tentativas = {
    x: {
        border: {
            color: 'white'
        },
        title: {
            display: true,
            text: 'Jogos',
            color: '#ccc',
            font: {
                size: 25,
                family: 'pixel-font'
            }
        },
        ticks: {
            color: '#ccc',
            font: {
                family: 'pixel-font',
                size: 20
            }
        },
        grid: {
            color: '#666',
            tickColor: 'white'
        }
    },
    y: {
        min: 0,
        max: 7,
        title: {
            display: true,
            text: 'Nº de Tentativas',
            color: '#ccc',
            font: {
                size: 25,
                family: 'pixel-font'
            }
        },
        ticks: {
            stepSize: 1,
            color: '#ccc',
            font: {
                family: 'pixel-font',
                size: 20
            }
        },
        grid: {
            color: '#666',
            tickColor: 'white'
        },
        border: {
            color: 'white'
        }
    }
}

var options_termo_geral = {
    plugins: {
        title: {
            display: true,
            text: 'Conquistas',
            color: 'white',
            font: {
                family: 'pixel-font',
                size: 60
            }
        },
        legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            minHeight: 350,
            labels: {
                color: '#ccc',
                padding: 30,
                boxWidth: 40,
                font: {
                    family: 'pixel-font',
                    size: 25
                }
            }
        }
    }
}

function chartjs_termo_facil(){
    var last_tentativas_facil = [];
    var last_pontuacoes_facil = [];
    var last_cores_facil = [];

    if(lista_tentativas_facil.length <= 5){
        last_tentativas_facil = lista_tentativas_facil;
        last_pontuacoes_facil = pontuacoes_facil;
        last_cores_facil = lista_cores_facil;
    } else {
        for(var index = lista_tentativas_facil.length - 5; index < lista_tentativas_facil.length; index++){
            last_tentativas_facil.push(lista_tentativas_facil[index]);
            last_cores_facil.push(lista_cores_facil[index]);
            last_pontuacoes_facil.push(pontuacoes_facil[index]);
        }
    }

    var tentativas_termo_facil = document.getElementById('tentativas_termo_facil').getContext('2d');
    tentativas_termo_facil.canvas.parentNode.style.width = '1000px';
    tentativas_termo_facil.canvas.parentNode.style.height = '500px';
    tentativas_termo_facil.canvas.width = 2;
    tentativas_termo_facil.canvas.height = 1;

    new Chart(
        tentativas_termo_facil,
        {
            type: 'bar',
            data: {
                labels: last_tentativas_facil,
                datasets: [{
                    data: last_pontuacoes_facil,
                    backgroundColor: last_cores_facil
                }]
            },
            options: {
                scales: options_scale_termo_tentativas,
                plugins: {
                    title: {
                        display: true,
                        text: 'Modo Fácil',
                        color: 'white',
                        font: {
                            family: 'pixel-font',
                            size: 60
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        }
    )

    var geral_termo_facil = document.getElementById('geral_termo_facil').getContext('2d');
    geral_termo_facil.canvas.parentNode.style.width = '500px';
    geral_termo_facil.canvas.parentNode.style.height = '500px';
    geral_termo_facil.canvas.width = 1;
    geral_termo_facil.canvas.height = 1;

    new Chart(
        geral_termo_facil,
        {
            type: 'doughnut',
            data: {
                labels: ['Vitórias', 'Derrotas'],
                datasets: [{
                    data: [vitorias_facil, cont_tentativas_facil - vitorias_facil],
                    backgroundColor: ['#48d348', '#004455'],
                }]
            },
            options: options_termo_geral
        }
    )
}

function chartjs_termo_medio() {
    var last_tentativas_medio = [];
    var last_pontuacoes_medio = [];
    var last_cores_medio = [];

    if(lista_tentativas_medio.length <= 5){
        last_tentativas_medio = lista_tentativas_medio;
        last_pontuacoes_medio = pontuacoes_medio;
        last_cores_medio = lista_cores_medio;
    } else {
        for(var index = lista_tentativas_medio.length - 5; index < lista_tentativas_medio.length; index++){
            last_tentativas_medio.push(lista_tentativas_medio[index]);
            last_cores_medio.push(lista_cores_medio[index]);
            last_pontuacoes_medio.push(pontuacoes_medio[index]);
        }
    }

    var tentativas_termo_medio = document.getElementById('tentativas_termo_medio').getContext('2d');
    tentativas_termo_medio.canvas.parentNode.style.width = '1000px';
    tentativas_termo_medio.canvas.parentNode.style.height = '500px';
    tentativas_termo_medio.canvas.width = 2;
    tentativas_termo_medio.canvas.height = 1;

    new Chart(
        tentativas_termo_medio,
        {
            type: 'bar',
            data: {
                labels: last_tentativas_medio,
                datasets: [{
                    data: last_pontuacoes_medio,
                    backgroundColor: last_cores_medio
                }]
            },
            options: {
                scales: options_scale_termo_tentativas,
                plugins: {
                    title: {
                        display: true,
                        text: 'Modo Médio',
                        color: 'white',
                        font: {
                            family: 'pixel-font',
                            size: 60
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        }
    )

    var geral_termo_medio = document.getElementById('geral_termo_medio').getContext('2d');
    geral_termo_medio.canvas.parentNode.style.width = '500px';
    geral_termo_medio.canvas.parentNode.style.height = '500px';
    geral_termo_medio.canvas.width = 1;
    geral_termo_medio.canvas.height = 1;

    new Chart(
        geral_termo_medio,
        {
            type: 'doughnut',
            data: {
                labels: ['Vitórias', 'Derrotas'],
                datasets: [{
                    data: [vitorias_medio, cont_tentativas_medio - vitorias_medio],
                    backgroundColor: ['#48d348', '#004455'],
                }]
            },
            options: options_termo_geral
        }
    )
}

function chartjs_termo_dificil(){
    var last_tentativas_dificil = [];
    var last_pontuacoes_dificil = [];
    var last_cores_dificil = [];

    if(lista_tentativas_dificil.length <= 5){
        last_tentativas_dificil = lista_tentativas_dificil;
        last_pontuacoes_dificil = pontuacoes_dificil;
        last_cores_dificil = lista_cores_dificil;
    } else {
        for(var index = lista_tentativas_dificil.length - 5; index < lista_tentativas_dificil.length; index++){
            last_tentativas_dificil.push(lista_tentativas_dificil[index]);
            last_cores_dificil.push(lista_cores_dificil[index]);
            last_pontuacoes_dificil.push(pontuacoes_dificil[index]);
        }
    }

    var tentativas_termo_dificil = document.getElementById('tentativas_termo_dificil').getContext('2d');
    tentativas_termo_dificil.canvas.parentNode.style.width = '1000px';
    tentativas_termo_dificil.canvas.parentNode.style.height = '500px';
    tentativas_termo_dificil.canvas.width = 2;
    tentativas_termo_dificil.canvas.height = 1;

    new Chart(
        tentativas_termo_dificil,
        {
            type: 'bar',
            data: {
                labels: last_tentativas_dificil,
                datasets: [{
                    data: last_pontuacoes_dificil,
                    backgroundColor: last_cores_dificil
                }]
            },
            options: {
                scales: options_scale_termo_tentativas,
                plugins: {
                    title: {
                        display: true,
                        text: 'Modo Difícil',
                        color: 'white',
                        font: {
                            family: 'pixel-font',
                            size: 60
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        }
    )

    var geral_termo_dificil = document.getElementById('geral_termo_dificil').getContext('2d');
    geral_termo_dificil.canvas.parentNode.style.width = '500px';
    geral_termo_dificil.canvas.parentNode.style.height = '500px';
    geral_termo_dificil.canvas.width = 1;
    geral_termo_dificil.canvas.height = 1;

    new Chart(
        geral_termo_dificil,
        {
            type: 'doughnut',
            data: {
                labels: ['Vitórias', 'Derrotas'],
                datasets: [{
                    data: [vitorias_dificil, cont_tentativas_dificil - vitorias_dificil],
                    backgroundColor: ['#48d348', '#004455'],
                }]
            },
            options: options_termo_geral
        }
    )
}

var options_quiz = {
    x: {
        border: {
            color: 'white'
        },
        title: {
            display: true,
            text: 'Jogos',
            color: '#ccc',
            font: {
                size: 25,
                family: 'pixel-font'
            }
        },
        ticks: {
            color: '#ccc',
            font: {
                family: 'pixel-font',
                size: 20
            }
        },
        grid: {
            color: '#666',
            tickColor: 'white'
        }
    },
    y: {
        min: 0,
        max: 5,
        title: {
            display: true,
            text: 'Nº de Acertos',
            color: '#ccc',
            font: {
                size: 25,
                family: 'pixel-font'
            }
        },
        ticks: {
            stepSize: 1,
            color: '#ccc',
            font: {
                family: 'pixel-font',
                size: 20
            }
        },
        grid: {
            color: '#666',
            tickColor: 'white'
        },
        border: {
            color: 'white'
        }
    }
}

function dataQuiz_chartJS(lista){
    var labelsChartJS = [];
    var pontuacoes = [];

    if(lista.length <= 5){
        for(var cont = 0; cont < lista.length; cont++){
            labelsChartJS.push(`Tentativa ${cont + 1}`);
            pontuacoes.push(lista[cont]);
        }
    } else {
        for(var cont = lista.length - 5; cont < lista.length; cont++){
            labelsChartJS.push(`Tentativa ${cont + 1}`);
            pontuacoes.push(lista[cont]);
        }
    }

    return [labelsChartJS, pontuacoes];
}

function chartjs_quiz(quizTheme){
    var tentativas_quiz = document.getElementById(`tentativas_quiz_${quizTheme[1].toLowerCase()}`).getContext('2d');
    tentativas_quiz.canvas.parentNode.style.width = '700px';
    tentativas_quiz.canvas.parentNode.style.height = '350px';
    tentativas_quiz.canvas.width = 2;
    tentativas_quiz.canvas.height = 1;

    var resultado = dataQuiz_chartJS(quizTheme[0]);

    new Chart(
        tentativas_quiz,
        {
            type: 'bar',
            data: {
                labels: resultado[0],
                datasets: [{
                    label: `Acertos no Quiz - ${quizTheme[1]}`,
                    data: resultado[1],
                    backgroundColor: quizTheme[2],
                    fill: true
                }]
            },
            options: {
                scales: options_quiz,
                plugins: {
                    title: {
                        display: true,
                        text: quizTheme[1],
                        color: 'white',
                        font: {
                            family: 'pixel-font',
                            size: 50
                        }
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#ddd',
                            font: {
                                family: 'pixel-font',
                                size: 20
                            }
                        }
                    }
                }
            }
        }
    )
}

function quiz_erro_texto(div, tema){
    if(tema == 'Geral') url = 'https://cdn.dfg.com.br/itemimages/999494424-minecraft-original-full-acesso-capa-da-optifine-MQE5.webp';
    else if(tema == 'Minérios') url = 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/01/minecraft-diamonds.jpg';
    else if(tema == 'Redstone') url = 'https://wallpapercave.com/wp/wp10656185.png';
    else if(tema == 'Mobs') url = 'https://i.pinimg.com/736x/93/a1/a7/93a1a7ec2b32c2b8a2b5eca8eeefe1a0.jpg';
    else if(tema == 'Blocos') url = 'https://img.game8.co/3532271/d297853aa8e4ea432358d7d0bc53b96c.png/original';
    else if(tema == 'Itens') url = 'https://pbs.twimg.com/media/E5yO_QSX0Agwzsj.png:large';
    else if(tema == 'Encantamentos') url = 'https://beebom.com/wp-content/uploads/2021/12/Minecraft-Enchantments-Guide.jpg';
    else if(tema == 'Biomas') url = 'https://www.gamersdecide.com/sites/default/files/beautiful_biomes_cover.jpg';
    else if(tema == 'Poções') url = 'https://assetsio.gnwcdn.com/minecraft%20potions.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp';
    else if(tema == 'Estruturas') url = 'https://miro.medium.com/v2/resize:fit:1400/1*G_wHQk2D5ZMCl6yW9nZuYw.jpeg';
    else if(tema == 'Crafts') url = 'https://media.sketchfab.com/models/21c0d44437c04b1d8b51a2fc6dac21ec/thumbnails/2cf93212b1ad4c36a61cdd98d1e41944/5cd267b1d51644a984400c140dcb3586.jpeg';
    else if(tema == 'Comércio') url = '../images/villageTheme.jpg';

    div.innerHTML = `<img src=${url} alt=${tema}><span class='aviso avisoQuiz'>Você ainda não jogou o Quiz de tema ${tema}. <a href='./quiz.html'>Clique aqui para jogar!</a></span>`;
}