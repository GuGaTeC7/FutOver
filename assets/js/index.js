// MODAL TIMES
const escudo = document.getElementById("escudo");
const divTimes = document.querySelector(".timesCompleto");
const triangulo = document.getElementById("triangulo-para-cima");

escudo.addEventListener("mouseenter", function () {
  divTimes.style.display = "block";
});

triangulo.addEventListener("mouseenter", function () {
  divTimes.style.display = "block";
});

escudo.addEventListener("mouseleave", function () {
  divTimes.style.display = "none";
});

divTimes.addEventListener("mouseleave", function () {
  divTimes.style.display = "none";
}); 

function mudaCorA() {
  const divLtimeB = document.getElementById("serieBButton");
  const divLtime = document.getElementById("serieAButton");
  const divLtimeE = document.getElementById("europaButton");

  divLtime.style.borderBottomColor = "green";
  divLtime.style.color = "rgb(24, 139, 24)";

  divLtimeB.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeB.style.color = "rgba(0, 0, 0, 0.514)";

  divLtimeE.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeE.style.color = "rgba(0, 0, 0, 0.514)";

  document.getElementById("serieA").setAttribute("style", "display:grid;");
  document.getElementById("serieB").setAttribute("style", "display:none;");
  document.getElementById("serieE").setAttribute("style", "display:none;");
}

function mudaCorB() {
  const divLtimeA = document.getElementById("serieAButton");
  const divLtime = document.getElementById("serieBButton");
  const divLtimeE = document.getElementById("europaButton");

  divLtime.style.borderBottomColor = "green";
  divLtime.style.color = "rgb(24, 139, 24)";

  divLtimeA.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeA.style.color = "rgba(0, 0, 0, 0.514)";

  divLtimeE.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeE.style.color = "rgba(0, 0, 0, 0.514)";

  document.getElementById("serieB").setAttribute("style", "display:grid;");
  document.getElementById("serieA").setAttribute("style", "display:none;");
  document.getElementById("serieE").setAttribute("style", "display:none;");
}

function mudaCorE() {
  const divLtimeA = document.getElementById("serieAButton");
  const divLtimeB = document.getElementById("serieBButton");
  const divLtime = document.getElementById("europaButton");
  divLtime.style.borderBottomColor = "green";
  divLtime.style.color = "rgb(24, 139, 24)";

  divLtimeA.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeA.style.color = "rgba(0, 0, 0, 0.514)";

  divLtimeB.style.border = "1px solid rgba(0,0,0,.1)";
  divLtimeB.style.color = "rgba(0, 0, 0, 0.514)";

  document.getElementById("serieE").setAttribute("style", "display:grid;");
  document.getElementById("serieB").setAttribute("style", "display:none;");
  document.getElementById("serieA").setAttribute("style", "display:none;");
}

// VALIDAÇÃO LOGIN
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário
});

function logar() {
var login = document.getElementById('nome').value;
var senha = document.getElementById('senha').value;

var usuariosCadastrados = ['admin', 'gustavo'];
var senhasCadastradas = ['admin', 'gustavo'];

// Verifica se tanto o nome de usuário quanto a senha estão nas respectivas listas
if (usuariosCadastrados.includes(login) && senhasCadastradas.includes(senha)) {
    bootbox.alert({
        message: 'Login realizado com sucesso!',
        size: 'small',
        buttons: {
            ok: {
                className: 'btn btn-success'
            }
        },
        callback: function () {
            window.location.href = 'http://127.0.0.1:5501/view/homeLogado.html';
        }
    });
    } else if (login === '' || senha === '') {
        bootbox.alert({
            message: 'Insira seu <b>Nome de usuário</b> e <b>Senha</b> para enviar!',
            size: 'large',
            buttons: {
                ok: {
                    className: 'btn btn-success'
                }
            }
        });
    }
    else {
        bootbox.alert({
            message: 'Nome de usuário ou senha inválidos!',
            size: 'small',
            buttons: {
                ok: {
                    className: 'btn btn-success'
                }
            }
        });
    }
}

// REVELA SENHA
 let olho = document.getElementById('olho');
 let senha = document.getElementById('senha');


 olho.onclick = function() {
  if(senha.type == 'password') {
    senha.type = 'text';
    olho.src = '/assets/img/icons8-invisível-20.png';
  } else {
    senha.type = 'password';
    olho.src = '/assets/img/icons8-visível-20.png';
  }
 }



// VALIDAÇÃO EMAIL
function validaCadastro() {
  const nome = document.getElementById('nome').value;
  const nomeUsuario = document.getElementById('nomeUsuario').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;
  const senhaC = document.getElementById('senhaC').value;
  const sexo = document.querySelector('input[name="gender"]:checked');
  const termos = document.getElementById('termos');

  if (!nome) {
    bootbox.alert({
    message: 'Insira seu <b>Nome Completo</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!nomeUsuario) {
    bootbox.alert({
    message: 'Insira seu <b>Nome de Usuário</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!email) {
    bootbox.alert({
    message: 'Insira seu <b>Email</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!telefone) {
    bootbox.alert({
    message: 'Insira seu <b>Telefone</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!senha) {
    bootbox.alert({
    message: 'Insira uma <b>Senha</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!senhaC) {
    bootbox.alert({
    message: 'Confirme sua <b>Senha</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }

  if (!sexo) {
    bootbox.alert({
    message: 'Insira seu <b>Sexo Biológico</b>!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }
  if (!termos.checked) {
    bootbox.alert({
    message: 'Aceite os <b>Termos de uso</b> e <b>Política de Privacidade</b>!',
    size: 'large',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  }


  // VALIDA SENHA
  if (senha !== senhaC) {
    bootbox.alert({
    message: 'Senhas não coincidem!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    }
  });
    return;
  } else {
    bootbox.alert({
    message: 'Cadastro realizado com sucesso!',
    size: 'small',
    buttons: {
        ok: {
            className: 'btn btn-success'
        }
    },
    callback: function () {
        window.location.href = 'http://127.0.0.1:5501/view/homeLogado.html';
    }
  });
  }

}

  