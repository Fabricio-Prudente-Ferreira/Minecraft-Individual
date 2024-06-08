function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nick = sessionStorage.NICK_USUARIO;
    var nick_usuario = document.getElementById("nick_usuario");

    if (email != null && nick != null) {
        nick_usuario.innerHTML = nick;
    } else {
        window.location = "../login.html";
    }
}

function load_user_data(){
    var id = `#${sessionStorage.ID_USUARIO}`;
    var name = sessionStorage.NOME_USUARIO;
    var nick = sessionStorage.NICK_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var birthdate = sessionStorage.DTNASC_USUARIO.split('T')[0];
    var passWd = sessionStorage.SENHA_USUARIO;
    var data_array = [id, name, nick, email, birthdate, passWd];

    var elements_array = [
        document.getElementById('inp_id'),
        document.getElementById('inp_nome'),
        document.getElementById('inp_nick'),
        document.getElementById('inp_email'),
        document.getElementById('inp_dtNasc'),
        document.getElementById('inp_senha')
    ];

    for(var index = 0; index < data_array.length; index++){
        elements_array[index].value = data_array[index];
    }

    if(sessionStorage.IMAGEM_USUARIO != 'undefined') var imagem = sessionStorage.IMAGEM_USUARIO;

    document.getElementById('avatar').src = imagem;
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function finalizarSessao(texto, bool) {
    if(bool) var cor = '#14ddeb';
    else var cor = 'red';
    document.getElementById('div_erro').style.color = cor;
    document.getElementById('div_erro').innerHTML = texto;
}

