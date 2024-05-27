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
            labelsChartJS.push(`Tent. ${cont + 1}`);
            pontuacoes.push(lista[cont]);
        }
    } else {
        for(var cont = lista.length - 5; cont < lista.length; cont++){
            labelsChartJS.push(`Tent. ${cont + 1}`);
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
    div.innerHTML = `<span class='aviso avisoQuiz'>Você ainda não jogou o Quiz de tema ${tema}. <a href='./quiz.html'>Clique aqui para jogar!</a></span>`;
}